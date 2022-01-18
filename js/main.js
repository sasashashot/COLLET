$(document).ready(function(){
  // 윈도우에 load, resize 이벤트 설정
  $(window).on('load resize',function(){
    // 윈도우 가로길이를 bodyW변수에 저장
    var bodyW=$(this).width();
    // 만약 윈도우의 가로 길이가 1220보다 작으면(태블릿, 모바일 버전)
    if(bodyW <= 1199){
      $('.acc_item').removeClass('active');
      // 사이트맵
      $('.sitemap .site_nav > ul > li > a').click(function(){
        if($(this).attr('class') !='active'){
          $('.site_nav .sub').slideUp(300);
          $('.site_nav > ul > li > a').removeClass('active');
          $(this).next().slideDown();
          $(this).addClass('active');
        }else{
          $(this).removeClass('active');
          $(this).next().slideUp();
        }
        return false;
      });


    // 윈도우 가로길이가 1220보다 크거나 작으면(PC버전)
    }else{
      // 주메뉴에 마우스 오버 이벤트 설정
      $('header nav').hover(function(){
        // 서브 메뉴 내려옴
        $('header nav .sub').stop().slideDown(300);
        // 서브메뉴 배경 내려옴
        $('.sub_bg').stop().slideDown(300);
        // header_wrap에 ative설정
        $('.header_wrap').addClass('active');
      }, function(){
        // 서브 메뉴 올라감
        $('header nav .sub').stop().slideUp(300);
        // 서브메뉴 배경 올라감
        $('.sub_bg').stop().slideUp(300);
         // header_wrap에 ative제거
         $('.header_wrap').removeClass('active');
      });
      // 아코디언 
      $('.acc_item').click(function(){
      $('.acc_item').removeClass('active');
      $(this).addClass('active');
      });
    }
  });

  // 화면이 스크롤 되어서 첫번째 섹션이 지나가면 헤더에 엑티브 설정
  $(window).scroll(function(){
    // 윈도우의 스크롤탑 값을 탑변수에 저장
    var top=$(this).scrollTop();
    // 만약 탑변수의 값이 0보다 크면 헤더에 엑티브 살행
    if(top > 0){
      $('header').addClass('active');
      // 탑 번수 값이 0보다 작거나 같으면 헤더에서 엑티브 제거
    }else{
      $('header').removeClass('active');
    }
    // 각 세션 안의 객체들 애니메이션
    // 각 세션 영역의 위쪽 위치값을 구해 각 변수에 저장
    var sTop1=$('section.s2').offset().top-600;
    var sTop2=$('section.s3').offset().top-600;
    var sTop3=$('section.s4').offset().top-600;
    var sTop4=$('section.s5').offset().top-600;
    var sTop5=$('section.s6').offset().top-600;
    var sTop6=$('section.s7').offset().top-600;
    // 만약 각 섹션의 위쪽 위치값이 인도우 스크롤탑 값보다 작으면
    // &&: '그리고'라는 뜻. 조건 2개 모두 true일때 실행
    if(sTop1 < top && top < sTop2){
      $('.company_txt').addClass('active');
      $('.company_img').addClass('active');
    }
    if(sTop2 < top && top < sTop3){
      $('.s3 .fade_animation').addClass('active');
      $('.s3 .up_animation').addClass('active');
    }
    if(sTop3 < top && top < sTop4){
      $('.s4 .s4_ani1').addClass('active');
      $('.s4 .s4_ani2').addClass('active');
      $('.s4 .s4_ani3').addClass('active');
      $('.s4 .s4_ani4').addClass('active');
      $('.s4 .fade_animation').addClass('active');
    }
    if(sTop4 < top && top < sTop5){
      $('.s5 .up_animation').addClass('active');
    }
    if(sTop5 < top && top < sTop6){
      $('.s6 .up_animation').addClass('active');
    }
    if(sTop6 < top){
      $('.s7 .up_animation').addClass('active');
    }

  });
  // 헤더에 마우스 오ㅓ 했을때 헤더에 엑티브 설정
  $('header').hover(function(){
    $('.header_wrap').addClass('active');
  }, function(){
    $('.header_wrap').removeClass('active');
  });

  // 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    effect:'fade',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //  스와이퍼 프레이/스탑 버튼 추가
  $('section.s1 .swiper-pagination').append('<span class="swiper-play-stop"</span>');
  // 스와이퍼 플레이 스탑 버튼을 클릭할 때마다 배경 이미지도 변경하고 멈췄다가 다시 자동 재생되는 기능
  var sw=0;
  $('.swiper-play-stop').click(function(){
    if(sw==0){
      sw=1;
      swiper.autoplay.stop();
      $(this).css('background-image','url(img/play.png)');
    }else{
      sw=0;
      swiper.autoplay.start();
      $(this).css('background-image','url(img/puse.png)');
    }
  });

  // 상품 슬라이드
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1280:{
      slidesPerView: 4,
      spaceBetween: 20,
      },
      767:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      360:{
        slidesPerView: 1,
        spaceBetween: 20,
        }
    }
  });
  
  // 패밀리 클릭 이벤 
  var on=0;
  $('.family').click(function(){
    if(on==0){
      on=1;
      $(this).addClass('active');
    }else {
      on=0;
      $(this).removeClass('active');
    }
    return false;
  });

  // 클릭하면 사이트맵 나옴
  $('.menu').click(function(){
    $('.sitemap').addClass('active');
    return false;
  });
  // 닫기 버튼 누르면 사이트맵 사라짐
  $('.site_close').click(function(){
    $('.sitemap').removeClass('active');
    return false;
  });
});