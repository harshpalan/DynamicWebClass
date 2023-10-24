function FlowerSketch(p) {
	let col = 0;
	let size = 50;
    let cnv;


	p.setup = function() {
        cnv = p.createCanvas(500, 500);
		cnv.mouseOver(playsketch);
		cnv.mouseOut(pause);
		cnv.mouseClicked(clearScreen);
		p.colorMode(p.HSB);
		p.frameRate(30);
		p.noLoop();
	}

	p.draw = function(){
		p.background(0, 0.035);
		p.translate(p.width / 2, p.height / 2);
		p.noFill();
		// fill(col%255,255,255,0.05);
		p.strokeWeight(1);
		// noStroke();
		p.stroke(col % 255, 255, 100);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		p.rotate(20);
		p.ellipse(p.width / 4, p.height / 4, size);
		//
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		p.rotate(20);
		p.ellipse(p.width / 8, p.height / 8, size / 4);
		col++;
		// if(size >= p.width || size >= p.height){
		//   size=size%10;
		// }
		size = (size + 5) % (p.width);
	}

	function clearScreen() {
        p.frameRate(1);
        p.background(0);
        p.frameRate(30);
    }

    function playsketch() {
        p.loop();
    }

    function pause() {
        p.noLoop();
    }
}

export default FlowerSketch;
