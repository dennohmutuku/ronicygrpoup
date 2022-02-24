const humbuger=document.guerySelector(".humburger");
const navMenu=document.guerySelector(".nav-menu");

humbuger.addEventListener("click",() =>{
humbuger.classList.toggle("active");
navMenu.classList.toggle("active");
})


document.querySelector(".nav-link").forEach(n=>n.addEventListener("click",()=>(
    humbuger.classList.remove("active");
    navMenu.classList.remove("active");

)))