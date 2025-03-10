const mainSwiper = new Swiper(".pf_wrap", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    speed: 700,
    // tq
    on:{
        slideChangeTransitionEnd:function(){
            setTimeout(()=> ScrollTrigger.refresh() ,0)
        }
    }
});

const designSwiper = new Swiper('.web_design_wrap', {
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    slidesPerView: 1,
    // autoplay: {delay: 5000,},
    loop: true,
    
})
//카드
const cardSwiper = new Swiper('.card', {
    // slidesPerView: 1,
    autoplay: {delay: 5000,},
    loop: true,
    effect: "cards",
    grabCursor: true,
    
})
//배너
const bnrSwiper = new Swiper('.bnr', {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {delay: 0,},
    speed:5000,
    loop: true,
    
})
//sns
const snsSwiper = new Swiper('.sns', {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {delay: 0,},
    speed:6000,
    loop: true,
})

//팝업 출력과 숨기기
const popup_bg = document.querySelector('.popup_bg');
const card = document.querySelectorAll('.card img');
const bnr = document.querySelectorAll('.bnr img');
const sns = document.querySelectorAll('.sns img');

popup_bg.style.display ='none';
for(let i of card){
    //i라는 변수가 이미지로
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block';
        console.log(i.src)
        console.log(popup_bg.children[0].children[0].src);
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '600px';
        popup_bg.children[0].style.overflow = 'auto';
        popup_bg.children[0].style.marginTop = '100px';
    })
}       
for(let i of bnr){
    //i라는 변수가 이미지로
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block';
        console.log(i.src)
        console.log(popup_bg.children[0].children[0].src);
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '550px';
        popup_bg.children[0].style.marginTop = '150px';
    })
}       
for(let i of sns){
    //i라는 변수가 이미지로
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block';
        console.log(i.src)
        console.log(popup_bg.children[0].children[0].src);
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '900px';
        popup_bg.children[0].style.marginTop = '300px';
    })
}       
// bnr 다시 클릭하면 사라지기(한개)
popup_bg.addEventListener('click', ()=>{
    popup_bg.style.display ='none';
})









//메인 Web design&publisher 한글자씩 타자 무한으로 쳐지게 하기(커서도 깜빡)

const introduceTxt = document.querySelector('.introduce_title');
const txt = 'Web design&publisher';
let t = 0;


setInterval(writer, 200);
function writer() {
    if(txt.length > t) {
        introduceTxt.innerHTML += txt.charAt(t);
        t++;
    }
    //t(1..2...3..4..)가 txt길이를 넘어가면
    // 1. 자리 비우기
    // 2. t 숫자 초기화
    // 3. 1초 후에 초기화?
    else {
        //초기화하기
        setTimeout(()=>{
            introduceTxt.innerHTML ='';
            t = 0;
        }, 200)
    }
}

gsap.registerPlugin(ScrollTrigger);

// gsap.to('.contents .title_box',{
//     scrollTrigger:{
//         trigger:'.contents .title_box',
//         start:'top 60%',
//         end:'top 10%',
//         markers:true,
//         toggleActions:'play reverse restart reverse',
//     },
//     opacity:1,
//     y:-5,
// })

gsap.utils.toArray('.contents .title_box').forEach((box) => {
    //기본적으로 하나만 선택됌
    gsap.to(box, {
        scrollTrigger: {
            trigger: box, // 각 개별 요소가 트리거가 되도록 설정
            start: 'top 60%',
            end: 'top 10%',
            // markers: true,
            toggleActions: 'play reverse restart reverse',
        },
        opacity: 1,
        y: -5,
    });
});

const box1 = document.querySelectorAll('.info_contents > * > *');
console.log(box1);
for(let i of box1) i.style.opacity = '0'

gsap.to(box1 , {
    scrollTrigger: {
        trigger: box1 ,
        start: 'top 80%',
        end: 'top 20%',
        // markers: true,
        toggleActions: 'play reverse restart reverse',
        // 
        onEnter: () => {
            gsap.to(box1 ,{
                opacity: 1,
                y: 5,
                duration: 0.6,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(box1 , {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(box1 ,{
                opacity: 1,
                y: 5,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(box1 , {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
})