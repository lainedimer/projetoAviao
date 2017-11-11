var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const LARGURA = $(c).width() * 0.5;
const ALTURA = $(c).height() * 0.5;

var img = new Image();
img.src = "img/aviao.png";

var avioes = [];

$('#btn-inserir').on("click", function(e) {
	e.preventDefault();

	var form = $("#dadosInserir")[0];

	// if(form.checkValidity()) {
	//	adicionaAviao();	
	// }

	adicionaAviao();
    
});

$('#btn-remover').on("click", function(e) {
	e.preventDefault();
	removeAviao();
});

/*
 * Comandos que precisam ser executados ao carregar página
 */
function setup() {
	ctx.fillRect(LARGURA, ALTURA, 2, 2);
}

/*
 * Retorna os dados do form para inserir avião
 * @return object
 */
function getFormInserir() {
	let dados = {
		x: parseInt(Input.getValue("x_inserir")),
		y: parseInt(Input.getValue("y_inserir")),
		raio: parseInt(Input.getValue("raio_inserir")),
		angulo: parseInt(Input.getValue("angulo_inserir")),
		velocidade: parseInt(Input.getValue("velocidade_inserir")),
		direcao: parseInt(Input.getValue("direcao_inserir"))
	};

	return dados;
}

function getCheckboxMarcados() {
	var campos = [];

	$("input[type='checkbox'][name='table-check']:checked").each(function(val) {
		campos.push($(this).val());
	});

	return campos;
}

function adicionaAviao() {
	let data = getFormInserir();

	let aviao = new Aviao(data.x, data.y, data.raio, data.angulo, data.velocidade, data.direcao);

	avioes.push(aviao);

	var id = avioes.lastIndexOf(aviao);
	aviao['id'] = id;

	Table.append(aviao);

	desenha();
}

function removeAviao() {
	
	var campos = getCheckboxMarcados();

	

	Table.update(avioes);

	desenha();
}

function desenha() {

	ctx.clearRect(0, 0, c.width, c.height);

	avioes.forEach(function(aviao) {
		ctx.drawImage(img, (aviao.x + LARGURA) - 15, (ALTURA - aviao.y) - 15, 30, 30);
	});

}



setup();

