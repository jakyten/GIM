function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let s = second();
  if (s < 10) {
    s = "0" + s;
  }

  let m = minute();
  if (m < 10) {
    m = "0" + m;
  }

  let h = hour();
  if (h < 10) {
    h = "0" + h;
  }

  //const txt = h + ":" + m + ":" + s;
  const morseH = toMorse(h.toString());
  const morseM = toMorse(m.toString());
  const morseS = toMorse(s.toString());

  const morseTxt = morseH + ' ' + morseM + ' ' + morseS;

  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255);

  //text(txt, width / 2, height / 2 - 50);
  text(morseTxt, width / 2, height / 2 + 0);


  textFont('OPTIBodoni-Antiqua');
  textSize(16);
  fill('white');
  text("the INTERSTELLAR CLOCK", width / 2, height - 90);


  console.log("Morse H: " + morseH);
  console.log("Morse M: " + morseM); 
  console.log("Morse S: " + morseS); 



}



function toMorse(numStr) {
  const morseCode = {
    '0': '-----',
    '1': '·----',
    '2': '··---',
    '3': '···--',
    '4': '····-',
    '5': '·····',
    '6': '-····',
    '7': '--···',
    '8': '---··',
    '9': '----·'
    
    
  };

  let morse = '';
  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr.charAt(i);
    morse += morseCode[digit] + ' ';
  }
  return morse.trim();
}
