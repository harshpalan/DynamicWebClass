function KaleidoscopeSketch(p) {
	let symmetry = 5;
	let angle = 0;
	let cnv;

	p.setup = function () {
		cnv = p.createCanvas(500, 500);
		cnv.mouseOver(playsketch);
		cnv.mouseOut(pause);
		cnv.mouseClicked(clearScreen);
		p.angleMode(p.DEGREES);
		p.frameRate(10);
		p.noLoop();

	};

	// Clear Screen function
	function clearScreen() {
		p.frameRate(1);
		p.background(0);
		p.frameRate(15);
	}

	p.draw = function () {
		p.background(0, 30);
		symmetry = 18;
		// angle = symmetry*symmetry;
		angle = p.floor((90 + 90 * symmetry) / symmetry);
		// console.log(angle);
		p.translate(p.width / 2, p.height / 2);
		let rx = p.random(0, p.width);
		let ry = p.random(0, p.height);
		let a = p.random(0, p.width);

		if (rx > 0 && rx < p.width && ry > 0 && ry < p.height) {
			let mx = rx - p.width / 2;
			let my = ry - p.height / 2;
			let pmx = rx + a - p.width / 2;
			let pmy = ry + a - p.height / 2;
			p.stroke(p.color(p.random(0, 256), p.random(0, 256), p.random(0, 256)));
			for (let i = 0; i < symmetry; i++) {
				p.rotate(angle);
				p.strokeWeight(1);
				p.line(mx, my, pmx, pmy);
				p.push();
				p.scale(1, -1);
				p.line(mx, my, pmx, pmy);
				p.pop();
			}
		}
	};

	function playsketch() {
		p.loop();
	}

	function pause() {
		p.noLoop();
	}
}

export default KaleidoscopeSketch;
