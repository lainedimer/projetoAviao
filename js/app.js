var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const LARGURA = $(c).width() * 0.5;
const ALTURA = $(c).height() * 0.5;

var avioes = [];

document.getElementById("btn-inserir").addEventListener("click", function(e) {

	e.preventDefault();

	adicionaAviao();

	console.log('teste');

	Input.clearForm(this);
});



document.getElementById("btn-translandar").addEventListener("click", function(e) {
	
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


document.getElementById("btn-escalonar").addEventListener("click", function(e) {

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
})


document.getElementById("btn-rotacionar").addEventListener("click", function(e) {

	e.preventDefault();

	var campos = getCheckboxMarcados();
	var dados = Form.getFormRotacionar();


	avioes.forEach(function(aviao){
		campos.forEach(function(campo){
			if(campo == aviao.id) {
				avioes[aviao.id] = Calculo.translandar(aviao, -dados.tx, -dados.ty);
				avioes[aviao.id] = Calculo.rotacionar(aviao, dados.angulo);
				avioes[aviao.id] = Calculo.translandar(aviao, dados.tx, dados.ty);
			}
		});
	});

	desenha();
	Table.update(avioes);

});

document.getElementById("btn-remover").addEventListener("click", function(e) {

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

	
	if (!(Number.isNaN(data.raio)) && !(Number.isNaN(data.angulo))) {
		aviao = Calculo.toCartesiano(aviao);
	}

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

	console.log(avioes)

	avioes.forEach(function(aviao) {	
		aviao.draw(ctx);		
	});
}

setup();

