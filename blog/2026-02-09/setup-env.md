---
title: 환경 설정
slug: setup-env
---

1. Visual Studio Code 설치
    1. extension 설치
        1. Python
        1. Jupyter
        1. Ruff (optional)
        1. indent-rainbow (optional)
        1. Git Graph (optional)
1. uv 설치
    1. windows
        ```
        powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
        ```
1. 파이썬 / 쥬피터 노트북 설치
1. uv 환경 설정
    1. uv 설정  
        ```
        uv init
        ```
    1. Python 버전 설정 (최신 버전 보다는 3.11 or 3.12 추천)
    1. .python-version과 pyproject.toml안의 Python 버전을 3.11 or 3.12 수정.
    1. 가상환경 생성
        ```
        uv venv
        ```
    1. 가상환경 활성화
        ```
        .venv\Scripts\activate
        ```
1. jupyter 라이브러리 추가
    ```
    uv add jupyter
    ```
    팁) jupyter를 설치하면 ipykernel이 자동 설치된다. 따로 설치할 필요 없음.

1. TroublesShooting
    1. uv kernel을 못찾는 경우.
        * 해결책1 : vscode 재시작
        * 해결책2 :  *.ipynb 파일 선택후 Select Kernel 선택후 ./venv/bin/python를 선택
        * 해결책3 : uv를 다시 설치
    1. 윈도우 보완 문제로 uv가 설치한 python을 실행 못하는 에러
        * 임시 해결책 : python이 설치되는 폴더를 보안 제외 대상으로 설정.
