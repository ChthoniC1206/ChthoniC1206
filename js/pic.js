const topIndexMapping = {
    '0' : '景觀1',
    '1' : '景觀2',
    '2' : '景觀3',
    '3' : '景觀4',
    '4' : '景觀5',
    '5' : '景觀6',
    '6' : '景觀7',
    '7' : '景觀8',
    '8' : '景觀9',
}

const topPic = document.querySelectorAll('.top-pic')
const lightBox = document.querySelector('.lightbox')
const lightBoxBgc = document.querySelector('.lightbox-bgc')
const lightBoxPic = document.querySelectorAll('.lightbox-pic')

function lockPic (){
    lightBoxPic.forEach((detail,index) => {
        detail.style.display = 'none';
    });    
}
function close(){
    lightBox.addEventListener('click', function(){
        lightBox.style.display = 'none'
    });
}
topPic.forEach(function(data, index){
    data.addEventListener('click', function(){
        if(data.dataset.intro === topIndexMapping[index]){
            lockPic();
            lightBox.style.display = 'block'
            lightBoxPic[index].style.display = 'block'
        }
    });
});
close();




var swiper1 = new Swiper("#ture", {
    speed: 10000,
    autoplay: {
        delay: 0,
    },
    loop: true,
    loopAdditionalSlides: 7,
    slidesPerView: 6,
});   
var swiper2 = new Swiper("#reverse", {
    speed: 10000,
    roundLengths: false,
    autoplay: {
        delay: 0,
        reverseDirection: true,
    },
    loop: true,
    loopAdditionalSlides: 7,
    slidesPerView: 6,
}); 
var swiper3 = new Swiper("#ture2", {
    speed: 10000,
    autoplay: {
        delay: 0,
    },
    loop: true,
    loopAdditionalSlides: 7,
    slidesPerView: 6,
});

swiper1.el.onmouseenter = function () {
    var swiper1_translate = swiper1.getTranslate();
    swiper1.setTranslate(swiper1_translate);

}

swiper1.el.onmouseleave = function () {
    var Now_translate1 = swiper1.getTranslate();
    Now_translate1 = Now_translate1 - 300;
    swiper1.setTransition(10000);
    swiper1.setTranslate(Now_translate1);
}
swiper2.el.onmouseenter = function () {
    var swiper2_translate = swiper2.getTranslate();
    swiper2.setTranslate(swiper2_translate);

}
swiper2.el.onmouseleave = function () {
    var Now_translate2 = swiper2.getTranslate();
    Now_translate2 = Now_translate2 + 300;
    swiper2.setTransition(10000);
    swiper2.setTranslate(Now_translate2);
}
