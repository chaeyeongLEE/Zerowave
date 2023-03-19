<img width="1411" alt="zerowave1" src="https://user-images.githubusercontent.com/116782324/226173433-35e251fc-8730-4ca1-88fa-b926046b994f.png"><img width="1425" alt="zerowave2" src="https://user-images.githubusercontent.com/116782324/226173390-b4533e67-59bc-41a1-a436-d2d92810a4c3.png">

<h1> Zerowave </h1>
🗓️ 진행 기간 : 2022.12.10 ~ 2022.12.29 <br />
🙌 진행 인원 : 5명 (프론트엔드: 3명, 백엔드: 2명)
<br />
<h2> 프로젝트 소개 </h2>
<h3> 1. 기획 의도 </h3>
ZEROWAVE는 우리의 지구를 건강하게 지켜나가기위해, 언제 어디서든 제로웨이스트를 실천할수있도록 돕는 사이트입니다.<br />
지도를 기반으로 제로웨이스트샵과 다회용기 사용이 가능한 장소 정보를 제공합니다.<br />
사용자는 자신이 알고 있는 장소를 서비스의 지도에 추가할 수 있으며, 지도의 장소를 즐겨찾기 목록에 저장할 수 있습니다.<br />
<h3> 2. 기능 정의 </h3>

|기능| 설명|
|:---|:---|
|메인 및 지도 페이지|1. Session 을 통해 로그인 여부에 따른 상이한 페이지 구현 <br>2. KakaoMap API를 이용한 지도 관련 컴포넌트 구현 <br /> 3. mySQL을 이용하여 서버의 DB를 가져와 지도에 구현|
|회원가입/로그인 페이지|1. Sessio을 이용하여 회원정보 수정 시 사용자의 세션과 입력값을 서버로 전달해 사용자를 찾고 새로운 값으로 변경할 시 UserDB에 업데이트. <br>2. bcryptjs : 암호화 모듈을 통해 가입 시 서버에 실제 입력값이 아닌 암호화 된 비밀번호를 전달 <br /> 3. Axios & Sequelize : 사용자의 입력값을 서버로 전달하여 해당 사용자의 유무를 DB에서 조회한 후 결과값에 따라 UserDB에 새로운 값을 생성<br /> 
|API| KakaoMap API <br />|

<h3> 🤍 배포 사이트 🤍 </h3>
<a href="http://13.125.15.23:8000/zerowave"> zerowave </a>

<h1> ✍️ Stack </h1>
<h4> 🌊 Front-end 🌊 </h4>
<div>
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
</div>
<h4> 🌊 Back-end 🌊 </h4>
<div>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=TypeScript&logoColor=white"/>
</div>
<h4> 🌊 Collaboration 🌊 </h4>
<div>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
 
</div>
<h4> 🌊 API 🌊  </h4>
<div>
 <a href="https://apis.map.kakao.com/"><img src="https://img.shields.io/badge/KakaoMap-FFCD00?style=flat&logo=Kakao&logoColor=white"/>

</div>
