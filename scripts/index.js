
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
})