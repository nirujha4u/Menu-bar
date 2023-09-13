const menu=document.getElementById("menu")
const icons=document.getElementById("icons")
const open=document.getElementById("open")
const close=document.getElementById("close")

icons.addEventListener("click", function(){
    if(menu.style.display=="block"){
        menu.style.display="none";
        open.style.display="block";
        close.style.display="none";
    }
    else{
        menu.style.display="block";
        open.style.display="none";
        close.style.display="block";
    }
})


