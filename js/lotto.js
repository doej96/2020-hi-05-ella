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
 */

function colorSel(n) {
	if(n <= 10) return 'yellow'; //return을 만나면 끝남
	else if(n <= 20) return 'blue';
	else if(n <= 30) return 'red';
	else if(n <= 40) return 'gray';
	else if(n <= 45) return 'green';
}
function onLucky(){
	$(".result-wrap").empty();

	var lotto = []; //빈 배열
	var colors = []; //생성될 공의 클래스 담을 변수
	while(lotto.length < 6) { //length 6보다 작으면 계속 돎
		var random = Math.floor(Math.random()*45)+1; //버리고 +1! ceil은 0도 나옴
		if(lotto.indexOf(random)==-1) lotto.push(random);
	}//while end

	lotto.sort(function(a,b){
		return a - b; // 오름차순(뺀 값이 0보다 큰지 작은지)
		//return b - a; // 내림차순
	});
	console.log(lotto);

	for(var i in lotto) { // (= var i=0; i<lotto.length; i++)
		//colorSel(lotto[i]);
		$(".result-wrap").append('<div class="number '+colorSel(lotto[i])+'">'+lotto[i]+'</div>')
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
