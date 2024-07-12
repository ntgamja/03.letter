btns= document.querySelectorAll("button")
console.log(btns)


btns.forEach(function(item){
    console.log(item)
    item.addEventListener("click",(e)=>{
        console.log(item.textContent)
        b=item.textContent
        window.location.href = `./${b}.html`;
    })
});


