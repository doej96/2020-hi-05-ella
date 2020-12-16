/**
 ** 프로그램 세팅값
 */
var container = '.ej-slide';
var stageViewDefault = 2; //스테이지에 보여질 개수 기준값(PC기준)
var moveCnt = 1; //한 번에 움직여지는 슬라이드 개수
var speed = 500;

/**
 ** 전역변수
 */
var $container = $(container);
var $stage = $container.find('.slide-stage');
var $wrapper = $container.find('.slide-wrapper');
var $slide = $container.find('.slide');
var $btPrev = $container.find('.bt-prev');
var $btNext = $container.find('.bt-next');
var slideCnt = $slide.length; //슬라이드 총 개수(length)
var slideLast = slideCnt -1; //슬라이드의 마지막 인덱스(index)
var slideWid; //반응형일 때의 슬라이드 width값
var stageView; //반응형일 때 스테이지에 보여질 슬라이드 개수
var now = 0; //기준이 되는 슬라이드의 인덱스
var direction = 1; //1:오른쪽으로 이동(prev) / -1:왼쪽으로 이동(next)


 /**
	** 사용자 함수
	*/
function init(){
	$wrapper.empty().css("left",0);
	//DOM은 지웠지만 변수 안에 slide 살아있음
	$slide.eq(now).clone().appendTo($wrapper).css("width",slideWid+"%");
	//원본은 훼손되지 않음(변수 안에)
	for(var i=0, my, prev=now; i<stageView; i++) {
		my = (prev == 0) ? slideLast : prev -1;
		prev = my; //다음 for문을 위해서
		$slide.eq(my).clone().prependTo($wrapper).css("width",slideWid+"%");
	}
	for(var i=0, my, prev=now; i<stageView*2-1; i++) {
		prev = my = (prev == slideLast) ? 0 : prev +1;
		$slide.eq(my).clone().appendTo($wrapper).css("width",slideWid+"%");
	}
}

function slideAni() {
	$wrapper.stop().animate({"left":direction*slideWid*moveCnt+"%"},speed,init);
}


/** 
 ** 이벤트 콜백
 */
function onResize() {
	var wid = $(this).outerWidth(); //$(this)=$(window)
	stageView = stageViewDefault;
	if(wid < 576) stageView = 1;
	else if(wid < 768) stageView = stageViewDefault <2 ? stageViewDefault : 2;
	/* (stageViewDefault - 3 < 1) ? 1 : stageViewDefault -3; */
	else if(wid < 992) stageView = stageViewDefault < 3 ? stageViewDefault : 3;
	/* (stageViewDefault - 2 < 1) ? 1 : stageViewDefault -2; */
	else if(wid < 1200) stageView = stageViewDefault < 4 ? stageViewDefault : 4;
	/* (stageViewDefault - 1 < 1) ? 1 : stageViewDefault -1; */
	slideWid = 100 / stageView;
	init();
}

function onPrev() {
	direction=1;
	now = now == 0 ? slideLast : now-1;
	slideAni();
}

function onNext() {
	direction=-1;
	now = now == slideLast ? 0 : now+1;
	slideAni();
}

 /**
	** 이벤트 등록
  */
 $(window).resize(onResize).trigger("resize");
 $btPrev.click(onPrev);
 $btNext.click(onNext);