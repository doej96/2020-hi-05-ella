/********* 전역선언 **********/


/********* 사용자함수 **********/


/********* 이벤트선언 **********/
$('.top-wrapper .icon-down').click(onLangChg); // 언어선택
$('.top-wrapper .bt-down').click(onLangSel); // 언어선택
$.get('../json/navi-new.json', onNaviNew); // new releases 생성
$.get('../json/new-products.json', onNewProducts); // new releases 상품 가져오기

$(".navi-wrapper .navi").mouseenter(onNaviEnter);
//mobile은 mouseover가 없기 때문에 가급적이면 주지 말기
//mouseenter는 pc에서 hover, 모바일에서는 touch
$(".navi-wrapper .navi").mouseleave(onNaviLeave);


/********* 이벤트콜백 **********/
function onNaviEnter() {
	$(this).find(".sub-wrapper").addClass('active');
}

function onNaviLeave() {
	$(this).find(".sub-wrapper").removeClass('active');
}

function onNaviNew(r) {
	var html, i, j;
	html = '<a href="'+r.link+'" class="hover-line">';
	if(r.icon) html += '<i class="'+r.icon+'"></i>';
	html += r.name;
	html += '</a>';
	$(".navi.navi-new").append(html);

	html = '<div class="sub-navi-wrap">'
	for(i=0; i<r.depth2.length; i++) { //배열은 length를 가짐
		if (r.depth2[i].depth3 && i>0) {
			html += '</div><div class="sub-navi-wrap">'  //앞에 있는 div닫고 새로 단독으로 div 엶
		} //먼저 div생성하고 나서 그 뒤에 집어넣어야 
		html += '<a href="'+r.depth2[i].link+'" class="sub-navi bold">'+r.depth2[i].name+'</a>';
		if(r.depth2[i].depth3) {
			for(j=0; j<r.depth2[i].depth3.length; j++) {
				html += '<a href="'+r.depth2[i].depth3[j].link+'" class="sub-navi hover-line">'+r.depth2[i].depth3[j].name+'</a>';
			}
		}
	} 
	html += '</div>';
	html += '<div class="sub-banner">';
	html += 	'<img src="../img/trend0.jpg" alt="" class="mw-100">';
	html += '</div>';
	$(".navi.navi-new").find(".sub-navi-wrapper").append(html);
	console.log(html);
}

function onNewProducts(r) {
	for(var i=0, html='', $slide; i<r.length; i++) {
		html  = '<div class="slide swiper-slide">';
		html += '<div class="img-wrap">';
		html += '<img src="'+r[i].src+'" alt="상품" class="w-100">';
		html += '</div>';
		html += '<div class="content-wrap">';
		html += '<h4 class="title">'+r[i].title+'</h4>';
		html += '<p class="summary">'+r[i].summary+'</p>';
		html += '<div class="star">';
		for(var j=0; j<5; j++) html += '<i class="fa fa-star"></i>';
		if(Number(r[i].star) > 0) html += '<div class="mask"></div>';
		html += '</div>';
		html += '<div class="content">';
		html += '<span class="price-original">$'+r[i].originalPrice+'</span>';
		html += '<span> | </span>';
		html += '<span class="origin">'+r[i].origin+'</span>';
		html += '</div>';
		html += '<div class="price-sale">$'+r[i].salePrice+'</div>';
		html += '</div>';
		html += '</div>';
		$slide = $(html).appendTo(".navi-new .swiper-wrapper");
		if(Number(r[i].star) > 0) $slide.find(".star > i").addClass("active");
		$slide.find(".mask").css("left", r[i].star * 20 + "%");
	}
	var swiper = new Swiper('#newSlide .swiper-container', {
			slidesPerView: 4,
			loop: true,
			autoplay : {
				delay : 5000,
			},
			navigation: {
				nextEl: '#newSlide .bt-next',
				prevEl: '#newSlide .bt-prev',
			},
	});
}
function onLangChg() {
	$(".trans-wrapper").stop().slideToggle(200);
	$(".trans-wrapper .lang-sel").stop().slideUp(200);
}
function onLangSel() {
	$(".trans-wrapper .lang-sel").stop().slideUp(200);
	if($(this).next().css("display") === 'none') $(this).next().stop().slideDown(200);
}