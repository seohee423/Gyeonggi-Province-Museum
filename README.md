# 경기도박물관 홈페이지<br>디자인&퍼블리싱 작업 일지 (240606 - 240612)
https://seohee423.github.io/Gyeonggi-Province-Museum/

----

## 240606
#### 디자인
- 메인 페이지 레이아웃 구성

## 240607
#### 디자인
- 메인 페이지 디자인 시안 작업<br>
- 사용자가 사이트를 방문한 목적을 고려하여 '오늘의 관람 시간' 영역 추가<br>
- 박물관 관련 정보 전달을 위해 '소식·참여' 페이지를 추가함

## 240608
#### 디자인
- 디자인 시안 작업 완료
#### html
- html 마크업 작업<br>
- footer의 뉴스레터는 form으로 작성해 이메일을 입력할 수 있는 란으로 설정

## 240609
#### css
- css 스타일 작업<br>
- main 페이지는 좌측/우측, footer는 상단/하단으로 html 구조를 분리하여 css로 정렬함<br>
- 소장유물 페이지의 이미지를 여백 없이 세로로 정렬하는 데 어려움을 겪음<br>
  → html 구조 변경 후 css에서 display: grid;를 사용해 이미지를 3열로 정렬, column-gap으로 간격을 조정하여 핀터레스트 스타일 레이아웃을 만들게 됨

## 240610
#### css
- 각 페이지별 적용할 이벤트 정리<br>
- 마우스 hover 이벤트 적용<br>
(전시 페이지 이미지 확대&더보기 버튼 회전, 교육·행사 페이지 이미지 확대, footer 로고 투명도 상승, 더보기 버튼 화살표 아이콘 움직임, 더보기 버튼 색상 이벤트, footer 링크 underline 등)<br>
- header와 소장유물 페이지에서 좌-우 방향으로 밑줄이 그어지는 hover 이벤트<br>
  → ::before을 사용해 텍스트 아래에 줄을 만들고 너비는 0으로 설정, hover 시에만 너비가 100%가 되도록 적용함<br>
- 소장유물 이미지가 많아 시각적인 요소를 더하고자 함, hover 했을 때만 이미지가 컬러로 보이는 이벤트<br>
  → 먼저 filter: grayscale(100%);를 적용하고 hover했을 때 filter: none;이 되도록 설정

## 240611
#### js
- 스크롤을 내리다 전시 페이지에 도달하면 header 배경색이 흰색으로 바뀌고, 로고가 나타나는 이벤트<br>
  → 스크롤 Y값을 계산해 이벤트가 실행되도록 스크립트 작성<br>
- 오시는 길 페이지의 배경 이미지 슬라이드 쇼<br>
- 오시는 길 페이지 더보기 버튼의 텍스트가 순차적으로 나타나도록 설정<br>
- 마우스 커서를 따라다니는 원형 이미지 첨부, display 값을 none에서 block으로 바꾸어 마우스가 움질일 때에만 나타나도록 스크립트 작성<br>
- 어두운 색을 가진 더보기 버튼에서는 커서 이미지가 보이지 않는 문제<br>
  → 더보기 버튼에 hover하면 커서 이미지의 색상이 흰색으로 변경되고, 사이즈가 확대되는 이벤트 적용

## 240612
#### css
- 소식·참여 페이지 게시글에 hover했을 때 나타나는 텍스트 밑줄의 간격이 좁음<br>
  → text-underline-offset을 추가로 작성해 텍스트와 text-decoration: underline; 간의 간격을 넓힘
#### js
- main 페이지에서 스크롤을 내릴수록 비디오 사이즈가 확대되는 이벤트<br>
- 비디오 사이즈가 뷰포트를 가득 채울만큼 확대되지 않는 문제 발생<br>
  → 최대 너비값을 조정했으나 비디오가 확대된 이후에 다음 페이지로 넘어가는 스크롤 이벤트를 적용하는 데 어려움이 있었음. 한번의 스크롤로 비디오 사이즈가 확대되도록 변경하였음<br>
- 비디오 사이즈가 확대되면 main 페이지에 있는 요소들이 흰색으로 바뀌도록 수정<br>
  → css에서 .on 클래스를 설정한 뒤 if문으로 스크립트를 작성함. scrollY가 0보다 큰 값일 경우 .on이 활성화 되도록 함<br>
  → 이미지의 경우 filter를 적용하여 색상 변경<br>
- 비디오 사이즈가 확대되는 이벤트를 변경해 header 배경 색상 변경 시점이 맞지 않는 문제 발생<br>
- main 요소 색상 변경과 동일하게 css에서 .on 클래스를 설정한 뒤 if문으로 스크립트를 작성함.

