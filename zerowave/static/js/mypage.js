      //이름은 나중에 받기
      let nameIdx = '조혜빈';
      $('#userName').text(nameIdx);

      const contents = {
        "0":{
          img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
          name : "알맹상점",
          desc : "채식 브런치 얼쓰 인 얼쓰",
          loc : "세종특별자치시 대평로 86 해들마을 6단지 상가동",
          call : "044 999 4219"
        },
        "1" : {
          img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
          name : "알맹상점",
          desc : "채식 브런치 얼쓰 인 얼쓰",
          loc : "세종특별자치시 대평로 86 해들마을 6단지 상가동",
          call : "044 999 4219"
        },
        "2" : {
          img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
          name : "알맹상점",
          desc : "채식 브런치 얼쓰 인 얼쓰",
          loc : "세종특별자치시 대평로 86 해들마을 6단지 상가동",
          call : "044 999 4219"
        },
        "3":{
          img: "https://cdn.imweb.me/thumbnail/20220228/d42ecc3f90d03.jpg",
          name : "알맹상점",
          desc : "채식 브런치 얼쓰 인 얼쓰",
          loc : "세종특별자치시 대평로 86 해들마을 6단지 상가동",
          call : "044 999 4219"
        }
      }

      for(let i =0; i< Object.keys(contents).length; i++){
        let content = contents[String(i)];
        let contentDiv = document.createElement('div');
        let contentDivDetail = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('h4');
        let desc = document.createElement('p');
        let loc = document.createElement('p');
        let call = document.createElement('p');

    
        img.setAttribute('src',content["img"]);
        name.innerText = content["name"];
        desc.innerText = content["desc"];
        loc.innerText = content["loc"];
        call.innerText = content["call"];
        contentDivDetail.append(name,desc,loc,call)
        contentDiv.append(img,contentDivDetail);

        contentDiv.classList.add('content');
        $('#contents').append(contentDiv);

      }

      $('#withdrawalBtn').click(function(){
        alert('정말로 탈퇴하시겠습니까?');
      })