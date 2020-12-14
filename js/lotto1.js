
function onLucky(){
	$(".result-wrap").empty();

	var lotto = [];
	for(var i=0; i<6; i++){
		var random = Math.ceil(Math.random()*45)-1;
		lotto.push(random);
	}
	console.log(lotto);
	for(var a=0, html=''; a<lotto.length; a++){
		/* var colors = ['yellow','blue','red','gray','green'];
		if(lotto<=10)  */$(".result-wrap").append('<div class="number yellow">'+lotto[a]+'</div>')
	}
}

$("#btLucky").click(onLucky);