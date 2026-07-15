document.addEventListener('DOMContentLoaded', function() {

    // 1. 메인 배너 Swiper
    const swiper = new Swiper('.mainBnSwiper', {
        slidesPerView: 'auto',       
        centeredSlides: true,        
        spaceBetween: 10,            
        loop: true,   
        loopPreventsSlide: false,
        rewind: false,
        loopedSlides: 4,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return String(number).padStart(2, '0');
            },
            formatFractionTotal: function (number) {
                return String(number).padStart(2, '0');
            },
        },
        breakpoints: {
            1024: {
                spaceBetween: 16, 
            },
        },
    });

    // 재생 / 일시정지 버튼 제어 (버튼이 존재할 때만 실행되도록 예외 처리)
    const toggleBtn = document.querySelector('.btn-autoplay-toggle');
    const pauseIcon = document.querySelector('.icon-pause');
    const playIcon = document.querySelector('.icon-play');

    if (toggleBtn && pauseIcon && playIcon) {
        toggleBtn.addEventListener('click', function () {
            if (swiper.autoplay.running) {
                swiper.autoplay.stop();
                pauseIcon.style.display = 'none';
                playIcon.style.display = 'block';
            } else {
                swiper.autoplay.start();
                pauseIcon.style.display = 'block';
                playIcon.style.display = 'none';
            }
        });
    }


    // 1-1. 항공권 비교 Swiper
    const flightSwiper = new Swiper('.flightPriceSwiper', {
        slidesPerView: 1.4,
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16, 
        loop: false,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        breakpoints: {
            474: {
                slidesPerView: 2.2, 
                spaceBetween: 10,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
            },
            768: {
                slidesPerView: 2.7, 
                spaceBetween: 10,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 12, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 12, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
        },
        navigation: {
            nextEl: ".flightPriceSwiper .swiper-button-next",
            prevEl: ".flightPriceSwiper .swiper-button-prev",
        },
    });


    // 1-2. 항공 배너 Swiper
    const airbnSwiper = new Swiper(".airbnSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16, 
        loop: true, 
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1, 
                spaceBetween: 10,
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0, 
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 10, 
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0,
            },
        },
    });
    


    // 2. 주간 투어&티켓 BEST Swiper
    const bestSwiper = new Swiper('.bestItemSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,  
        loop: false,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        navigation: {
            nextEl: ".bestItemSwiper .swiper-button-next",
            prevEl: ".bestItemSwiper .swiper-button-prev",
        },
        breakpoints: {
            574: {
                slidesPerView: 'auto', 
                spaceBetween: 10,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 10, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 24, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
        },
    });


    // 3. 이벤트 배너 Swiper
    const eventSwiper = new Swiper(".eventSwiper", {
        spaceBetween: 16,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,
        pagination: {
            el: ".eventSwiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".eventSwiper-btn-next", 
            prevEl: ".eventSwiper-btn-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 1, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1024: {
                slidesPerView: 1, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
        },
    });


    // 6. 호텔타임세일 상품 Swiper
    const timeSwiper = new Swiper('.timeSaleSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,
        loop: false, 
        freeMode: {
            enabled: true,
            sticky: true,
        }, 
        navigation: {
            nextEl: ".timeSaleSwiper .swiper-button-next",
            prevEl: ".timeSaleSwiper .swiper-button-prev",
        },
        breakpoints: {
            574: {
                slidesPerView: 'auto',
                spaceBetween: 10, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 10, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24, 
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
        },
    });


    // 7. 숏폼 추천 상품 Swiper
    const shortsSwiper = new Swiper('.shortsSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,
        loop: false, 
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        }, 
        pagination: {
            el: '.shorts .swiper-pagination',
        },
        breakpoints: {
            1024: {
                slidesPerView: 'auto',
                centeredSlides: false, 
                spaceBetween: 24, 
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24, 
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0,
            },
        },
    });

}); 





// review
document.addEventListener('DOMContentLoaded', function() {
    
    const tickerEl = document.querySelector('#review-ticker');
    
    if (tickerEl && typeof Splide !== 'undefined' && typeof splinter !== 'undefined' || window.splide?.Extensions?.AutoScroll) {
        
        const reviewTicker = new Splide('#review-ticker', {
            type       : 'loop',  
            gap        : '26px',    
            drag       : true, 
            
            snap       : false,      // 손을 뗀 그 자리에 그대로 멈춤
            flickPower : 0,          // 숫자를 낮추거나 제한하여 휙 날아가는 현상 방지
            flickMaxPages: 0,         // 드래그 한 번에 여러 페이지가 휙 넘어가는 것을 막음
            dragMinThreshold: { mouse: 10, touch: 10 }, // 살짝만 밀어도 착 착 걸리게 민감도 조절
            arrows     : false,       
            pagination : false,       
            perPage    : 'auto',      
            clones     : 10,          
            autoScroll: {
                speed: 0.3,           
                pauseOnHover: true,   // 마우스 올리면 멈춤 (드래그 조작 가능)
                pauseOnFocus: true,   
            },
        });

        // 안전하게 확장 플러그인(AutoScroll)을 마운트하는 방식
        reviewTicker.mount( window.splide.Extensions );
    }
});






// header
const header = document.querySelector('.main-header');
//const visual = document.querySelector('.search-area');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
//   visual.classList.add('hidden'); 
  } else {
    header.classList.remove('scrolled');
//    visual.classList.remove('hidden');
  }
});









// 위로가기 버튼
const topBtn = document.getElementById("scrollTopBtn");
if (topBtn) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 100) {
            topBtn.classList.remove("hidden-btn");
            topBtn.classList.add("show-btn");
        } else {
            topBtn.classList.remove("show-btn");
            topBtn.classList.add("hidden-btn");
        }
    });

    // 2. 버튼 클릭 시 맨 위로 부드럽게 이동 
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}











// 전체메뉴, 검색창
const menus = document.querySelectorAll('#searchSidebar, #responsiveMenu');
const mainHeader = document.querySelector('.main-header');

if (menus.length > 0 && mainHeader) {
    // 2. forEach를 사용해 가져온 모든 메뉴에 각각 이벤트를 걸어줍니다.
    menus.forEach(menu => {
        // 우측 창이 열릴 때
        menu.addEventListener('show.bs.offcanvas', () => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            mainHeader.style.paddingRight = `${scrollbarWidth}px`;
        });

        // 우측 창이 닫힐 때
        menu.addEventListener('hidden.bs.offcanvas', () => {
            mainHeader.style.paddingRight = '0px';
        });
    });
}