
function onCreateBox() {
var cnt = Number($("input[name='cnt']").val());
for(var i=0; i<cnt; i++) {
	$(".wrapper").append('<div class="box"></div>');
}
}

$("#btCreate").click(onCreateBox);