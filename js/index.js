/******** 전역선언 *********/




/******** 사용자함수 *********/




/******** 이벤트 선언 *********/
$('.top-wrapper .icon-down').click(onLangChg); // 언어선택
$('.top-wrapper .bt-down').click(onLangSel); // 언어선택


/******** 이벤트 콜백 *********/
function onLangChg() {
    $(".trans-wrapper").stop().slideToggle(200);
    $(".trans-wrapper .lang-sel").stop().slideUp(200); /* .trans-wrapper 닫힐 때 .lang-sel 열려 있어도 닫힘 */
}
function onLangSel() {
    if($(this).next().css("display") === 'none'){  /* css속성이 display인 값 찾아서(getter) none이면 */
        $(".trans-wrapper .lang-sel").stop().slideUp(200);
        $(this).next().slideDown(200);
    }else{
        $(".trans-wrapper .lang-sel").stop().slideUp(200); /* 열려있는 상태에서 한 번 더 눌렀을 때 */
    }
}
/* !!!
function onLangSel() {
    $(".trans-wrapper .lang-sel").stop().slideUp(200);
    if($(this).next().css("display") === 'none') $(this).next().slideDown(200);
}
 */
