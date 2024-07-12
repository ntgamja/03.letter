btn= document.querySelector("button")
input=document.querySelector("input")
h5=document.querySelector("h5")
container=document.querySelector(".container")
img=document.querySelector("img")

console.log(container)


btn.addEventListener("click",(e)=>{
    console.log(input.value)
    inp=input.value
    if(inp=="원세은"){
        console.log("1")
        window.location.href = "./main/main.html";

    } 
    if(inp=="나현채"){
        console.log("4")
    } 

})