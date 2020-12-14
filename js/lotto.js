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
 */

var numbers = [];
for(var i=1; i<=45; i++) numbers.push(i);

var lotto = [];
function onLucky(){
	$(".result-wrap").empty();
	for(var i=0; i<6; i++){
		var random = Math.ceil(Math.random()*45)-1;
		lotto.push(random);
	}
	console.log(lotto);
	lotto.splice(0,6);

}
$("#btLucky").click(onLucky);