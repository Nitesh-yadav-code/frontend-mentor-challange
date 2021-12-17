const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-list");


hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});