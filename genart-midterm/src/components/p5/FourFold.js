function FourFoldSketch(p){
    let x = 0;
    let y = 0;
    let t = 0;
    let t1 = 0;

    let alpha = 0.1;
    let csize = 30;
	let cnv;

    p.setup = function() {
		cnv = p.createCanvas(500, 500); 
        cnv.mouseOver(playsketch);
        cnv.mouseOut(pause);
		cnv.mouseClicked(clearScreen);
		p.background(0);
        p.colorMode(p.HSB);
        p.noLoop();
    }

    p.draw = function() {
        p.noStroke();
        //creating a hue shift color with Modulo 
        p.fill(p.frameCount % 360, 75, 100, alpha);

        // Block 1 - Experimenting with changing location/size of circles with mouse. Comment block 2 to use this. 

        // x = mouseX;
        // y = mouseY;

        // csize = mouseY/20;

        //Reflection Logic  
        p.circle(x, y, csize);
        p.circle(x, p.height - y, csize);
        p.circle(p.width - x, y, csize);
        p.circle(p.width - x, p.height - y, csize);

        // Use this with block 1 to control straight motion of circles in certain directions 
        // if using x = mouseX, uncomment y and vice-versa.  

        // x = (x+1) % width;
        // y = (y+1) % height;

        //Moving to circles with noise and randomness
        x = p.map(p.noise(t), 0, 0.75, 0, p.width);
        y = p.map(p.noise(t1), 0, 0.75, 0, p.height);
        t = t + p.random(0.02);
        t1 = t1 + p.random(0.01);
        alpha = alpha + 0.01;


        //Uncomment below lines to see the X/Y axis lines

        // stroke(255);
        // line(width/2,0,width/2,height);
        // line(0,height/2,width,height/2);
    }

    	function clearScreen() {
			p.clear();
			p.background(0);
		}

		function playsketch() {
            p.loop();
        }

        function pause() {
            p.noLoop();
        }
}

export default FourFoldSketch;