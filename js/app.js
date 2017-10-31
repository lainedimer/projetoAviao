var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const LARGURA = $(c).width() * 0.5;
const ALTURA = $(c).height() * 0.5;

ctx.fillRect(LARGURA, ALTURA, 2, 2);

$('#btn-translandar').on("click", function(e) {
	e.preventDefault();

	var inputX = parseInt($("input[name='x_translandar']").val());
	var inputY = parseInt($("input[name='y_translandar']").val());

	var x = inputX + LARGURA;
	var y = ALTURA - inputY;

	ctx.fillRect(x, y, 2, 2);
});


var coordX = ( $( c ).offset().left - ( $( c ).width()  * 0.5 ) );
var coordY = -( $( c ).offset().top  - ( $( c ).height() * 0.5 ) );

