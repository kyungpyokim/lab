---
title: 판다스(Pandas)
slug: pandas
---

## 1. 시리즈(Series)
```python
import pandas as pd
# pandas.함수()

# 하루 방문자 수 데이터
visitors = pd.Series(
    data=[120, 150, 130, 170, 160],
    name="방문자 수",  # 옵션
)

print(visitors)
```
```python
# 속성
print(visitors.index)  # 인덱스 추출
print(visitors.values)  # 값 추출
print(visitors.dtype)  # 데이터 타입
print(visitors.name)  # 시리즈 이름
print(visitors.size)  # 데이터 개수
```

### 1) 생성 및 조회
#### (1) 데이터만 생성
```python
# 이름 열을 시리즈로 만들기
name_data = pd.Series(data=["김영철", "송윤지", "임수현"], name="이름")

print(name_data)

# 나이 열을 시리즈로 만들기
age_data = pd.Series(data=[24, 31, 26], name="나이")

print(age_data)
```

#### (2) 인덱스와 함께 생성
```python
age_data.index = ["김영철", "송윤지", "임수현"]
print(age_data)

age_data2 = pd.Series(
    data=[24, 31, 26], name="나이", index=["김영철", "송윤지", "임수현"]
)
print(age_data2)

age_data3 = pd.Series(data={"김영철": 24, "송윤지": 31, "임수현": 26}, name="나이")
print(age_data3)
```

### 2) 연산
```python
# 데이터가 1, 2, 3인 시리즈 생성
data1 = pd.Series([1, 2, 3])
print(data1)

# 데이터가 10, 20, 30인 시리즈 생성
data2 = pd.Series([10, 20, 30])
print(data2)

# 데이터가 10, 20, 30인 시리즈 생성
data3 = pd.Series([10, 20, 30], index=[2, 1, 0])
print(data3)

# 시리즈는 같은 인덱스끼리 연산된다.
print(data1 + data2)
print("=" * 30)
print(data1 + data3)

# 데이터가 서울, 부산, 대구인 시리즈 생성
data4 = pd.Series(["서울", "부산", "대구"])

# 데이터가 관악구, 수영구, 달서구인 시리즈 생성
data5 = pd.Series(["관악구", "수영구", "달서구"])

print(data4 + data5)

# int 시리즈, str 시리즈
# 서울1, 부산2, 대구3 이렇게 할 수 있을까?
data4 = pd.Series(["서울", "부산", "대구"])
data1 = pd.Series([1, 2, 3])
print(data4.dtype)
print(data1.dtype)
print(data4 + data1)

# data4.dtype - object, data1.dtype - str
data1_obj = data1.astype("str")
data1_obj = data1.astype(str)
print(data1_obj)

print(data4 + data1_obj)
```

### 3) 결측치
#### (1) 결측치 발생
```python
import numpy as np
import pandas as pd

data = pd.Series([1, 2, np.nan, 4])
print(data)
```

예제
* 데이터가 10, 20, 30인 시리즈 생성, 인덱스는 부산, 울산, 대구으로 설정
* 데이터가 1, 2, 3, 4인 시리즈 생성, 인덱스는 광주, 부산, 울산, 대구으로 설정
* 데이터의 덧셈

```python
data1 = pd.Series(data=[10, 20, 30], index=["부산", "울산", "대구"])
print(data1)

data2 = pd.Series(data=[1, 2, 3, 4], index=["광주", "부산", "울산", "대구"])
print(data2)

# 매칭이 되지 않는 인덱스 데이터는 결측값이 된다.
print(data1 + data2)
```

#### (2) 결측치 파악
``` python
total = data1 + data2
print(total)

# 데이터 정보 확인하기
total.info()

# 각 셀마다 결측치인지 아닌지 판단하기
total.isna()

# 결측치가 몇 개인가요?(bool - True(1), False(0))
print(total.isna().sum())
```

#### (3) 결측치 채우기
```phthon
# 결측치를 0으로 채워주세요.
print(total.fillna(0))  # total 덮어씌워지지 않는다.
```

#### (4) 결측치 삭제
```python
# 결측치를 제거해주세요.
print(total.dropna())  # total 덮어씌워지지 않는다.
```

### 4) 통계
```python
data = pd.Series(data=[17, 25, 33], index=["부산", "울산", "대구"])
print(data)

print(data.sum())  # 열의 합
print(data.mean())  # 열 평균
print(data.min())  # 최솟값
print(data.max())  # 최댓값
print(data.std())  # 표준편차
print(data.var())  # 분산

print(data.describe())
```

예제. 문자 데이터

```py
['HR', 'Engineering', 'HR', 'Engineering', 'HR', 'Marketing', 'Engineering', 'Marketing', 'HR']
```

```py
import pandas as pd

data_list = [
    "HR",
    "Engineering",
    "HR",
    "Engineering",
    "HR",
    "Marketing",
    "Engineering",
    "Marketing",
    "HR",
]

data = pd.Series(data=data_list)
print(data)
print(data.describe())
```

## 2. 데이터 프레임(DataFrame)
### 1) 생성
```py
# 데이터를 리스트로 표현
data_list = [
    ["김영철", "M", 24, 179.4],
    ["송윤지", "F", 31, 161.0],
    ["임수현", "F", 26, 179],
]
```
```py
import pandas as pd

df = pd.DataFrame(data=data_list, columns=["이름", "성별", "나이", "키"])
df

df = pd.DataFrame(data=data_list)
df.columns = ["이름", "성별", "나이", "키"]
df
```
```python
# 데이터의 열을 딕셔너리로 표현
data_col_dict = {
    "이름": ["김영철", "송윤지", "임수현"],
    "성별": ["M", "F", "F"],
    "나이": [24, 31, 26],
    "키": [179.4, 161.0, 174],
}

df = pd.DataFrame(data=data_col_dict)
df

# 데이터의 행을 딕셔너리/리스트로 표현 (JSON) ⭐ 표현 기억해두기
data_row_list = [
    {"이름": "김영철", "성별": "M", "나이": 24, "키": 179.4},
    {"이름": "송윤지", "성별": "F", "나이": 31, "키": 161.0},
    {"이름": "임수현", "성별": "F", "나이": 26, "키": 174},
]

df = pd.DataFrame(data=data_row_list)
df

# 이름을 인덱스로 하고 싶어요.
df_name_idx = df.set_index("이름")  # df에 덮어씌워지지 않는다.
df_name_idx

# 인덱스를 없애고 싶어요.
df_name_idx.reset_index()  # df_name_idx에 덮어씌워지지 않는다.
```
### 2) 조회
#### (1) 이름으로 조회

**열 조회(`df[열이름], df.loc[:,열이름]`)**

```python
# df에서 "나이"열만 가져오고 싶어요
df["나이"]

# 콜론(:)이 의미하는 것은 전체를 다 가져와라
# df에서 "나이"열만 가져오고 싶어요
df.loc[:, "나이"]  # 시리즈

# 콜론(:)이 의미하는 것은 전체를 다 가져와라
# df에서 "나이"열만 가져오고 싶어요
df.loc[:, ["나이"]]  # 데이터프레임

# df에서 이름, 키 열만 가져오고 싶어요.
df[["이름", "키"]]

# df에서 이름, 키 열만 가져오고 싶어요.
df.loc[:, ["이름", "키"]]
```

**행 조회(`df.loc[인덱스이름]`)**

```py
# df에서 송윤지 데이터를 가지고 오고 싶어요.
df.loc[1, :]  # 시리즈

# df에서 송윤지 데이터를 가지고 오고 싶어요.
df.loc[[1], :]  # 데이터프레임

# df_name_idx에서 송윤지 데이터를 가지고 오고 싶어요.
df_name_idx.loc["송윤지", :]  # 시리즈

# df_name_idx에서 송윤지 데이터를 가지고 오고 싶어요.
df_name_idx.loc[["송윤지"], :]  # 데이터프레임

# df에서 김영철, 임수현의 데이터를 가지고 오고 싶어요.
df.loc[[0, 2], :]

# df_name_idx에서 김영철, 임수현의 데이터를 가지고 오고 싶어요.
df_name_idx.loc[["김영철", "임수현"], :]
```

**셀 조회(`df.loc[인덱스이름,열이름]`)**
```py
# df에서 김영철 학생의 키를 출력하고 싶어요.
df.loc[0, "키"]

# df에서 송윤지, 임수현의 성별을 출력하고 싶어요.
df.loc[[1, 2], "성별"]

# df_name_idx에서 임수현 학생의 나이를 출력하고 싶어요.
df_name_idx.loc["임수현", "나이"]

# df_name_idx에서 송윤지의 성별, 키를 출력하고 싶어요.
df_name_idx.loc["송윤지", ["성별", "키"]]

# df에서 김영철, 송윤지의 이름, 나이를 출력하고 싶어요.
df.loc[[0, 1], ["이름", "나이"]]
```

#### (2) 인덱스로 조회

```py
df.index = [2, 1, 0]

# df에서 나이열을 출력하고 싶어요.
# [이름, 성별, 나이, 키]
# 나이 : 2번째 요소
df.iloc[:, 2]  # 시리즈
df.iloc[:, [2]]  # 데이터프레임

# df에서 키 열을 출력하고 싶어요.
# [이름, 성별, 나이, 키]
# 나이 : 3번째 요소, -1번째 요소
df.iloc[:, -1]

# df에서 이름, 성별, 나이 열을 출력하고 싶어요.
# [이름, 성별, 나이, 키]
# [이름, 성별, 나이] -> 0:3 (0번째부터 3번째 앞까지)
df.iloc[:, 0:3]
```

**행 조회(`df.iloc[인덱스위치,:]`)**

```py
# df에서 임수현의 데이터를 출력하고 싶어요.
# [2, 1, 0]
# 임수현은 2번째 요소에 있다.
df.iloc[2, :]

# df에서 김영철, 송윤지의 데이터를 출력하고 싶어요.
# [2, 1, 0]
# [김영철, 송윤지] -> 0번째에서 2번째 앞까지
df.iloc[:2, :]
```
**셀 조회(`df.iloc[인덱스위치, 열위치]`)**

```py
# df에서 임수현의 나이를 출력하고 싶어요.
# 인덱스 위치: 2번째
# 열 위치: 2번째
df.iloc[2, 2]

# df에서 송윤지의 이름, 성별을 출력하고 싶어요.
# 인덱스 위치: 1번째
# 열 위치: 0번째부터 2번째 앞까지
df.iloc[1, 0:2]

# df에서 김영철, 송윤지의 성별, 나이를 출력하고 싶어요.
# 인덱스 위치: 0번째부터 2번째 앞까지
# 열 위치: 1번째부터 3번째 앞까지
df.iloc[0:2, 1:3]
```

#### (3) 조건부 조회
```py
# df.loc[ 인덱스 이름 , 열 이름 ]
# df.iloc[ 인덱스 위치 , 열 위치 ]
# 데이터 하나는 행 하나를 의미하기 때문에 조건은 인덱스 자리에 작성한다.

# 성별이 M인 데이터 조회
# 성별 추출 : df["성별"]
df.loc[df["성별"] == "M", :]

# 키가 170이 넘는 사람 조회
# 키 추출: df["키"]
# 조건: df["키"] > 170
df.loc[df["키"] > 170, :]

## startswith() / endswith()
text = "송윤지"
# 조건: 맨 앞에 "송"이 있는가?
print(text.startswith("송"))
# 조겅: 맨 뒤에 "송"이 있는가?
print(text.endswith("송"))

# 이름이 "송"씨인 사람 조회
# 이름 추출: df["이름"],
# 조건: df["이름"].str.startswith("송")
# (Hint: startswith())
df.loc[df["이름"].str.startswith("송"), :]

# 이름에 "수"가 있는 사람만 조회
# 이름 추출: df["이름"],
# 조건: df["이름"].str.contains("송")
# (Hint: startswith())
df.loc[df["이름"].str.contains("수"), :]

# 20대인 사람만 조회
# 나이 추출: df["나이"]
# 조건: df["나이"] >= 20, df["나이"] <30
# 조건 결합: AND(&)
df.loc[(df["나이"] >= 20) & (df["나이"] < 30), :]

# 여자이거나 키가 170cm 이상인 사람만 조회
# 성별 추출, 키 추출 : df["성별"], df["키"]
# 조건: df["성별"] == "F", df["키"] >= 170
# 조건 결합: OR(|)
df.loc[(df["성별"] == "F") | (df["키"] >= 170), :]
```

### 3) 편집
#### (1) 인덱스 제거
```py
# 인덱스를 현재 데이터프레임에 맞춰서 위치로 이름짓고 싶다.
df.reset_index(drop=True)
```

#### (2) 데이터 병합
```py
data1 = pd.DataFrame(
    data=[["강남", 1, 2], ["서초", 4, 5], ["노원", 5, 6]],
    columns=["지역명", "지점수", "매출"],
)

data2 = pd.DataFrame(
    data=[["강남", 10, 20], ["도봉", 40, 50], ["노원", 50, 60]],
    columns=["지역명", "지점수", "매출"],
)

data3 = pd.DataFrame(
    data=[["강남", 10, 20], ["도봉", 40, 50], ["노원", 50, 60]],
    columns=["지역명", "방문자수", "직원 수"],
)

# data1 + data2
# 이 결과가 우리가 원하는 것일까?
data1 + data2

# 문제: 똑같은 테이블이 2개가 작성되어 있다.
# 의도: 지역별로 겹치는 것만 지점수, 매출을 합산하고 싶다.
# 인덱스를 지역명으로 바꿔야 합니다.
data1_loc_idx = data1.set_index("지역명")
data2_loc_idx = data2.set_index("지역명")

data1_loc_idx + data2_loc_idx

# 문제: 지역별로 새로운 열이 추가되었다.
# 의도: 지역별로 지점수, 매출, 방문자수, 직원수를 합치고 싶다.

# pd.merge()
total_data = pd.merge(
    left=data1,
    right=data3,
    how="outer",  # left, right, inner, outer
    on="지역명",  # 누구를 기준으로
)

# how: 가져올 on(=지역명)
## left: data1의 지역명에 맞춰서
## right: data3의 지역명에 맞춰서
## inner: data1, data3에 모두 있는 지역명에 맞춰서
## outer: data1, data3에 있는 모든 지역명에 맞춰서
```

#### (3) 결측치 처리
```py
# 결측치 정보를 확인
total_data.info()

# 결측치 개수 구하기
## 결측치인지 판단하기
total_data.isna()  # 각 셀마다 결측인지 아닌지를 True/False 판단

total_data.isna().sum(axis=0)
total_data.isna().sum(axis=1)

## 결측치 채우기
total_data.fillna(999)

## 결측치 제거
total_data.dropna()
```

#### (4) 통계
```py
total_data.describe()
```

## 3. 실습
```py
# cdata.csv
# cdata_nohead.csv
# mpg.csv
# kr3_raw.tsv
# 국민건강보험공단.......xlsx
```

**예제 1. cdata.csv 불러오기**
```py
# cdata.csv
df = pd.read_csv(
    "./data/cdata.csv",
    encoding="CP949",  # 한글 경우에는 utf-8, CP949
    index_col=0,  # 인덱스로 지정할 열
)
```

**예제 2. cdata_nohead.csv 불러오기**
```py
# cdata_nohead.csv
df = pd.read_csv(
    "./data/cdata_nohead.csv",
    header=None,
    names=["index", "no", "이름", "나이", "지역"],
    index_col="index",
)
```

**예제 3. kr3_raw.tsv 불러오기**
```py
df = pd.read_csv(
    "./data/kr3_raw.tsv",  # 탭으로 구분
    sep="\t",
)

df.head()  # 뷰어: 위에서 5개만
df.head(3)
df.tail()  # 뷰어: 뒤에서 5개만
```

**예제 3. 자동차 회사의연비 데이터**

* manufacturer : 회사명
* cty : 도심연비
* hwy : 고속도로 연비

```py
# 범주형
# - 카테고리 종류 / 개수
# df[범주형변수].unique() - 어떤 종류가 있나요?
# df[범주형변수].nunique() - 몇 종류인가요?
# - 범주형 별로 데이터 개수 세기
# df[범주형변수].value_counts()
# df.value_counts(subset=[범주형변수])
```
* 데이터 불러오기
```py
# mpg.csv
df = pd.read_csv("./data/mpg.csv")
df.head()
```

* 데이터 파악하기
```py
# 데이터 정보 확인하기
df.info()

# 결측치가 있는지 확인
df.isnull().sum()

# 데이터의 통계 정보
df.describe()
```