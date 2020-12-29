/**
 * A 알고리즘
 * 1. 1~45까지의 숫자 중 원하는 번호를 생성한다 - Math.random()
 * 2. 추출된 번호를 lotto배열에 넣는다. 단 중복되면 안된다.
 * 3. 6개의 번호가 추출되면 .result-wrap에 공을 만들어 넣는다.
 * 
 * B 알고리즘
 * 1. 1~45까지의 번호가 존재하는 numbers배열이 있다.
 * 2. numbers에서 6개의 번호를 추출하여 lotto배열에 넣는다.
 * 3. 6개의 번호가 추출되면 .result-wrap에 공을 만들어 넣는다.
 * 
 * [도은정] 로또 숙제
 * booldook@gmail.com
 * 
 * =====================================================================
 * 
 ** Array Method
 * push() // 맨 뒤에 요소 추가
 * pop() // 맨 뒤에서 요소 추출
 * shift() // 맨 앞에 요소 추가
 * unshift() // 맨 앞에서 요소 추출
 * sort() // 문자열 오름차순으로 정렬 (콜백함수로 오름차순, 내림차순할 수 있음)
 * 
 */

function colorSel(n) {
	if(n <= 10) return 'yellow'; //return을 만나면 끝남
	else if(n <= 20) return 'blue';
	else if(n <= 30) return 'red';
	else if(n <= 40) return 'gray';
	else if(n <= 45) return 'green';
}
var lotto = []; //로또 번호를 담을 배열, 지역변수면 그 안에서 초기화됨
var legacyLotto = []; //기존 로또 번호를 담을 배열

function genLottoHtml(arr) { //배열 받아서 배열의 번호로 돈 html return함
	var html='';
	for(var i in arr){
		html+='<div class="number '+colorSel(arr[i])+'">'+arr[i]+'</div>'
	}
	return html;
}

function onLucky(){
	legacyLotto = lotto; //legacyLotto에 lotto 넣음
	lotto = []; //초기화

	// B알고리즘
	var defaultLotto = [];
	for(var i=0; i<=45; i++) defaultLotto.push(i);
	defaultLotto = _.shuffle(defaultLotto);
	console.log(defaultLotto);
	for(var i=0; i<6; i++) lotto.push(defaultLotto.pop());

	var colors = []; //생성될 공의 클래스 담을 변수
/* A알고리즘
	while(lotto.length < 6) { //length 6보다 작으면 계속 돎
		var random = Math.floor(Math.random()*45)+1; //버리고 +1! ceil은 0도 나옴
		if(lotto.indexOf(random)==-1) lotto.push(random);
	}//while end
 */
	lotto.sort(function(a,b){
		return a - b; // 오름차순(뺀 값이 0보다 큰지 작은지)
		//return b - a; // 내림차순
	});
	console.log(lotto);

	for(var i in lotto) { // (= var i=0; i<lotto.length; i++)
		//colorSel(lotto[i]);
		$(".result-wrap").empty().append(genLottoHtml(lotto));
	}

	if(legacyLotto.length > 0) { //들어있는 배열이 있을 때
		html = '<div class="history">';
		html += genLottoHtml(legacyLotto);
		html += '</div>';
		$(".history-wrapper").prepend(html);
	}
	
	/* 
	for(var i=0; i<6; i++){
			if(lotto.indexOf(random) == -1){  //같은 수가 있는 index번호가 나옴, 없으면 -1
				lotto.push(random);
			}else{
				i--;
			}
		if(lotto.length == 6){
			break;
		}
	}
	
	for(var a=0, html=''; a<lotto.length; a++){
		if(lotto[a]<=10) {
			$(".result-wrap").append('<div class="number yellow">'+lotto[a]+'</div>')
		}else if(lotto[a]<=20){
			$(".result-wrap").append('<div class="number blue">'+lotto[a]+'</div>')
		}else if(lotto[a]<=30){
			$(".result-wrap").append('<div class="number red">'+lotto[a]+'</div>')
		}else if(lotto[a]<=40){
			$(".result-wrap").append('<div class="number gray">'+lotto[a]+'</div>')
		}else if(lotto[a]<=45){
			$(".result-wrap").append('<div class="number green">'+lotto[a]+'</div>')
		}
	}
	 */
}

$("#btLucky").click(onLucky);


/* var numbers = [];
for(var i=1; i<=45; i++) numbers.push(i); */
