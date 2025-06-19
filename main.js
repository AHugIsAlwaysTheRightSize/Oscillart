const input = document.getElementById('input');

//create web audio api elements
const audioCtx = new AudioContext();
const gainNode = audioCtx.Ctx.createGain();

//create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination)
oscillator.type = "sine";

//define canvas variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var amplitude = 40;
var interval = null;
var reset = false;

var timepernote = 0;
var length = 0;

oscillator.start();
gainNode.gain.value = 0;

notenames =new Map();
mapName.set("C", 261.6);
mapName.set("D", 293.7);
mapName.set("E", 329.6);
mapName.set("F", 349.2);
mapName.set("G", 392.0);
mapName.set("A", 440.0);
mapName.set("B", 493.9);



function frequency(pitch) {
//set volume to 100%
gainNode.gain.setValueAtTime(100, audioCtx.currentTime);

//set frequency pitch to other paramater Oscillator
oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);

//set volume back down to 0% after one second
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + (timpernote/1000) - 0.1);
}

function handle() {
    reset = true;
    var usernotes = String(input.value);
    var noteslist = []
    for ( i = 0; i < usernotes.length; i++) {
        noteslist.push(notenames.get(usernotes.charAt(i)))
    }
    length = usernotes.length;
    timepernote = (6000/length)

    let j = 0;
        repeat = setInterval(() => {
            if (j < noteslist.length) {
                frequency(parseInt(noteslist[j]));
                drawWave();
            j++
            }
            else {
                clearInterval(repeat)
            }

        }, timepernote)

    audioCtx.resume();
    gainNode.gain.value = 0;
    drawWave(frequency);
}

var counter = 0;

function drawWave() {
    clearInterval(interval);
    if(reset){
        ctx.clearRect(0, 0, width, height);
        x = 0;
        y = height/2;
        ctx.moveTo(x, y);
        ctx.beginPath
    }
    counter = 0;
    interval = setInterval(line, 20);
    
}

function line() {
    freq = pitch / 10000;
    y = height/2 + amplitude * Math.sin(x * 2 * Math.PI * freq * (.05 * length));
    ctx.lineTo(x, y);
    ctx.stroke();
    x = x + 1;
    counter++;
    if(counter > (timepernote/20)) {
        clearInterval(interval);
    }
}


