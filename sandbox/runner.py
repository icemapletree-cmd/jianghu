"""
代码执行沙箱 - 安全运行玩家输入的Python代码
"""
import subprocess
import sys
import json
import tempfile
import os

# 禁止导入的模块列表（不禁止 sys/io，模板需要）
FORBIDDEN_IMPORTS = {
    'os', 'subprocess', 'shutil', 'pathlib',
    'socket', 'http', 'urllib', 'requests',
    'importlib', 'ctypes', 'multiprocessing',
    'pickle', 'shelve', 'marshal',
    'webbrowser', 'antigravity', 'code', 'codeop',
}

SANDBOX_TEMPLATE = '''
import sys
import io
import json

# 拦截危险import
original_import = __builtins__.__import__

def safe_import(name, *args, **kwargs):
    forbidden = {forbidden}
    if name in forbidden or any(name.startswith(f + '.') for f in forbidden):
        raise ImportError(f"sandbox 禁止导入 '{{name}}'")
    return original_import(name, *args, **kwargs)

__builtins__.__import__ = safe_import

# 捕获输出
_old_stdout = sys.stdout
_old_stderr = sys.stderr
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

_stdout = ""
_stderr = ""
try:
{player_code}
except SystemExit:
    pass
except Exception as e:
    _stderr = f"{{type(e).__name__}}: {{e}}"

_stdout = sys.stdout.getvalue()
if not _stderr:
    _stderr = sys.stderr.getvalue()

sys.stdout = _old_stdout
sys.stderr = _old_stderr

# 输出结果
result = {{
    "stdout": _stdout,
    "stderr": _stderr if _stderr else "",
    "error": _stderr if _stderr else None
}}
print(json.dumps(result, ensure_ascii=False))
'''

TIMEOUT_SECONDS = 30


def run_code(player_code: str, timeout: int = TIMEOUT_SECONDS) -> dict:
    """
    在沙箱中运行玩家代码，返回执行结果。
    
    Args:
        player_code: 玩家编写的Python代码
        timeout: 超时秒数
    
    Returns:
        {
            "success": bool,
            "stdout": str,   # 标准输出
            "stderr": str,   # 错误输出
            "error": str or None,
            "timed_out": bool
        }
    """
    # 给玩家代码每行加4空格缩进（放入try块内）
    indented_code = '\n'.join('    ' + line if line.strip() else line 
                              for line in player_code.split('\n'))
    
    # 构建沙箱代码
    sandbox_code = SANDBOX_TEMPLATE.format(
        player_code=indented_code,
        forbidden=FORBIDDEN_IMPORTS
    )

    # 写入临时文件执行
    with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False, encoding='utf-8') as f:
        f.write(sandbox_code)
        temp_path = f.name

    try:
        result = subprocess.run(
            [sys.executable, temp_path],
            capture_output=True,
            text=True,
            timeout=timeout,
            cwd=tempfile.gettempdir()
        )
        
        # 解析输出
        output_lines = result.stdout.strip()
        if output_lines:
            try:
                # 取最后一行JSON
                last_line = output_lines.split('\n')[-1]
                parsed = json.loads(last_line)
                return {
                    "success": parsed.get("error") is None,
                    "stdout": parsed.get("stdout", ""),
                    "stderr": parsed.get("stderr", ""),
                    "error": parsed.get("error"),
                    "timed_out": False
                }
            except json.JSONDecodeError:
                return {
                    "success": True,
                    "stdout": output_lines,
                    "stderr": result.stderr,
                    "error": result.stderr if result.stderr else None,
                    "timed_out": False
                }
        else:
            return {
                "success": False,
                "stdout": "",
                "stderr": result.stderr,
                "error": result.stderr or "无输出",
                "timed_out": False
            }

    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "stdout": "",
            "stderr": "",
            "error": f"代码执行超时（{timeout}秒）",
            "timed_out": True
        }
    except Exception as e:
        return {
            "success": False,
            "stdout": "",
            "stderr": str(e),
            "error": str(e),
            "timed_out": False
        }
    finally:
        try:
            os.unlink(temp_path)
        except:
            pass


def run_test(player_code: str, test_cases: list) -> dict:
    """
    运行玩家代码并验证测试用例。
    
    Args:
        player_code: 玩家代码
        test_cases: 测试用例列表 [{"input": "...", "expected_output": "...", "display": "..."}]
    
    Returns:
        {
            "all_passed": bool,
            "results": [{"passed": bool, "display": str, "expected": str, "actual": str}],
            "pass_count": int,
            "total_count": int
        }
    """
    results = []
    
    for tc in test_cases:
        test_input = tc.get("input", "")
        expected = tc.get("expected_output", "")
        display = tc.get("display", "测试")
        
        # 如果有输入需要模拟，在模板外层处理
        if test_input:
            full_code = (
                "import io\nimport sys\n"
                f"sys.stdin = io.StringIO({repr(test_input)})\n"
                + player_code
            )
        else:
            full_code = player_code
        
        exec_result = run_code(full_code)
        
        actual = exec_result["stdout"].strip()
        expected = str(expected).strip()
        
        passed = actual == expected
        results.append({
            "passed": passed,
            "display": display,
            "expected": expected,
            "actual": actual,
            "error": exec_result.get("error") if not passed else None
        })
    
    pass_count = sum(1 for r in results if r["passed"])
    
    return {
        "all_passed": pass_count == len(results),
        "results": results,
        "pass_count": pass_count,
        "total_count": len(results)
    }


if __name__ == "__main__":
    # 测试沙箱
    test = run_code('print("Hello, 江湖!")')
    print("沙箱测试:", json.dumps(test, ensure_ascii=False, indent=2))
