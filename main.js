btn= document.querySelector("button")

btn.addEventListener("click",(e)=>{
    console.log(btn.textContent)
    b=btn.textContent
    window.location.href = `./${b}.html`;
})

