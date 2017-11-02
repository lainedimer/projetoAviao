var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const LARGURA = $(c).width() * 0.5;
const ALTURA = $(c).height() * 0.5;

var img = new Image();
img.src = "img/aviao.png";

var avioes = [];

$('#btn-inserir').on("click", function(e) {
	e.preventDefault();
    adicionaAviao();
});

/*
 * Comandos que precisam ser executados ao carregar página
 */
function setup() {
	ctx.fillRect(LARGURA, ALTURA, 2, 2);
}

/*
 * Retorna o valor de input conforme name informado
 * @return string
 */
function getValue(inputName) {
	return $("input[name=" + inputName + "]").val();
}

/*
 * Retorna os dados do form para inserir avião
 * @return object
 */
function getFormInserir() {
	let dados = {
		x: parseInt(getValue("x_inserir")),
		y: parseInt(getValue("y_inserir")),
		raio: parseInt(getValue("raio_inserir")),
		angulo: parseInt(getValue("angulo_inserir")),
		velocidade: parseInt(getValue("velocidade_inserir")),
		direcao: parseInt(getValue("direcao_inserir"))
	};

	return dados;
}

function adicionaAviao() {
	let data = getFormInserir()

	let aviao = new Aviao(data.x, data.y, data.raio, data.angulo, data.velocidade, data.direcao);

	avioes.push(aviao);

	console.log(avioes);

	Table.append(aviao);

	desenha();
}

function desenha() {

	avioes.forEach(function(aviao) {
		ctx.drawImage(img, aviao.x + LARGURA, ALTURA - aviao.y, 30, 30);
	});

}

setup();

