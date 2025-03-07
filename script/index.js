//글자 무한으로 하나씩 나오게 하기.
const txt = '신선함을 담다, 마켓컬리'
const bannerTxt = document.querySelector('.header_txt_move');
let t = 0;

console.log(bannerTxt);

function writer() {
    if(txt.length > t) {
        //한글자씩 추가
        bannerTxt.innerHTML += txt.charAt(t);
        t++;
    }
}
setInterval(writer, 300);


//메인 배너 swiper

const mainBnr = new Swiper(".main_bnr", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 45,
    loop: true,
    // loopAdditionalSlides: 3,
    initialSlide: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".main_bnr .swiper-button-next",
        prevEl: ".main_bnr .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// item - swiper

const itemSwiper = new Swiper('.items_wrap', {
    spaceBetween: 25,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".items_wrap .swiper-button-next",
        prevEl: ".items_wrap .swiper-button-prev",
    },
})

const dailySwiper = new Swiper('.daily_time_wrap', {
    slidesPerView: 'auto',
    spaceBetween: 23,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
})

// 취향 저격 제품 swiper

const shotSwiper = new Swiper('.shot_items_box', {
    spaceBetween: 50,
    slidesPerView: 'auto',
    loop: true,
    // autoplay: {
    //     delay: 1000,
    // }
    centeredSlides: 0,
})