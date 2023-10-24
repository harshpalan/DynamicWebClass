function MatrixRainSketch(p){
	var streams = [];
	var symbolSize = 20;
    let symbol;
    let stream;
    let rainColor;
    let cnv;

	p.setup = function () {
        cnv = p.createCanvas(500, 500); 
        cnv.mouseOver(playsketch);
        cnv.mouseOut(pause);
		p.colorMode(p.HSB);
		p.background(0, 0, 0);
		var x = 0;
		var y = p.random(-500, 0);
		for (var i = 0; i <= 400 / symbolSize; i++) {
			stream = new Stream();
			stream.generateSymbols(x, y);
			streams.push(stream);
			x += symbolSize;
		}

		rainColor = p.color(p.random(0, 255), p.random(0, 255), p.random(70, 255), 40);
		p.noLoop();
		p.textSize(symbolSize);
		// frameRate(45);
	}

	p.draw = function () {
		p.background(0, 0, 0, 0.25);
		streams.forEach(function (stream) {
			stream.render();
		});
		// setTimeout(pause,5000);
	}

	function MatrixSymbol(x, y, speed) {
		this.x = x;
		this.y = y;
		this.value = 0;
		this.speed = speed;
		this.interval = p.round(p.random(5, 50));
		this.setToRandomSymbol = function () {
			if (p.frameCount % this.interval === 0) {
				this.value = String.fromCharCode(0x0900 + p.round(p.random(0, 120)));
				// String.fromCodePoint(0x1F344 + p.round(p.random(0,55)));
				// this.value = String.fromCharCode(0x20B9);
				// this.value = String.fromCharCode(0x30A0 + p.round(p.random(0, 96)));

				// this.value = String.fromCodePoint(0x1F344 + p.round(p.random(0,55)));
				// this.value = String.fromCodePoint(0x1F344 + p.round(p.random(0,55)));
				// this.value = String.fromCodePoint(0x1F601 + p.round(p.random(0,55)));
				// this.value = p.round(p.random(0, 9));

			}
		};

		this.rain = function () {
			this.y = this.y >= p.height ? 0 : (this.y += this.speed);
		};
	}

	function Stream() {
		this.symbols = [];
		this.totalSymbols = p.round(p.random(5, 20));
		this.speed = p.random(1, 5);

		this.generateSymbols = function (x, y) {
			for (var i = 0; i <= this.totalSymbols; i++) {
				symbol = new MatrixSymbol(x, y, this.speed, 0);
				symbol.setToRandomSymbol();
				this.symbols.push(symbol);
				y -= symbolSize;
			}
		};

		this.render = function () {
			this.symbols.forEach(function (symbol) {
				p.fill(rainColor);
				p.text(symbol.value, symbol.x, symbol.y);
				symbol.rain();
				symbol.setToRandomSymbol();
			});
		};
	}

    function playsketch() {
        p.loop();
    }

    function pause() {
        p.noLoop();
    }
}


export default MatrixRainSketch;
        
        