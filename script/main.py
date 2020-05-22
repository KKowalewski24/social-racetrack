import os
import pathlib
import shutil
import subprocess
import sys
from typing import List

"""
"""


# VAR ------------------------------------------------------------------------ #

# DEF ------------------------------------------------------------------------ #
# def deploy_project() -> None:
#     go_to_parent_directory(get_current_directory())
#     run_command(["git", "checkout", "master"])
#     run_command(["git", "pull"])
#     run_command(["yarn", "build"])
#     run_command(["firebase", "deploy"])


def clean_project() -> None:
    go_to_parent_directory(get_current_directory())
    try:
        remove_directories(["build", ".firebase"])
    except FileNotFoundError:
        print("Some files may not be found!")


# MAIN ----------------------------------------------------------------------- #
def main() -> None:
    if len(sys.argv) == 2:
        if sys.argv[1] == "deploy" or sys.argv[1] == "-d":
            deploy_project()
        elif sys.argv[1] == "clean" or sys.argv[1] == "-c":
            clean_project()

    display_finish()


# UTIL ----------------------------------------------------------------------- #
def run_command(sub_commands: List) -> None:
    result_command = []
    for it in sub_commands:
        result_command.append(it)

    subprocess.call(result_command, shell=True)


def get_current_directory():
    return pathlib.Path(os.getcwd())


def go_to_parent_directory(directory) -> None:
    os.chdir(directory.parent)


def go_to_child_directory(directory: str) -> None:
    os.chdir(directory)


def remove_directories(directory_names: List) -> None:
    for it in directory_names:
        shutil.rmtree(it)


def remove_files(filenames: List) -> None:
    for it in filenames:
        os.remove(it)


def check_types_check_style() -> None:
    subprocess.call(["mypy", "main.py"])
    subprocess.call(["flake8", "main.py"])


def display_finish() -> None:
    print("------------------------------------------------------------------------")
    print("FINISHED")
    print("------------------------------------------------------------------------")


if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] == "-bp":
        check_types_check_style()
    else:
        check_types_check_style()
        main()
