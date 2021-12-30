let scrollbutton1=document.querySelector("button.scroll");
let scrollbutton2=document.querySelector("button.scroll2");
window.addEventListener("scroll",e=>{
    if(window.scrollY > 300){
        scrollbutton1.classList.add("show");
    }else{
        scrollbutton1.classList.remove("show");
    }
})

scrollbutton1.addEventListener("click",e=>{
    if(scrollbutton1.classList.contains("show")){
        window.scrollTo({top:0,behavior:"smooth"})
    }
})
window.addEventListener("scroll",e=>{
    if(window.scrollY > 1500){
        scrollbutton2.classList.add("show");
        scrollbutton1.classList.remove("show");
    }else{
        scrollbutton2.classList.remove("show");
    }
})

scrollbutton2.addEventListener("click",e=>{
    if(scrollbutton2.classList.contains("show")){
        document.querySelector("#article").scrollIntoView({top:0,behavior:"smooth"})
    }
})
