
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

    merch()
})

function merch(){

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    const list = [ "/images/merchImages/Front.png", "/images/merchImages/Back.png" ];
    let index = 0;

    const display = document.querySelector('.img-merch');
    display.src = list[index];
    console.log(index);

    arrowLeft.addEventListener('click', () => {
        index -= 1;
        if(index >= 0){
            display.src = list[index];
            console.log(index);
        }
        else{
            index = 1;
            display.src = list[index];
            console.log(index);
        }
    })

    arrowRight.addEventListener('click', () => {
        index += 1;
        if(index < list.length){
            display.src = list[index];
            console.log(index);
        }
        else{
            index = 0;
            display.src = list[index];
            console.log(index);
        }
    })


    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');

    img1.addEventListener('click', () => {
        index = 0;
        display.src = list[index];
    })

    img2.addEventListener('click', () => {
        index = 1;
        display.src = list[index];
    })
}


function carousel(){
    const list = ["UxS4NPe0Vqw", "r9t3SBduqek", "irql8VkBeKo", "rNLEgs0khqM", "0ugtYM2v37w", "j5RGbx37EQQ", "YWnwXBcB6uE", "CdXpPlXpWOk", "UxS4NPe0Vqw", "r9t3SBduqek", "irql8VkBeKo", "rNLEgs0khqM", "0ugtYM2v37w", "j5RGbx37EQQ", "YWnwXBcB6uE", "CdXpPlXpWOk"]; 

    const container = document.querySelector('.carousel-track');
    //container.innerHTML = '';

    list.forEach(el => {
        const item = `  <div class="video-card" data-id="${el}">
                            <img src="https://img.youtube.com/vi/${el}/hqdefault.jpg" alt="Video thumbnail" loading="lazy">
                            <button class="play-btn" aria-label="Play video">▶</button>
                        </div>`
        //container.innerHTML += item;
    })
}

