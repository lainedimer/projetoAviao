class Form {

	static getFormTranslandar(){
		let dados = {
			tx: parseInt(Input.getValue("x_translandar")),
			ty: parseInt(Input.getValue("y_translandar"))
		};

		return dados;
	}

	static getFormEscalonar(){
		let dados = {
			tx: parseInt(Input.getValue("x_escalonar")),
			ty: parseInt(Input.getValue("y_escalonar"))
		};

		return dados;
	}

	static getFormRotacionar(){
		let dados = {
			tx: parseInt(Input.getValue("x_rotacionar")),
			ty: parseInt(Input.getValue("y_rotacionar")),
			angulo: parseInt(Input.getValue("ang_rotacionar"))
		};

		return dados;
	}

	static getFormInserir() {

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
}