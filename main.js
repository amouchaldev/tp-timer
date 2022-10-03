const hour    = document.getElementById('hour'),
      minute  = document.getElementById('minute'),
      second  = document.getElementById('second');
let currentDate = new Date("2022-06-18 00:00:57");
let incrementInterval;
setTime();
function increment() {
    currentDate.setSeconds(currentDate.getSeconds() + 1)
    setTime()
}
function decrement() {
    currentDate.setSeconds(currentDate.getSeconds() - 1)
    setTime()
}
document.getElementById("increment").addEventListener('click', () =>  {
    clearInterval(incrementInterval)
    incrementInterval = setInterval(increment, 1000)
})
document.getElementById("decrement").addEventListener('click', () =>  {
    clearInterval(incrementInterval)
    incrementInterval = setInterval(decrement, 1000)
})
document.getElementById("stop").addEventListener('click', () => clearInterval(incrementInterval))

function setTime() {
    hour.innerHTML = String(currentDate.getHours()).length == 1 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`
    minute.innerHTML = String(currentDate.getMinutes()).length == 1 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`
    second.innerHTML = String(currentDate.getSeconds()).length == 1 ? `0${currentDate.getSeconds()}` : `${currentDate.getSeconds()}`
}