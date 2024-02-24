const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if(h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h<10 ? "0" + h : h;
  m = m<10 ? "0" + m : m;
  s = s<10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

const hEl = document.getElementById("hour");
const mEl = document.getElementById("minute");
const sEl = document.getElementById("second");

let pause = false;
let intervalId;

document.querySelector('.start').addEventListener('click', () => {
  if(!pause) {
    intervalId = setInterval(() => {
      updateStopWatch();
    }, 1000);

    pause = true;
    document.querySelector('.start').innerHTML = '<span>STOP</span>';
  }
  else if(pause) {
    clearInterval(intervalId);
    pause = false;
    document.querySelector('.start').innerHTML = '<span>START</span>';
  }
});

let s = 0, m = 0, h = 0;

function updateStopWatch() {
  s += 1;

  if(s===60) {
    s = 0;
    m += 1;
  }

  if(m === 60) {
    m = 0;
    h += 1;
  }
  
  hEl.innerText = h;
  mEl.innerText = m;
  sEl.innerText = s;
}

document.querySelector('.reset').addEventListener('click', () => {
  s = 0;
  h = 0;
  m = 0;

  hEl.innerText = h;
  mEl.innerText = m;
  sEl.innerText = s;
});

const btnEl = document.querySelector('.start');

btnEl.addEventListener('mouseover', (event) => {
  const x = (event.pageX - btnEl.offsetLeft);
  const y = (event.pageY - btnEl.offsetTop);

  btnEl.style.setProperty('--xPos', x + 'px');
  btnEl.style.setProperty('--yPos', y + 'px');
});

const resetbtnEl = document.querySelector('.reset');

resetbtnEl.addEventListener('mouseover', (event) => {
  const x = (event.pageX - resetbtnEl.offsetLeft);
  const y = (event.pageY - resetbtnEl.offsetTop);

  resetbtnEl.style.setProperty('--xPos', x + 'px');
  resetbtnEl.style.setProperty('--yPos', y + 'px');
});