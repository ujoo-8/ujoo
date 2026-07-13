document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('.mainBnSwiper', {
        slidesPerView: 'auto',       
        centeredSlides: true,        
        spaceBetween: 10,            
        loop: true,   
        loopPreventsSlide: false,
        rewind: false,
        loopedSlides: 4,  // 화면 좌우에 대기할 복사본 슬라이드 개수를 3개 이상으로 강제 지정

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

        // 재생 / 일시정지 버튼 제어
        const toggleBtn = document.querySelector('.btn-autoplay-toggle');
        const pauseIcon = document.querySelector('.icon-pause');
        const playIcon = document.querySelector('.icon-play');

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


    // 1-1. 항공권 비교 -------------------------------------------------------------------------
    const flightSwiper = new Swiper('.flightPriceSwiper', {
        slidesPerView: 1.4,
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16, 
        loop: false,
        freeMode: {
            enabled: true,
            sticky: true, // ◀ freeMode를 쓰되, 멈출 때는 근처 슬라이드에 딱 붙게 해주는 옵션
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


    // 1-2. 항공 배너 (★ 충돌 요인 대폭 수정) ------------------------------------------------------
    const airbnSwiper = new Swiper(".airbnSwiper", {
        slidesPerView: 1,
        spaceBetween: 16,
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
                spaceBetween: 0, 
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0,
            },
        },
    });
    


    // 2. 주간 투어&티켓 BEST --------------------------------------------------------------------
    const bestSwiper = new Swiper('.bestItemSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,  
        loop: false,
        freeMode: {
            enabled: true,
            sticky: true, // ◀ freeMode를 쓰되, 멈출 때는 근처 슬라이드에 딱 붙게 해주는 옵션
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


    // 3. 이벤트 배너 -----------------------------------------------------------------------------
    const eventSwiper = new Swiper(".eventSwiper", {
        spaceBetween: 16,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,
        // loop: true, 
        // autoplay: {
        //     delay: 6000,
        //     disableOnInteraction: false,
        // },
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


    // 6. 호텔타임세일 상품 ----------------------------------------------------------------------
    const timeSwiper = new Swiper('.timeSaleSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesOffsetBefore: 16, 
        slidesOffsetAfter: 16,
        loop: false, 
        freeMode: {
            enabled: true,
            sticky: true, // ◀ freeMode를 쓰되, 멈출 때는 근처 슬라이드에 딱 붙게 해주는 옵션
        }, 
        navigation: {
                    nextEl: ".timeSaleSwiper .swiper-button-next",
                    prevEl: ".timeSaleSwiper .swiper-button-prev",
                },
        breakpoints: {
            574: {
                slidesPerView: 3.5,
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


    // 7. 숏폼 추천 상품 ------------------------------------------------------------------------
    const shortsSwiper = new Swiper('.shortsSwiper', {
        slidesPerView: 'auto',
        // centeredSlides: true,
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
        // grabCursor: true,
        breakpoints: {
            // 768: {
            //     slidesPerView: 2.1,
            //     centeredSlides: false, 
            //     spaceBetween: 16, 
            //     slidesOffsetBefore: 0, 
            //     slidesOffsetAfter: 0,
            // },
            1024: {
                slidesPerView: 'auto',
                centeredSlides: false, 
                spaceBetween: 24, 
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0,
            },
            1200: {
                slidesPerView: 3,
                // centeredSlides: false, 
                spaceBetween: 24, 
                slidesOffsetBefore: 0, 
                slidesOffsetAfter: 0,
            },
        },
    });


    // [통합] 따로 떨어져 있던 Splide 티커 코드를 하나의 DOMContentLoaded 안으로 합쳤습니다. ---------
    if (document.querySelector('#brand-ticker')) {
        new Splide('#brand-ticker', {
            type       : 'loop',      
            drag       : true,        
            arrows     : false,       
            pagination : false,       
            perPage    : 'auto',      
            clones     : 10,          
            autoScroll: {
                speed: 0.5,           
                pauseOnHover: true,   
                pauseOnFocus: true,   
            },
        }).mount(window.splide.Extensions);
    }

}); // 전체를 묶어주는 DOMContentLoaded 마감 괄호


// 버튼 요소 가져오기
const topBtn = document.getElementById("scrollTopBtn");
// 브라우저가 스크롤 될 때마다 실행될 함수 등록
window.addEventListener("scroll", () => {
  // 현재 스크롤된 높이값 확인 (브라우저 호환성 대비 3가지 체크)
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // 스크롤이 100px 이상 내려가면 버튼 노출, 아니면 다시 숨김
  // 수치(100)는 원하는 타이밍에 맞춰 조절 가능합니다!
  if (scrollTop > 100) {
    topBtn.classList.remove("hidden-btn");
    topBtn.classList.add("show-btn");
  } else {
    topBtn.classList.remove("show-btn");
    topBtn.classList.add("hidden-btn");
  }
});





//const video = document.getElementById('main-video');

// 재생 속도를 설정합니다 (기본값은 1.0)
//video.playbackRate = 0.8;


new Splide('.splide', {
  type: 'loop',
  autoWidth: true,
  gap: '20px',
  // 드래그 후 튕기는 액션(휘리릭)을 잡는 핵심 옵션들
  drag: true,           // 드래그는 가능하게 하되
  flickPower: 0,        // ★ 세게 밀었을 때 휘리릭 날아가는 힘을 0으로 차단
  snap: true,           // ★ 드래그를 놓았을 때 가장 가까운 슬라이드에 딱 붙게 설정
  
  autoScroll: {
    speed: 0.1,           
    pauseOnHover: false,
    pauseOnFocus: false,
  },
}).mount( window.splide.Extensions );







const header = document.querySelector('.main-header');
const visual = document.querySelector('.search-area');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    visual.classList.add('hidden'); 
  } else {
    header.classList.remove('scrolled');
    visual.classList.remove('hidden');
  }
});


$(document).ready(function() {
  
  // 1. 검색 버튼 누르면 검색창 열기
  $('.search-open-btn').on('click', function() {
    $('.top-search-area').addClass('active');
    // (선택사항) 열리자마자 검색창에 타이핑할 수 있게 포커스 주기
    setTimeout(function() {
      $('.search-input').focus();
    }, 300);
  });

  // 2. ✕ 버튼 누르면 검색창 닫기
  $('.search-close-btn').on('click', function() {
    $('.top-search-area').removeClass('active');
  });
  
  // 3. 어두운 배경 누르면 닫히게 하기
  $('.top-search-area').on('click', function(e) {
    if ($(e.target).is('.top-search-area')) {
      $('.top-search-area').removeClass('active');
    }
  });

});
