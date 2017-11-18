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

$('#btn-translandar').on("click", function(e) {
	e.preventDefault();

	var campos = getCheckboxMarcados();
	var dados = getFormTranslandar();


	avioes.forEach(function(aviao){
		campos.forEach(function(campo){
			if(campo == aviao.id){
				avioes[aviao.id] = Calculotranslandar(aviao, dados.tx, dados.ty);
				console.log(avioes);
			}
		});
	});
	desenha();
	Table.update(avioes);
	limpaCamposTranslandar();

});

$('#btn-escalonar').on("click", function(e) {
	e.preventDefault();

	var campos = getCheckboxMarcados();
	var dados = getFormEscalonar();


	avioes.forEach(function(aviao){
		campos.forEach(function(campo){
			if(campo == aviao.id){
				avioes[aviao.id] = Calculo.escalonar(aviao, dados.tx, dados.ty);
			}
		});
	});
	desenha();
	Table.update(avioes);


});


$('#btn-rotacao').on("click", function(e) {
	e.preventDefault();

	var campos = getCheckboxMarcados();
	var dados = getFormRotacionar();


	avioes.forEach(function(aviao){
		campos.forEach(function(campo){
			if(campo == aviao.id){
				avioes[aviao.id] = Calculo.rotacionar(angulo);
			}
		});
	});
	desenha();
	Table.update(avioes);


});


$('#btn-remover').on("click", function(e) {
	e.preventDefault();
	removeAviao();
});


function setup() {
	ctx.fillRect(LARGURA, ALTURA, 2, 2);
}

function limpaCamposTranslandar(){
	Input.clear("translandar");
}

function getFormTranslandar(){
	let dados = {
		tx: parseInt(Input.getValue("x_translandar")),
		ty: parseInt(Input.getValue("y_translandar"))
	};

	return dados;
}

function getFormEscalonar(){
	let dados = {
		tx: parseInt(Input.getValue("x_escalonar")),
		ty: parseInt(Input.getValue("y_escalonar"))
	};

	return dados;
}

function getFormRotacionar(){
	let dados = {
		tx: parseInt(Input.getValue("x_rotacionar")),
		ty: parseInt(Input.getValue("y_rotacionar")),
		angulo: parseInt(Input.getValue("ang_rotacionar"))
	};

	return dados;
}

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
		
		//ctx.rotate(aviao.angulo);
		ctx.drawImage(img, (aviao.x + LARGURA) - 15, (ALTURA - aviao.y) - 15, 30, 30);

	});


}



setup();

