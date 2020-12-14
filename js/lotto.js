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


function onLucky(){
	$(".result-wrap").empty();

	var lotto = [];
	for(var i=0; i<6; i++){
		var random = Math.ceil(Math.random()*45);
			if(lotto.indexOf(random) == -1){
				lotto.push(random);
			}else{
				i--;
			}
		if(lotto.length == 6){
			break;
		}
	}
	console.log(lotto);
	for(var a=0, html=''; a<lotto.length; a++){
		//var colors = ['yellow','blue','red','gray','green'];
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
}

$("#btLucky").click(onLucky);


/* var numbers = [];
for(var i=1; i<=45; i++) numbers.push(i); */
