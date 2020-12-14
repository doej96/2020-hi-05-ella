

var colors = ['green','red','blue','pink','orange'];

function onCreateBox() {
	var cnt = Number($("input[name='cnt']").val());
	for(var i=0, color; i<cnt; i++){
		var color = Math.ceil(Math.random() * 5)-1;
		$(".wrapper").append('<div class="box '+colors[color]+'"></div>')
	}
}

function onResetBox() {
	$(".wrapper").empty();
}

$("#btCreate").click(onCreateBox);
$("#btReset").click(onResetBox);


/* 
var colors = ['pink', 'green', 'blue', 'orange', 'red'];

function onCreateBox(){
var cnt = Number($("input[name='cnt']").val());
for(var i=0, color; i<cnt; i++) {
	var color = Math.ceil(Math.random() * 5)-1
	console.log(color);
	$(".wrapper").append('<div class="box '+colors[color]+'"></div>')
}
}

function onResetBox(){
	$(".wrapper").empty();
}

$("#btCreate").click(onCreateBox);
$("#btReset").click(onResetBox);
 */