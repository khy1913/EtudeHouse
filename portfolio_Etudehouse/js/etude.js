/* GNB 메뉴 토글 */
$('input[id="menu_btn"]+label').click(function(){
    $('.toggle_menu').stop().toggle();
});

/* 2depth 메뉴 보이게 하기 */
$('.sub_gnb').hide();
$('.one_depth li').mouseenter(function(){
    $(this).children('.sub_gnb').stop().fadeIn();
    $('.sub_gnb a').css({borderBottom:'none', paddingBottom:0});
});
$('.one_depth li').mouseleave(function(){
    $(this).children('.sub_gnb').stop().fadeOut();
});

/* 스크롤시 텍스트/이미지 나타내기 */
$(window).scroll( function(){
    $('.fadeUp').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-bottom':'120px'},700);
        }
        
    }); 
});

/* 검색버튼 */
$('.search').click(function(){
    $('.search_bar').slideDown();
    $('.hamburger').click(function(){
        $('.search_bar').slideUp();
    });
});

/* 동영상 플레이 제어 */
var video = $('#etude_video');
var btn = $('#etude_btn');
btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

/* 스와이퍼 생성 */
var swiper = new Swiper('.swiper-container',{
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '10.333333%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹수 맞추기 => 안 맞을 경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: true,
}); 

/* FAQ영역 아코디언 */
$('.faq_acordian p').hide();
$('.faq_acordian h3').click(function(){
    if($(this).hasClass('active')) {

        
        $(this).addClass('active');
        // 화살표 방향 바꾸기
        $(this).removeClass('down');
        $(this).addClass('up');
        $(this).parent().siblings().children().addClass('down');

        // $(this).children('./images/plus.png');
        // 해당 내용 보여주기
        $(this).siblings('p').stop().slideUp();
    }else { /* 클래스명 active가 없으면 실행(초기실행-첫번째로 보이는 화면) */


    $(this).removeClass('active');
    // 화살표 방향 바꾸기
    if($(this).hasClass('up')){
        $(this).removeClass('up');
        $(this).addClass('down');
    } else {
        $(this).removeClass('down');
        $(this).addClass('up');
    }
    $(this).parent().siblings().children().addClass('up');

    // 해당 내용 가리기
    $(this).siblings('p').slideToggle();
    $(this).parent().siblings().children('p').slideUp();
    }
});

$('input[id="map01"]').click(function(){
    // 아이콘 모양 바뀌게 하기
    $('input[id="map01"]+label>i').replaceWith('<i class="fa fa-angle-down down" aria-hidden="true"></i>');
    $('input[id="map02"]+label>i').replaceWith('<i class="fa fa-angle-up he up" aria-hidden="true"></i>');
    // 다시 클릭했을 때 사라져야 한다

    
});

$('input[id="map02"]').click(function(){
    // 아이콘 모양 바뀌게 하기
    $('input[id="map02"]+label>i').replaceWith('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    $('input[id="map01"]+label>i').replaceWith('<i class="fa fa-angle-up he up" aria-hidden="true"></i>');

});
/* 라디오 버튼 토글 */
$('input[name="mapInfo"]').click(function() {
    var previousValue = $(this).data('storedValue');
    if (previousValue) {
        $(this).prop('checked', !previousValue);
        $(this).data('storedValue', !previousValue);
        $('input[name="mapInfo"]:not(:checked)+label>i').replaceWith('<i class="fa fa-angle-up he up" aria-hidden="true"></i>');
    }
    else{
        $(this).data('storedValue', true);
        $('input[name="mapInfo"]:not(:checked)').data("storedValue", false);

    }
  });

/* a 막기 */
$('a[href="#"]').on('click',function(e){
    // 기본 기능 제거
    e.preventDefault();
});

/* top 버튼 */
// 스크롤 101px이상 되었을때 TOP 버튼 나오게
var sa = 100;
$(window).scroll(function(){
    var num = $(window).scrollTop();
    console.log(num);
    if(num>sa){
        $('aside .btn_top').stop().fadeIn();
    }else{
        $('aside .btn_top').stop().fadeOut();
    }
});

$('.top').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},1000);

});