thisisneverthat Website Clone 코딩 프로젝트입니다. 💻

## **프로젝트 소개**

- 쇼핑몰인 만큼 사이트에서 상품의 이미지를 보여주는 것이 큰 부분을 차지
- 사이즈, 색상을 선택하여 장바구니에 넣는 기능이 필수적
- 남은 재고를 보여주어 소비자의 구매심리를 자극할 수 있게 구성

## **프로젝트 사이트**

- 🎈[**Codeisneverthat**](http://3.36.72.47:3000/)

### **개발 인원 및 기간**

- 개발기간 : 2022/6/20 ~ 2022/7/8
- 개발 인원 : 5명 (기능별 백 엔드, 프론트 엔드 교차 분배)
- 팀원: 김보경, 김형우, 성민규, 이주리, 최수진
- [프론트엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-5-1st-codeisneverthat-front)
- [백엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-5-1st-codeisneverthat-back)

### 팀원 역할 분담

- 김보경
    - front-end : Top20, collections
    - back-end : CART API
- 김형우
    - front-end : Main 페이지
    - back-end : Product 페이지 API, Top20 API
- 성민규
    - front-end : Product 페이지
    - back-end : 상품리스트 API
- 이주리
    - front-end : Cart 페이지
    - back-end : 로그인, 회원가입 API
- 최수진
    - front-end : 회원가입, 로그인, Nav, Footer, Search Bar
    - back-end : Cart API

### **프로젝트 선정이유**

- 웹 사이트 중 가장 대표적인 이커머스 사이트를 구현함으로써 데이터 베이스부터 프론트까지 완성도 있는 사이트를 만드는 것을 목표로 함
- 재고 관리, 색상 별 이미지 보여주기 등 핵심적인 기능을 포함하여 개발자로서 고민할 기능들이 함축되어 들어 있음

### **데모 영상(이미지 클릭)**

추후 추가기능 구현 완료후, 올릴 예정

## **적용 기술 및 구현 기능**

### **적용 기술**

> **Front-End** : Javascript, React.js, sass, slick, react-modal, create portal
> 

> **Back-End** : Node.js, express, Bcrypt, JWT, RESTful API
> 

### **구현 기능**

**Home**

**/홈**

- 브랜드 이미지 보여주기
- 레이아웃, 링크 구현
- 메인 이미지 데이터를 DB상의 이미지를 불러와 맵핑하여 구현

**/Nav바, Search바, Footer**

- hover시 shop menu 보여짐
- 서치바 프론트만 구현 (portal modal을 이용하여 구현)
- CART 수량 표시 구현
-  반응형 구현
-  햄버거 메뉴 구현

**Product**

**/상품 컬렉션 리스트**

카테고리 별 상품 사진, 상품명, 가격, 색상 보여주기
- 레이아웃, 기능 구현 완료
- 서버에서 카테고리별 상품리스트를 받아와 매핑하여 리스팅 구현
- 상품 클릭시, product details API를 받아오도록 구현
- 상품 재고 없는 경우, stockout 표시 되도록

**/상품 상세**

- top20과 collection list에서 상품 클릭시 url로 부터 location 정보를 받아와 product details 데이터를 받아오도록 fetching 함
- 레이아웃 구현
- DB데이터를 받아와, 컴포넌트의 props를 활용하여 렌더링되도록 구현
- 상품 컬러 말풍선 표시 구현 (hover)

**/TOP20**

판매량이 많은 순으로 제품 20개 보여주기
- 레이아웃, 기능 구현 완료
- 마우스 오버시 플로팅 이미지 구현
- top20 server API 연동 완료
- DB에서 판매량 순 20개의 상품을 가져오도록 구현
- top20 상품 클릭시, product details API를 받아오도록 구현
- top20 상태바 구현

**Cart**

**/장바구니**

수량 조절 및 총 가격
- 페이지에서 상품 수량 증가, 감소시 가격 변동, 합계 계산 기능 구현
- 레이아웃 구현
- 토큰으로 서버에서 user_id 식별하여 cart db정보 받아오도록 구현 
- 장바구니 API 백 프론트 연동 구현
- 장바구니 페이지 Modal로 구현

**User**

**/회원가입, 로그인**

이메일을 통한 간결한 회원가입

- 로그인시 토큰 생성 & 유지
- 로그인시 헤더에서 로그인 → 로그아웃 변경
- 로그아웃 버튼 기능 구현
- 회원가입 시 API연동 구현, 토큰 생성
- 로그인시 생성된 토큰을 로컬스토리지에 저장

## **Reference**

- 이 프로젝트는 [thisisneverthat](http://thisisneverthat.com) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진은 [unsplash](https://images.unsplash.com)에서 사용하였습니다.
