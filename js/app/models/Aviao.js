 var img = new Image();
 img.src = "img/aviao.png";

 class Aviao {

    constructor(x, y, raio, angulo, velocidade, direcao) {
        this.x = x;
        this.y = y;
        this.raio = raio;
        this.angulo = angulo;
        this.velocidade = velocidade;
        this.direcao = direcao;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate((this.x + LARGURA), (ALTURA - this.y));
        ctx.rotate((Math.PI / 180) * -this.angulo);
        ctx.drawImage(img, -15, -15, 30, 30);
        ctx.restore();
    }

    get polarCoord() {

    }
}