/******** 전역선언 *********/



/******** 사용자함수 *********/




/******** 이벤트 선언 *********/
$('.top-wrapper .icon-down').click(onLangChg); // 언어선택
$('.top-wrapper .bt-down').click(onLangSel); // 언어선택
$.get('../json/new-products.json', onNewProducts); // new releases 상품 가져오기


/******** 이벤트 콜백 *********/
function onNewProducts(r) {
    console.log(r);
    for (var i=0, html =''; i<r.length; i++) {
        html += '<div class="slide">';
        html += '<div class="img-wrap">';
        html += '<img src="'+ r[i].src +'" alt="상품" class="w-100">';
        html += '</div>';
        html += '<div class="content-wrap">';
        html += '<h4 class="title">' + r[i].title + '</h4>';
        html += '<p class="summary">' + r[i].summary + '</p>';
        html += '<div class="star">';
        for(var j=0; j<5; j++) html += '<i class="fa fa-star"></i>';
		if(Number(r[i].star) > 0) html += '<div class="mask"></div>';
        html += '</div>';
        html += '<div class="content">';
        html += '<span class="price-original">$' + r[i].originalPrice + '</span>';
        html += '<span>|</span>';
        html += '<span class="origin">' + r[i].origin + '</span>';
        html += '</div>';
        html += '<div class="price-sale">$' + r[i].salePrice + '</div>';
        html += '</div>';
        html += '</div>';
        $slide = $(html).appendTo(".navi-new .slide-container");
		if(Number(r[i].star) > 0) $slide.find(".star > i").addClass("active");
		$slide.find(".mask").css("left", r[i].star * 20 + "%");
    }
}

function onLangChg() {
    $(".trans-wrapper").stop().slideToggle(200);
    $(".trans-wrapper .lang-sel").stop().slideUp(200); /* .trans-wrapper 닫힐 때 .lang-sel 열려 있어도 닫힘 */
}

function onLangSel() {
    if ($(this).next().css("display") === 'none') {
        /* css속성이 display인 값 찾아서(getter) none이면 */
        $(".trans-wrapper .lang-sel").stop().slideUp(200);
        $(this).next().slideDown(200);
    } else {
        $(".trans-wrapper .lang-sel").stop().slideUp(200); /* 열려있는 상태에서 한 번 더 눌렀을 때 */
    }
}
/* !!!
function onLangSel() {
    $(".trans-wrapper .lang-sel").stop().slideUp(200);
    if($(this).next().css("display") === 'none') $(this).next().slideDown(200);
}
 */