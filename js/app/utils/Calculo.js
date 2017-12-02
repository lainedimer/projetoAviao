class Calculo {

	static translandar(aviao,tx,ty) {

		aviao.x += tx;
		aviao.y += ty;

		return aviao;

	}

	static escalonar(aviao, tx, ty) {


		if (tx < 0) {
			aviao.x = aviao.x / (tx / 100);	
		} else if (tx > 0) {

			aviao.x = aviao.x * (tx / 100);	
		} 


		if (ty < 0) {
			aviao.y = aviao.y / (ty / 100);	
		} else if (ty > 0) {

			aviao.y = aviao.y * (ty / 100);
		}

		

		return aviao;

	}

	static rotacionar(aviao, a) {

		var tx = aviao.x * Math.cos(a * (Math.PI / 180));
		var ty = aviao.y * Math.sin(a * (Math.PI / 180));

		var px = aviao.y * Math.cos(a * (Math.PI / 180));
		var py = aviao.x * Math.sin(a * (Math.PI / 180));

		aviao.x = Math.round(tx - ty);
		aviao.y = Math.round(px + py);

		return aviao;
	}

	static toCartesiano(aviao) {
		aviao.y = Math.round(aviao.raio * Math.sin(aviao.angulo * (Math.PI / 180)));
        aviao.x = Math.round(aviao.raio * Math.cos(aviao.angulo * (Math.PI / 180)));

        return aviao;
	}

	static toPolar(aviao) {
		let r = Math.pow(aviao.x, 2) + Math.pow(aviao.y, 2);
	}

}





