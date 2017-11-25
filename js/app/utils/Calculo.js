class Calculo {

	static translandar(aviao,tx,ty) {

		aviao.x += tx;
		aviao.y += ty;

		return aviao;

	}

	static escalonar(aviao,tx,ty) {

		aviao.x = aviao.x * (tx / 100);
		aviao.y = aviao.y * (ty / 100);

		return aviao;

	}

}





