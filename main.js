const input = document.getElementById('input');

//create web audio api elements
const audioCtx = new AudioContext();
const gainNode = audioCtx.Ctx.createGain();

//create Oscillator node
const oscillator audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination)
oscillator.type = "sine";

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

}

function handle() {
    audioCtx.resume();
    gainNode.gain.value = 0;
    var usernotes = String(input.value);
    frequency(notenames.get(usernotes));
}

//set volume to 100%
gainNode.gain.setValueAtTime(100, audioCtx.currentTime);

//set frequency pitch to other paramater Oscillator
oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);

//set volume back down to 0% after one second
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1);