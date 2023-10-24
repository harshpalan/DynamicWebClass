function SpiralSketch(p){//Creating a circular pattern which feels like a hand drawn with makers
    let t = 0;

    let rot = 180;

    let alpha = 0.4;
    let csize = 30;
    let cnv;

    p.setup = function () {
        cnv = p.createCanvas(500, 500); 
        cnv.mouseOver(playsketch);
        cnv.mouseOut(pause);
        cnv.mouseClicked(clearScreen);
        p.colorMode(p.HSB);
        p.angleMode(p.DEGREES);
        p.background(10);
        p.noLoop();
    }

    p.draw = function () {
        // noStroke();
        p.noFill();

        //creating a hue shift color with Modulo
        // fill(frameCount % 360, 75, 100,alpha);
        p.stroke(p.frameCount % 360, 50, 80, alpha);
        p.strokeWeight(2);

        p.translate(p.width / 2, p.height / 2);

        //creating 6 Fold symmetry - 360/60 = 6. (to change other change 60 to 20(18 Fold),30(12 Fold),40(9 Fold),90(4 Fold),120(3 Fold))
        for (var j = 0; j < 360; j += 40) {
            p.push();
            p.scale(t / 2);
            p.rotate(rot);
            p.rotate(j);
            p.translate(0, csize + 70);
            p.rotate(-rot)
            p.line(0, 0, csize + 20, csize);
            p.pop();
        }

        rot = rot + p.random(-5, 5); // adding randomness to create variation

        t = (t + 0.005)%5;
    }

    function clearScreen() {
        //Press delete to clear canvas and reset
            p.clear();
            p.background(10);
            t = 0.15;
    }

    function playsketch() {
        p.loop();
    }

    function pause() {
        p.noLoop();
    }
}



export default SpiralSketch;