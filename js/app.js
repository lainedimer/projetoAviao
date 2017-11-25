var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const LARGURA = $(c).width() * 0.5;
const ALTURA = $(c).height() * 0.5;

var avioes = [];

$('#btn-inserir').on("click", function(e) {
	e.preventDefault();

	var form = $("#dadosInserir")[0];

	// if(form.checkValidity()) {
	//	adicionaAviao();	
	//}

	adicionaAviao();

	Input.clearForm(this);

});

$('#btn-translandar').on("click", function(e) {
	e.preventDefault();

	var campos = getCheckboxMarcados();
	var dados = Form.getFormTranslandar();

	avioes.forEach(function(aviao){
		campos.forEach(function(campo){
			if(campo == aviao.id){
				avioes[aviao.id] = Calculo.translandar(aviao, dados.tx, dados.ty);
			}
		});
	});

	desenha();
	Table.update(avioes);

	Input.clearForm(this);

});

$('#btn-escalonar').on("click", function(e) {
	e.preventDefault();

	var campos = getCheckboxMarcados();
	var dados = Form.getFormEscalonar();


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
	var dados = Form.getFormRotacionar();


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

function getCheckboxMarcados() {
	var campos = [];

	$("input[type='checkbox'][name='table-check']:checked").each(function(val) {
		campos.push($(this).val());
	});

	return campos;
}


function adicionaAviao() {
	let data = Form.getFormInserir();

	let aviao = new Aviao(data.x, data.y, data.raio, data.angulo, data.velocidade, data.direcao);

	avioes.push(aviao);

	var id = avioes.lastIndexOf(aviao);
	aviao['id'] = id;

	Table.append(aviao);
	
	desenha();
}

function removeAviao() {

	avioes = [];

	Table.update(avioes);

	desenha();
}


function desenha() {

	ctx.clearRect(0, 0, c.width, c.height);
	setup();

	avioes.forEach(function(aviao) {	
		aviao.draw(ctx);		
	});
}

setup();

