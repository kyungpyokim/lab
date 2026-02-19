---
title: Numpy
slug: numpy
---

## 1. import
```
import numpy as np // numpy를 import하고 별칭을 np로 바꾼다.
```

## 2. 배열 생성
```
arr = np.array([0, 1, 2, 3])
print(arr, type(arr))
```

## 3. 차원별 배열 생성
```
# 1차원 배열 
arr1 = np.array([1, 2, 3, 4, 5])
print(arr1)

# 2차원 배열
arr2 = np.array([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 5, 2],
    [1, 5, 2, 3, 5]
])
print(arr2)

# 3차원 배열
arr3 = np.array([
    [
        [0, 255, 255], 
        [255, 255, 0] 
    ], 
    [
        [255, 0, 0], 
        [0, 0, 255]
    ]
])
print(arr3)
```

## 4. 패턴이 있는 배열 생성
```
import numpy as np 

# 모든 값이 0인 배열을 생성(np.zeros(shape))
data1 = np.zeros((2, 3))
print(data1)

# 모든 값이 1인 배열을 생성(np.ones(shape))
data2 = np.ones((2, 2, 2))
print(data2)

# 모든 값이 내가 원하는 값인 배열을 생성(np.full(shape, 내가 원하는 값))
data3 = np.full((4, 2), 9)
print(data3)

# 연속된 정수 배열 생성 np.arange(start, end, step)
# start 부터 end 앞까지 step 간격으로 배열 생성
data4 = np.arange(0, 10, 2)
print(data4)

# 정해진 범위 동일한 간격 배열 생성 np.linspace(start, end, n)
# start부터 end까지 동일한 간격의 n개의 데이터 배열을 생성
data5 = np.linspace(0, 1, 5)
print(data5)
```
## 5. 난수 생성 배열
```
import numpy as np 

np.random.seed(123)

# 0과 1사이의 실수 랜덤 배열 생성 np.random.rand(axis0, axis1, axis2)
random_arr1 = np.random.rand(2, 3)
print(random_arr1)

# 정규분포 (평균 0, 표준편차 1) np.random.randn(axis0, axis1, axis2)
# 평균이 0이고 표준편차가 1인 랜덤 배열 생성
random_arr2 = np.random.randn(2, 3)
print(random_arr2)

# 특정 범위 내 정수 랜덤 배열 생성 np.random.randint(start, end, shape)
random_arr3 = np.random.randint(0, 10, (2, 3))
print(random_arr3) 
```

## 6. 배열 속성
```
import numpy as np

# 1차원 데이터
data_1d = np.array([10, 20, 30, 40])

# 2차원 데이터
data_2d = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

# 3차원 데이터
data_3d = np.array([
    [
        [255, 0, 0],
        [0, 255, 0]
    ],
    [
        [0, 0, 255],
        [255, 255, 0]
    ]
])

# 속성: 변수의 정보 (표현: 변수.속성이름)
shape # 차원 형태 -> (2, 2, 3) 
ndim  # 차원 수 -> 3
size  # 모든 요소 개수 -> 12
dtype # 데이터 요소들의 타입 -> int64

# 데이터 타입을 바꾸고 싶을 때 (정수 -> 실수)
data_3d.astype('float')
```

## 7. 배열 변환
```
data = np.arange(0, 15) 
[ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14]

# shape를 변환 (3, 5) -> 배열.reshape()
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]

# 전치행렬 (행/열 전환) -> 배열.transpose()
[[ 0  5 10]
 [ 1  6 11]
 [ 2  7 12]
 [ 3  8 13]
 [ 4  9 14]]

data_reshape.transpose()
[[ 0  5 10]
 [ 1  6 11]
 [ 2  7 12]
 [ 3  8 13]
 [ 4  9 14]]

data_reshape.T 
[[ 0  5 10]
 [ 1  6 11]
 [ 2  7 12]
 [ 3  8 13]
 [ 4  9 14]]

# n차원 배열을 1차원으로 변환 배열.flatten()
[ 0  5 10  1  6 11  2  7 12  3  8 13  4  9 14]
```

## 8. 배열 연산
```
# 연산: 같은 위치에 있는 요소끼리
# 연산할 때에는 shape가 같아야 한다.
data1 = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
data2 = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

배열의 덧셈
data1 + data2
[[11 22 33]
 [44 55 66]]

배열의 뺄셈
data1 - data2
[[ -9 -18 -27]
 [-36 -45 -54]]

배열의 곱셈
data1 * data2
[[ 10  40  90]
 [160 250 360]]

배열의 나눗셈
data1 / data2
[[0.1 0.1 0.1]
 [0.1 0.1 0.1]]

배열의 거듭제곱
data2 ** data1
[[         10         400       27000]
 [    2560000   312500000 46656000000]]
```

### data1 배열에 모든 요소에 10을 곱하고 싶다. 
a = [[1 2 3]
 [4 5 6]]
b = [[10 10 10]
 [10 10 10]]
np.full((2, 3), 10)

a * b
[[10 20 30]
 [40 50 60]]

a * 10
[[10 20 30]
 [40 50 60]]

### 통계
| 함수 (Function) | 설명 (Description) | 특징 |
| :--- | :--- | :--- |
| **`np.sum()`** | 배열 전체 요소의 **합계** | 데이터의 총합 계산 |
| **`np.mean()`** | 배열 전체 요소의 **산술 평균** | 데이터의 중심 경향성 파악 |
| **`np.max()`** | 배열 내 **최댓값** 찾기 | 가장 큰 수치 반환 |
| **`np.min()`** | 배열 내 **최솟값** 찾기 | 가장 작은 수치 반환 |
| **`np.var()`** | 배열 데이터의 **분산** | 데이터가 평균에서 떨어진 정도 |
| **`np.std()`** | 배열 데이터의 **표준편차** | 분산의 제곱근 ($\sigma$) |

| 연산축 | 계산 방향| 결과의 의미 | 결과 Shape |
| --- | --- | --- | --- |
| **axis=0** | 면과 면을 관통 | 여러 장의 종이를 겹쳐서 하나로 만듦 | (2, 3) |
| **axis=1** | 각 면의 세로 방향 | 각 페이지의 바닥에 합계가 남음 | (2, 3) |
| **axis=2** | 각 면의 가로 방향 | 각 페이지의 오른쪽에 합계가 남음 | (2, 2) |

```
a = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

np.sum(a, axis=0)
[50 70 90]

np.sum(a, axis=1)
[ 60 150]

a = np.array([
    [[255, 0, 0], 
    [0, 255, 0]], 

    [[0, 0, 255], 
    [255, 255, 0]]
    ])

axis=0
[[255+0, 0+0, 0+255]
 [0+255, 255+255, 0+0]]

-> [[255   0 255]
   [255 510   0]]
 
axis=1

   [[255+0, 0+0, 0+255]
   [0+255, 255+255, 0+0]]

-> [[255 255   0]
   [255 255 255]]

axis=2
[[255+0+0, 0+255+0]
[0+0+255, 255+255+0]]

-> [[255 255]
   [255 510]]
```   

## 9. 이미지 데이터
```
# 이미지 불러오기 (uv add pillow)
from PIL import Image 
from IPython.display import display 

image = Image.open("./images/dog.jpg")
display(image)
```
```
import numpy as np 
image_arr = np.array(image)
print(image_arr.ndim)  # 차원 수
print(image_arr.shape) # 배열의 형태
print(image_arr)
```
```
image_arr2 = 255 - image_arr
image2 = Image.fromarray(image_arr2)
display(image2)
```