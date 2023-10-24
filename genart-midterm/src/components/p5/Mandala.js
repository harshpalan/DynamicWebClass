function MandalaSketch(p) {
    let rot = 0;
    let cnv;

    p.setup = function () {
        cnv = p.createCanvas(500, 500); 
        cnv.mouseOver(playsketch);
        cnv.mouseOut(pause);
        p.colorMode(p.HSB);
        p.angleMode(p.DEGREES);
        p.background(30);
        p.noLoop();
    }

    p.draw = function () {
        p.translate(p.width / 2, p.height / 2);
        // strokeWeight(20);
        p.fill(25, 30, 100);
        p.circle(0, 0, 750); // base circle
        // p.rotate(p.mouseX / 10);
        p.rotate(rot) //rotate whole design
        p.scale(0.55);
        p.noStroke();
        //Inner circles - golden color
        for (var m1 = 0; m1 <= 360; m1 += 40) {
            p.push();
            p.rotate(m1);
            p.beginShape();
            p.translate(0, 210);
            p.fill(35, 80, 90);
            p.circle(0, 0, 30)
            p.pop();
        }

        //Circles on the tip
        for (var m2 = 0; m2 <= 360; m2 += 40) {
            p.push();
            p.rotate(20);
            p.rotate(m2);
            p.beginShape();
            p.translate(0, 295);
            p.fill(42, 100, 100);
            p.circle(0, 0, 25)
            p.pop();
        }

        //Outer most layer of petals
        for (var m = 0; m <= 360; m += 40) {
            p.push();
            p.rotate(20);
            p.rotate(m);
            p.beginShape();
            p.translate(0, 70);
            p.fill(42, 100, 100);
            p.scale(3);
            p.vertex(0, 70);
            p.quadraticVertex(-42, 0, 0, 0);
            p.quadraticVertex(42, 0, 0, 70);
            p.endShape(p.CLOSE);
            p.pop();
        }

        //second layer of petals
        for (var l = 0; l <= 360; l += 40) {
            p.push();
            p.rotate(20);
            p.rotate(l);
            p.beginShape();
            p.translate(0, 70);
            p.fill(35, 95, 97);
            p.scale(2);
            p.vertex(0, 70);
            p.quadraticVertex(-42, 0, 0, 0);
            p.quadraticVertex(42, 0, 0, 70);
            p.endShape(p.CLOSE);
            p.pop();
        }


        //third layer of petals
        for (var k = 0; k <= 360; k += 40) {
            p.push();
            p.rotate(20);
            p.rotate(k);
            p.beginShape();
            p.translate(0, 40);
            p.fill(29, 40, 97);
            p.scale(1.5);
            p.vertex(0, 70);
            p.quadraticVertex(-42, 0, 0, 0);
            p.quadraticVertex(42, 0, 0, 70);
            p.endShape(p.CLOSE);
            p.pop();
        }

        //fourth layer of petals - inner most
        for (var i = 0; i <= 360; i += 40) {
            p.push();
            p.rotate(20)
            p.rotate(i);
            p.beginShape();
            p.translate(0, 30);
            p.fill(29, 20, 97);
            p.scale(1);
            p.vertex(0, 70);
            p.quadraticVertex(-42, 0, 0, 0);
            p.quadraticVertex(42, 0, 0, 70);
            p.endShape(p.CLOSE);
            p.pop();
        }

        //center circle
        // strokeWeight(2);
        p.fill(10, 88, 100);
        p.circle(0, 0, 80)

        rot = rot + 0.5;
    }

    function playsketch() {
        p.loop();
    }

    function pause() {
        p.noLoop();
    }
}

export default MandalaSketch;