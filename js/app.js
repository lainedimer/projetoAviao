/*
var canvas = document.getElementById("canvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

// That's how you define the value of a pixel //
function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

// That's how you update the canvas, so that your //
// modification are taken in consideration //
function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}

drawPixel(150, 100, 0, 0, 0, 200);
updateCanvas();
*/



var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const LARGURA = $(c).width() * 0.5;
const ALTURA = $(c).height() * 0.5;

ctx.fillRect(LARGURA, ALTURA, 2, 2);

$('#btn-translandar').on("click", function(e) {
	e.preventDefault();

	var x = parseInt($("input[name='x_translandar']").val());
	var y = parseInt($("input[name='y_translandar']").val());

    console.log(x + ", " + y);
    console.log(LARGURA - x +"+"+ ALTURA - y);

	ctx.fillRect(LARGURA - x, ALTURA - y, 5, 5);
});


var coordX = ( $( c ).offset().left - ( $( c ).width()  * 0.5 ) );
var coordY = -( $( c ).offset().top  - ( $( c ).height() * 0.5 ) );




$("#canvas").on("click", function(e) {

	console.log(e.pageX);
	console.log(e.pageY);

	var coordX = ( e.pageX - $( this ).offset().left - ( $( this ).width()  * 0.5 ) );
    var coordY = -( e.pageY - $( this ).offset().top  - ( $( this ).height() * 0.5 ) );


    //alert( coordX.toFixed(1) + ' , ' + coordY.toFixed(1) );

});

