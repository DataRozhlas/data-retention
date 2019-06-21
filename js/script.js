import byeIE from "./byeie";

byeIE();

// player
let stopInt = null;
function playPart(start, stop) {
  clearInterval(stopInt);
  const audio = document.getElementById("liceni");
  audio.pause();
  audio.currentTime = start;
  audio.play();
  stopInt = setInterval(() => {
    if (audio.currentTime > stop) {
      clearInterval(stopInt);
      audio.pause();
    }
  }, 1000);
}

function parseTime(v) {
  const vs = v.split(":");
  return (parseInt(vs[0], 0) * 60 * 60) + (parseInt(vs[1], 0) * 60) + parseInt(vs[2], 0);
}

// player bindings
const players = document.getElementsByClassName("play");
for (let i = 0; i < players.length; i++) {
  players[i].textContent += " 🔈";
  const ststo = players[i].className.split(" ");
  players[i].addEventListener("click", () => playPart(parseTime(ststo[1]), parseTime(ststo[2])));
}
document.getElementById("liceni").addEventListener("pause", () => clearInterval(stopInt));
