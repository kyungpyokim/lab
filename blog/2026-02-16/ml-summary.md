---
title: 머신러닝 3대 기법 핵심 요약 및 실습 코드
date: 2026-02-16
tags: [Machine Learning, Python, Scikit-learn]
---

# 🤖 머신러닝 핵심 3대 기법 총정리

머신러닝의 주요 작업은 데이터의 성격과 목표에 따라 **분류, 회귀, 군집화**로 나뉩니다. 각 기법의 개념과 예시 코드를 정리합니다.

---

## 1. 핵심 기법 비교 한눈에 보기

| 구분 | 분류 (Classification) | 회귀 (Regression) | 군집화 (Clustering) |
| :--- | :--- | :--- | :--- |
| **학습 방식** | 지도 학습 (Supervised) | 지도 학습 (Supervised) | 비지도 학습 (Unsupervised) |
| **목표** | 그룹/범주 예측 (A or B) | 연속적인 숫자 예측 (Price) | 유사 데이터끼리 그룹핑 |
| **정답 유무** | 있음 (Label) | 있음 (Label) | **없음** |
| **평가지표** | Accuracy, F1-score, AUC | MAE, MSE, $R^2$ | Silhouette Score |


---

## 2. 주요 기법별 실습 코드

### 🟢 분류 (Classification): 고객 이탈 예측
데이터가 특정 범주(예: 이탈 여부 0 또는 1)에 속할 확률을 계산합니다.

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# 1. 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. 모델 생성 및 학습
clf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
clf.fit(X_train, y_train)

# 3. 예측 및 평가
y_pred = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred))
```

### 🔵 회귀 (Regression): 주택 가격 예측
데이터들 사이의 상관관계를 분석하여 연속적인 수치를 도출합니다.

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score

# 1. 모델 생성 및 학습
reg = LinearRegression()
reg.fit(X_train, y_train)

# 2. 예측 및 평가
y_pred = reg.predict(X_test)
print(f"MAE (평균 절대 오차): {mean_absolute_error(y_test, y_pred):.2f}")
print(f"R2 Score (결정계수): {r2_score(y_test, y_pred):.4f}")
```

### 🟡 군집화 (Clustering): 고객 세그먼테이션
정답 레이블 없이 데이터의 유사성만을 이용해 그룹을 형성합니다.

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 데이터 스케일링 (군집화 전 필수)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 2. K-Means 모델 생성 및 군집 할당
kmeans = KMeans(n_clusters=3, init='k-means++', random_state=42)
clusters = kmeans.fit_predict(X_scaled)

# 3. 결과 확인
X['Cluster'] = clusters
print(X.groupby('Cluster').mean())
```

## 3. 왜 기법을 구분해야 할까?
* **지도 vs 비지도:** 정답(Label)이 있으면 분류/회귀, 없으면 군집화를 사용합니다.
* **범주 vs 수치:** 예측값이 "A냐 B냐"라면 분류, "얼마나(수치)"라면 회귀를 선택합니다.
* **학습 전략:** 각 기법에 따라 평가 지표와 전처리 방식이 다르므로 데이터의 목적에 맞는 알고리즘 선택이 중요합니다.