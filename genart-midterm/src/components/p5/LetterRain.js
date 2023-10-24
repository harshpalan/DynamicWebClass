function LetterRainSketch(p) {
    let ch = "The quick brown fox jumps over the lazy dog".split("");
    let rot = [];
    let ypos = [];
    let xpos = [];
    let yspeed = [];
    let textScale = [];
    // let rotAdd = 0;
    let dir = [];
    let cnv;
    let bgCol;
    p.setup = function() {
        cnv = p.createCanvas(500, 500); 
        cnv.mouseOver(playsketch);
        cnv.mouseOut(pause);
        p.textAlign(p.CENTER);
        p.angleMode(p.DEGREES);
        for (let i = 0; i < ch.length; i++) {
            textScale[i] = p.random(40, 80);
            xpos[i] = p.random(0, p.width);
            ypos[i] = p.random(-textScale[i], p.height);
            yspeed[i] = p.random(1, 5);
            rot[i] = p.int(p.random(-360, 360));
            dir[i] = p.int(p.random(2));
        }
        bgCol = p.color(p.random(0,255),p.random(0,255),p.random(0,255), 40);
        p.noLoop();
    }

    p.draw = function(){
        p.background(bgCol);
        for (let i = 0; i < ch.length; i++) {
            p.push();
            p.translate(xpos[i], yspeed[i] * ypos[i]);
            p.rotate(rot[i]);
            p.translate(-xpos[i], -yspeed[i] * ypos[i]);
            p.textSize(textScale[i]);
            p.text(ch[i], xpos[i], yspeed[i] * ypos[i]);
            ypos[i] = (ypos[i] + 1) % p.height;
            // console.log(dir[i]);
            if (dir[i] === 1) {
                rot[i] = rot[i] + 1;
            } else {
                rot[i] = rot[i] - 1;
            }
            p.pop();
        }
    }

    function playsketch() {
        p.loop();
    }

    function pause() {
        p.noLoop();
    }
}

export default LetterRainSketch;


        