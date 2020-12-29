/**
 ** 프로그램 세팅값 - obj 인자값
 */

/* obj = {
	container : '#ejSlide',
	stageViewDefault : 4, //스테이지에 보여질 개수 기준값(PC기준)
	moveCnt : 1, //한 번에 움직여지는 슬라이드 개수
	speed : 300
}
 */

function EJSlide(container, obj){
this.obj = obj || {};
this.$container = $(container);
this.$stage = this.$container.find('.slide-stage');
this.$wrapper = this.$container.find('.slide-wrapper');
this.$slide = this.$container.find('.slide');
this.$btPrev = this.$container.find('.bt-prev');
this.$btNext = this.$container.find('.bt-next');
this.$pagerWrapper = this.$container.find('.pager-wrapper');
for(var i=0; i<this.$slide.length; i++)
	$('<div class="pager"></div>').appendTo(this.$pagerWrapper)
	this.$pager = this.$container.find('.pager');
	
	this.speed = this.obj.speed || 300;
	this.stageViewDefault = this.obj.stageViewDefault || 4;
	this.moveCnt = this.obj.moveCnt || 1;
	
this.slideCnt = this.$slide.length; //슬라이드 총 개수(length)
this.slideLast = slideCnt -1; //슬라이드의 마지막 인덱스(index)
this.slideWid; //반응형일 때의 슬라이드 width값
this.stageView; //반응형일 때 스테이지에 보여질 슬라이드 개수
this.now = 0; //기준이 되는 슬라이드의 인덱스
this.direction = 1; //1:오른쪽으로 이동(prev) / -1:왼쪽으로 이동(next)
this.target; //Animation(.wrapper)될 목표값(left값)
	return this;
}