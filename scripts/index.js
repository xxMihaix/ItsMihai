
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
    carousel()
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
    const list = [
        { url: 'UxS4NPe0Vqw', image: '1'},
        { url: 'r9t3SBduqek', image: '2'},
        { url: 'irql8VkBeKo', image: '3'},
        { url: 'rNLEgs0khqM', image: '4'},
        { url: '0ugtYM2v37w', image: '5'},
        { url: 'j5RGbx37EQQ', image: '6'},
        { url: 'YWnwXBcB6uE', image: '7'},
        { url: 'CdXpPlXpWOk', image: '8'},
        { url: 'UxS4NPe0Vqw', image: '1'},
        { url: 'r9t3SBduqek', image: '2'},
        { url: 'irql8VkBeKo', image: '3'},
        { url: 'rNLEgs0khqM', image: '4'},
        { url: '0ugtYM2v37w', image: '5'},
        { url: 'j5RGbx37EQQ', image: '6'},
        { url: 'YWnwXBcB6uE', image: '7'},
        { url: 'CdXpPlXpWOk', image: '8'},     
    ]; 

    const container = document.querySelector('.carousel-track');
    container.innerHTML = '';

    list.forEach((el, index) => {
        const item = `
                    <a href="https://www.youtube.com/shorts/${el.url}" target="_blank" class="video-card">
                        <img src="/images/Thumbnails/${el.image}.png">
                        <div class="yt-shorts">
                            <img src="/images/socialLogo/YoutubeShorts.webp">
                        </div>
                    </a>`
        container.innerHTML += item;
    })

    container.style.animation = 'scroll-videos 19s linear infinite';
}

