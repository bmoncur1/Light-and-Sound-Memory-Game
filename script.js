// Global constants
const clueHoldTime = 500; // how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = getRandomNum();
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var numStrikes = 0;

// Generate a random number between 1 and 4.
function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  var myNum=[];
  for(var i = 0; i < 8; i++) {
    myNum[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return myNum;
}

function startGame(){
  //initialize game variables
  progress = 0;
  numStrikes = 0;
  gamePlaying = true;
  
  // Swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  // Swap the start and stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Light button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
// Clear button
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// Play a sequence of clues
function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // Player entered correct guess
  if (pattern[guessCounter] == btn) {
    
    // Player's turn is over
    if (guessCounter == progress){
      
      //Last turn for player signifying win
      if (progress == pattern.length - 1) {
        winGame()
       
      // Not player's last turn  
      }else {
        progress++
        playClueSequence()
      }
    //Player's turn is NOT over  
    }else{
      guessCounter++
    }
  // Player entered incorrect guess < 3 times
  }else{
      numStrikes = numStrikes + 1;
      alert("Strike " + numStrikes);
      playClueSequence();
  } 
  // Player entered incorrect guess > 3 times 
  if(numStrikes == 3){
        loseGame()
      }   
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game over. You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)