 song="";
function setup() {
  song = loadSound('s.mp3');
}
function p() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
function view() {
    var x = document.getElementById("p");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function x(){
    window.location.href = "main.html"
  }