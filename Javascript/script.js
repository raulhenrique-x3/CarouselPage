let total_slides = document.querySelectorAll('.img-item').length;
let currentSlide = 0
    document.querySelector('.slider-img').style.width = 
        `calc(100vw * ${total_slides})`

document.querySelector('.buttons').style.height= 
    `${document.querySelector('.slider-img').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = total_slides - 1;
    }
    update_margin();
}

function goNext(){
    currentSlide++;
    if (currentSlide > (total_slides - 1)){
        currentSlide = 0;
    }

    update_margin();
}

function update_margin(){
    let slider_width = document.querySelector('.img-item').clientWidth;
    let new_margin = (currentSlide * slider_width);
    document.querySelector('.img-item').style.marginLeft = 
    `-${new_margin}px`;
}

function onOver(){
    let onOver = document.querySelector('.buttons').style.visibility =
        "visible";
    }

function onOut(){
    let onOut = document.querySelector('.buttons').style.visibility =
    "hidden";
}

setInterval(goNext, 5000);