let startTime, updatedTime, difference, tInterval
let running = false;


/*const INTERVAL_MS = 1000 / 60;
let timerID;
let start = 0
let milisBeforeLastStart = 0;*/

const timer = document.getElementById('timer')
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button')
const resetButton = document.querySelector('#reset-button');





const startTimerButton = function () {
  /*startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false; */

  if(!running) {



  startTime = new Date().getTime()
  tInterval = setInterval(updateTime, 10);/*INTERVAL_MS) */

  }
}


const stopTime = function() {

  if (running) { 
 clearInterval(tInterval)
 running = false;
 /*milisBeforeLastStart += Date.now() - start;*/
 
 }
}

const resetTime = function() {

  //resetButton.disabled = true
  
  clearInterval(tInterval)
  running = false;
  timer.textContent = "00:00:00";
  
}

const updateTime  =  function () {

  let updatedTime = new Date().getTime() 
  difference = updatedTime - startTime

  /*let milisSecs =  //Date.now() - start + milisBeforeLastStart;
  const secondsStop = milisStop / 1000;
  const minutesStop = milisStop / 60
*/

let milisSecs = Math.floor(difference % 1000) //Date.now() - start + milisBeforeLastStart;
let seconds = Math.floor((difference / 1000) % 60)
let minutes = Math.floor((difference / (1000 * 60)) % 60 )

 /* const milisText = formatNumber(milisStop % 1000, 3)
  const secondsText = formatNumber(Math.floor(secondsStop) % 60, 2)
  const minutesText = formatNumber(Math.floor(minutesStop), 2);*/

   milisSecs  = milisSecs < 100 ? "0" + milisSecs : milisSecs;
   seconds =   seconds  < 10 ? "0" + seconds : seconds; //ormatNumber(Math.floor(secondsStop) % 60, 2)
   minutes = minutes < 10 ? "0" + minutes : minutes;  //formatNumber(Math.floor(minutesStop), 2)

  timer.textContent = `${minutes} : ${seconds} : ${milisSecs}`
}

/* const formatNumber = function(number, desiredLength) {
  const stringNumber = String(number);
  if (stringNumber.length > desiredLength) {
    return stringNumber.slice(0, desiredLength)
  }

  return stringNumber.padStart(desiredLength, "0")
}*/





//addEventListeners

startButton.addEventListener('click', startTimerButton);
stopButton.addEventListener('click', stopTime)
resetButton.addEventListener('click', resetTime)
 