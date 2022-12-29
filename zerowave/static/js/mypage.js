
// const contents = {
//   0: {
//     img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
//     name: "알맹상점",
//     desc: "채식 브런치 얼쓰 인 얼쓰",
//     loc: "세종특별자치시 대평로 86 해들마을 6단지 상가동",
//     call: "044 999 4219",
//   },
//   1: {
//     img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
//     name: "알맹상점",
//     desc: "채식 브런치 얼쓰 인 얼쓰",
//     loc: "세종특별자치시 대평로 86 해들마을 6단지 상가동",
//     call: "044 999 4219",
//   },
//   2: {
//     img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
//     name: "알맹상점",
//     desc: "채식 브런치 얼쓰 인 얼쓰",
//     loc: "세종특별자치시 대평로 86 해들마을 6단지 상가동",
//     call: "044 999 4219",
//   },
//   3: {
//     img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
//     name: "알맹상점",
//     desc: "채식 브런치 얼쓰 인 얼쓰",
//     loc: "세종특별자치시 대평로 86 해들마을 6단지 상가동",
//     call: "044 999 4219",
//   },
// };

// for (let i = 0; i < Object.keys(contents).length; i++) {
//   let content = contents[String(i)];
//   let contentDiv = document.createElement("div");
//   let contentDivDetail = document.createElement("div");
//   let img = document.createElement("img");
//   let name = document.createElement("h4");
//   let desc = document.createElement("p");
//   let loc = document.createElement("p");
//   let call = document.createElement("p");

//   img.setAttribute("src", content["img"]);
//   name.innerText = content["name"];
//   desc.innerText = content["desc"];
//   loc.innerText = content["loc"];
//   call.innerText = content["call"];
//   contentDivDetail.append(name, desc, loc, call);
//   contentDiv.append(img, contentDivDetail);

//   contentDiv.classList.add("content");
//   $("#contents").append(contentDiv);
// }

$("#withdrawalBtn").click(function () {
  const deleteAccount = confirm("정말로 탈퇴하시겠습니까?");
  console.log(deleteAccount);
  if (deleteAccount == true) {
    axios({
      method: "DELETE",
      url: "/zerowave/mypage",
    }).then((res) => {
      alert(res.data);
      location.href = "/zerowave";
    });
  }
});



//내가 추가한 maps
window.onload = myAddList();
// 실행하자마자 온클릭 디폴트

//////내가기록한map버튼함수
function myAddList() {
  axios({
    method: "POST",
    url: "/zerowave/mypage-list",
  }).then((res) => {
    const Data = res.data;
    console.log(Data);
    $('#contents').empty();
    for (i = 0; i < Data.length; i++) {
      let filterclass = "filter" + String(Data[i]["zwMap.filter"]);
      let contentSection;
      if (Data[i]["zwMap.filter"] == 0) {
        contentSection = `
        <div class="content  ${filterclass}">
          <pre>
          <p class="none">${Data[i]["id"]}</p>
          <p id="filtersort"><img src="/static/img/earth_marker.png" alt="zerowaste_marker">제로웨이스트샵</p>
          
          <h4 id="spotName">${Data[i]["zwMap.spot_name"]}</h4>

          <p id="address">${Data[i]["zwMap.address"]}</p>
  <button  id="deleteBtn" type="button" onclick="deletemyList(${Data[i]["id"]})">삭제</button>
        </pre>
        </div>`;
      } else {
        contentSection = `
        <div class="content  ${filterclass}">
          <pre>
          <p class="none">${Data[i]["id"]}</p>
          <p id="filtersort"><img src="/static/img/ygn_marker.png" alt="ygn_marker">용기내 챌린지</p>
    
          <h4 id="spotName">${Data[i]["zwMap.spot_name"]}</h4>
  
          <p id="address">${Data[i]["zwMap.address"]}</p>    
  <button  id="deleteBtn" type="button" onclick="deletemyList(${Data[i]["id"]})">삭제</button>
        </pre>
        </div>`;
      }
      $("#contents").append(contentSection);
    }
  });
}

/////즐겨찾기 불러오기함수
function myFavList() {
  axios({
    method: "POST",
    url: "/zerowave/mypage-fav",
  }).then((res) => {
    const Data = res.data;
    console.log(Data);
    $('#contents').empty();
    for (i = 0; i < Data.length; i++) {
      let filterclass = "filter" + String(Data[i]["fav.filter"]);
      let memoclass = "memo" + String(Data[i]["fav.filter"]);
      let contentSection;
      if (Data[i]["fav.filter"] == 0) {
        contentSection = `
        <div class="content  ${filterclass}">
          <pre>
          <p class="none">${Data[i]["id"]}</p>
          <p id="filtersort"><img src="/static/img/earth_marker.png" alt="zerowaste_marker">제로웨이스트샵</p>
          <h4 id="spotName">${Data[i]["fav.spot_name"]}</h4>
  
          <p id="address">${Data[i]["fav.address"]}</p>
          <p class="${memoclass}">${Data[i]["memo"]}</p>
<button id="deleteBtn" type="button" onclick="deletemyFav(${Data[i]["id"]})">삭제</button>
        </pre>
        </div>`;
      } else {
        contentSection = `
        <div class="content  ${filterclass}">
          <pre>
          <p class="none">${Data[i]["id"]}</p>
          <p id="filtersort"><img src="/static/img/ygn_marker.png" alt="ygn_marker">용기내 챌린지</p>
          <h4 id="spotName">${Data[i]["fav.spot_name"]}</h4>
  
          <p id="address">${Data[i]["fav.address"]}</p>
          <p class="${memoclass}">${Data[i]["memo"]}</p>
<button  id="deleteBtn" type="button" onclick="deletemyFav(${Data[i]["id"]})">삭제</button>
        </pre>
        </div>`;
      }
      $("#contents").append(contentSection);
    }
  });
}


function deletemyList(number) {
  const spotNumber = number;

  axios({
    method: "DELETE",
    url: "/zerowave/mypage-list",
    data: { spotNumber },
  }).then((res) => {
    if (res.data == true) {
      alert("삭제가 완료되었습니다.");
      $("#listBtn").click()
    }
  });
}


function deletemyFav(number) {
  const id = number;

  axios({ 
    method: "delete", 
    url: "/zerowave/favlist",
   data: { id }
}).then((res) => {
    if (res.data == true) {
      alert("삭제가 완료되었습니다.");
      $("#favBtn").click()
    }
  });
}