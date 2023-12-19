const hamburger= document.getElementById('hamburger');
const navmenu = document.getElementById('nav-menu');
const closeicon=document.getElementById('nav-close');
const navlink= document.querySelectorAll(".nav_link");

navlink.forEach(link =>{
    link.addEventListener("click",()=>{
        navmenu.classList.add('hidden');
    })
})

hamburger.addEventListener("click",() =>{
    navmenu.classList.remove('hidden');
})
closeicon.addEventListener("click",()=>{
    navmenu.classList.add('hidden');
})

