const timer = document.querySelector('#timer')
const startBtn = document.querySelector('#start-button')
const stopBtn = document.querySelector('#stop-button')
const resetBtn = document.querySelector('#reset-button')


let startTime 
let elapsedTime = 0
let timerInterval

function updateTime() {
  const now = new Date().getTime()
  const running = now - startTime + elapsedTime
  const milliSecs = Math.floor((running % 1000) /10)
  const seconds = Math.floor((running /1000) % 60)
  const minutes = Math.floor((running / 60000) % 60)
  const hours = Math.floor((running / 3600000)) 
  timer.textContent =  `${hours} : ${minutes} : ${seconds} : ${milliSecs}`
}


/*
startBtn.addEventListener('click', function (running) {
  if (!running) {

    let startTime = new Date().getTime()
    let tInerval = setInterval()
  }
}) */

startBtn.addEventListener('click', function () {
  if (!timerInterval) {

    startTime = new Date().getTime()
     timerInterval = setInterval(updateTime, 10)
  }
})


stopBtn.addEventListener('click', function () {

  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
    elapsedTime += new Date().getTime() - startTime

  }
})

resetBtn.addEventListener('click', function() {
  clearInterval(timerInterval)
  timerInterval = null
  elapsedTime = 0
  timer.textContent = "00:00:00:00"

})