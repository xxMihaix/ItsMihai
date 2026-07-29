
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuCont = document.querySelector('.menu-container');

    menuBtn.addEventListener('click', () => {
        menuCont.classList.toggle('active');
    })

    document.addEventListener('click', (e) => {
        if(!e.target.closest('.menu-btn') && !e.target.closest('.menu-container')){
            menuCont.classList.remove('active');
        }
    })

    const anim = document.querySelector('.roles');

    const text = document.querySelector('.tit2');
    const width = window.innerWidth;

    if(width > 720){
        anim.classList.add('animation1')
    }
    
    if(width <= 720){
        text.textContent = 'Welcome to our';
        anim.classList.add('animation2')
    }
})