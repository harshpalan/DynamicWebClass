
function FlowFieldSketch(p) {
		let particles = [];

		let cnv;
		
		let bgCol;

		p.setup = () => {
			cnv = p.createCanvas(500, 500); 
			cnv.mouseOver(playsketch);
			cnv.mouseOut(pause);
			bgCol = p.color(p.random(0,255),p.random(0,255),p.random(100,255), 50);
			p.noLoop();
		}
		
		p.draw = () => {
			// let count = num.value();
			let count = 1000;
			p.background(0,10);
			// console.log(num.position().y);
			for(let i = 0; i < count; i ++) {
				particles.push(p.createVector(p.random(p.width), p.random(p.height)));
			}
			for(let i = 0; i < count; i ++) {
				let par = particles[i];
				p.point(par.x, par.y);
				p.strokeWeight(3);
				p.stroke(bgCol);
				// let n = p.noise(par.x * noiseScale.value(), par.y * noiseScale.value());
				let n = p.noise(par.x * 0.01, par.y * 0.01);

				let a = p.TAU * n;
				if(p.mouseIsPressed){
					par.x += p.cos(a)-p.sin(a);
					par.y += p.sin(a)*p.cos(a);
				}
				else{
					par.x -= p.cos(a)-p.sin(a);
					par.y -= p.sin(a)+p.cos(a);
				}
				
				
				if(!onScreen(par)) {
					par.x = p.random(p.width);
					par.y = p.random(p.height);
				}
			}
		}

		// function mouseReleased() {
		//     p.noiseSeed(p.millis());
		// }
	
		function playsketch() {
			p.loop();
		}

		function pause() {
			p.noLoop();
		}
	
		function onScreen(v) {
			return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
		}
}

export default FlowFieldSketch;