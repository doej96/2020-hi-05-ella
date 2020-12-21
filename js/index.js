/********* 전역선언 **********/


/********* 사용자함수 **********/
function createNavi(r) {
	var html = '<a href="'+r.link+'" class="hover-line">';
	if(r.icon) html += '<i class="'+r.icon+'"></i>';
	html += r.name;
	html += '</a>';
	return html;
}

function createSub(r) { //r=데이터
	var html = '<div class="sub-navi-wrap">'
	for(var i=0; i<r.depth2.length; i++) { //배열은 length를 가짐
		if (r.depth2[i].depth3 && i>0) {
			html += '</div><div class="sub-navi-wrap">'  //앞에 있는 div닫고 새로 단독으로 div 엶
		} //먼저 div생성하고 나서 그 뒤에 집어넣어야 
		html += '<a href="'+r.depth2[i].link+'" class="sub-navi bold">'+r.depth2[i].name+'</a>';
		if(r.depth2[i].depth3) {
			for(var j=0; j<r.depth2[i].depth3.length; j++) {
				html += '<a href="'+r.depth2[i].depth3[j].link+'" class="sub-navi hover-line">'+r.depth2[i].depth3[j].name+'</a>';
			}
		}
	}
	html += '</div>';
	return html;
}

function createSub2(r) {
	for(var i=0, html=''; i<r.depth2.length; i++) {
	html += '<li class="depth depth2">';
	html += 	'<a href="'+r.depth2[i].link+'">'+r.depth2[i].name+'</a>';
	if(r.depth2[i].depth3 && r.depth2[i].depth3.length > 0) {
		html += 	'<ul>';
		for(var j=0; j<r.depth2[i].depth3.length; j++) {
			html += '		<li class="depth3 depth"><a href="'+r.depth2[i].depth3[j].link+'">'+r.depth2[i].depth3[j].name+'</a></li>';
		}
	 	html += '	</ul>';
	}
	html += '</li>';
	}
	return html;
}

function createSubNavi(el, r) { //el:DOM
	$(el).prepend(createNavi(r))
	$(el).find('.sub-wrapper2').append(createSub2(r));
	$(el).mouseenter(onSub2Enter);
	$(el).mouseleave(onSub2Leave);
	$(el).find('.depth2').mouseenter(onDepth2Enter);
	$(el).find('.depth2').mouseleave(onDepth2Leave);
}

/********* 이벤트선언 **********/
$('.top-wrapper .icon-down').click(onLangChg); // 언어선택
$('.top-wrapper .bt-down').click(onLangSel); // 언어선택
$.get('../json/navi-new.json', onNaviNew); // new releases 생성
$.get('../json/navi-best.json', onNaviBest); // best sellers 생성
$.get('../json/navi-sales.json', onNaviSales); // sales 생성
$.get('../json/new-products.json', onNewProducts); // new releases 상품 가져오기
$.get('../json/navi-men.json', onNaviMen); // Men 상품 가져오기
$.get('../json/navi-women.json', onNaviWomen); // Women 상품 가져오기
$.get('../json/navi-kids.json', onNaviKids); // Kids 상품 가져오기

$(".navi-wrapper .navi").mouseenter(onNaviEnter);
//mobile은 mouseover가 없기 때문에 가급적이면 주지 말기
//mouseenter는 pc에서 hover, 모바일에서는 touch
$(".navi-wrapper .navi").mouseleave(onNaviLeave);

var mainBanner = new Swiper('.main-wrapper.swiper-container', {
	slidesPerView: 1,
	loop: 'true',
	effect: 'fade',
	autoplay: {
		delay : 4000,
		},
	pagination: {
		el: '.main-wrapper .pager-wrap',
		clickable: 'true',
	},
		navigation: {
		nextEl: '.main-wrapper .bt-next',
		prevEl: '.main-wrapper .bt-prev',
	},
});


/********* 이벤트콜백 **********/

function onSub2Enter() {
	$(this).find('.sub-wrapper2').stop().slideDown(300);
}
function onSub2Leave() {
	$(this).find('.sub-wrapper2').stop().slideUp(300);
}

function onDepth2Enter() {
	$(this).find('ul').stop().fadeIn(300);
}
function onDepth2Leave() {
	$(this).find('ul').stop().fadeOut(300);
}


function onNaviMen(r) {
	createSubNavi('.navi.navi-men',r);
}

function onNaviWomen(r) {
	createSubNavi(".navi.navi-women",r);
}

function onNaviKids(r) {
	createSubNavi(".navi.navi-kids",r);
}

function onNaviEnter() {
	$(this).find(".sub-wrapper").addClass('active');
}

function onNaviLeave() {
	$(this).find(".sub-wrapper").removeClass('active');
}

function onNaviNew(r) {
	$(".navi.navi-new").prepend(createNavi(r));
	var html = createSub(r);
	html += '<div class="sub-banner">';
	html += 	'<img src="../img/trend0.jpg" alt="" class="mw-100">';
	html += '</div>';
	$(".navi.navi-new").find(".sub-navi-wrapper").append(html);
}

function onNaviBest(r) {
	$(".navi.navi-best").prepend(createNavi(r));
	$(".navi.navi-best").find(".sub-navi-wrapper").append(createSub(r));

	for(var i=0; i<r.alphabet.length; i++) {
		if(r.alphabet[i].class == '')
		html = '<li><a>'+r.alphabet[i].name+'</a></li>';
		else
		html = '<li><a href="#" class="'+r.alphabet[i].class+'">'+r.alphabet[i].name+'</a></li>'
		$(".navi.navi-best").find(".alphabet-wrap").append(html);
	}
}

function onNaviSales(r) {
	$(".navi.navi-sales").prepend(createNavi(r));
	for(var i=0; i<r.brands.length; i++) {
	html = '<div class="brand-wrap">';
	html += '<div class="img-wrap" style="background-image: url('+r.brands[i].src+'); order:'+i%2+'"></div>';
	//나누기 구하는 연산자 : '%', 다른 아이템이 초기값(0)이고 해당 아이템이 order=1이면 가장 마지막에
	html += '<ul class="brand-link">';
	html += '	<li class="sub-navi bold">'+r.brands[i].company+'</li>';
	for(var j=0; j<r.brands[i].brand.length; j++) {
		html += '<li class="sub-navi hover-line">';
		html += '<a href="'+r.brands[i].brand[j].link+'">'+r.brands[i].brand[j].name+'</a>';
		html += '</li>';
	}
	html += '</ul>';
	html += '</div>';
	$(".navi.navi-sales").find(".sales-wrapper").append(html);
	}
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

