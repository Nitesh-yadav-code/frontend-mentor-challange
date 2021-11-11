const hamburger = document.getElementById('hamburger');
// const list = document.getElementById('list');
const {body} = document;

hamburger.addEventListener('click', ()=>{
   body.classList.toggle('show-nav');
    
});