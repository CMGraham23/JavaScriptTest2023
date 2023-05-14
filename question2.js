var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "||";
  } else {
    video.pause();
    btn.innerHTML = ">";
  }
}

function advance() {
    video.currentTime += 25;
  }
  
  function backward() {
    video.currentTime -= 10;
  }
  
  


//progress__filled element to represent the progress of the video.
var video = document.getElementById("myVideo");
var progressBar = document.getElementById("progressBar");


video.addEventListener("timeupdate", function() {
    var progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    });


//volume controller bar


var myvolume = document.getElementById("myvolume");


myvolume.oninput = function() {
    changeVolume(); 
}

function changeVolume() {
    video.muted = false;
    video.volume = myvolume.value/100;
    if (myvolume.value == 0) {
        video.muted = true;
    }   
}













  









