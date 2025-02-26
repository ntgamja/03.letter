
divbtn=document.querySelector(".btns")




let letters = [];

// 비동기적으로 파일 목록을 가져오는 함수
fetch("./filelists.json")
  .then(response => response.json())
  .then(data => {
    console.log("파일 목록:", data.files);
    data.files.forEach((e) => {
      console.log(e);
      letters.push(e); // letters 배열에 값 추가
    });

    // fetch가 완료된 후에 버튼을 생성하고 리스트를 출력
    console.log("리스트:", letters);
    
    // 버튼을 만들어서 첫 번째 항목을 텍스트로 설정
  
    letters.forEach((e)=>{
        const btn = document.createElement("button");
        btn.textContent = e.slice(0, 8);
        divbtn.appendChild(btn); 
    })
    
    btns= document.querySelectorAll("button")

    btns.forEach(function(item){
        console.log(item)
        item.addEventListener("click",(e)=>{
            b=item.textContent
            window.location.href = `./${b}.html`;
        })
    });



  })
  .catch(error => console.error("파일 목록을 가져오는 중 오류 발생:", error));



