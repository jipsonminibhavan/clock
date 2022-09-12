function digitalTime() {
  /* Objektklasse mit Daten (h ,min, sec) erstellen */
  const now = new Date();

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  /* Die "Zeit" wird dem div mit der document.getElementById-Methode zugeführt 
=> Zeit wird als Content vom div ausgegeben mit innerHTML*/

  document.getElementById("digitalclock").innerHTML =
    hour + ":" + min + ":" + sec;
  /*Um den Timer zu starten, wird die Methode setTimeout() verwendet/ 
  Funktion digitalTime()als erstes Argument/ Zeit als zweites Argument verwendet.*/
  let zeit = setTimeout(function () {
    digitalTime();
  }, 1000);
}
/*Stunden, Minuten und Sekunden werden einstellig angezeigt < 10 
/0 angehängen wenn sie kleiner als 10 sind, mit der Methode updateTime().*/
function updateTime(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}
digitalTime();

const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".minutes-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const current = new Date();

  // second hand rotation
  const seconds = current.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // minutes hand rotation
  const mins = current.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // hour rotation
  const hour = current.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000);

setClock();
