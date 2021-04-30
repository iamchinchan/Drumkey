var drum_count = document.querySelectorAll(".drum").length;


for (var i = 0; i < drum_count; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var drum_type = this.innerHTML;
    play_sound(drum_type);
    buttonAnimation(drum_type);
  });

}

document.addEventListener("keydown", function (event) {
  var drum_type=event.key;
  play_sound(drum_type);
  buttonAnimation(drum_type);
});

// var audio = new Audio("sounds/snare.mp3");
//   audio.play();
function play_sound(drum_type) {
  switch (drum_type) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("this.innerHTML");
      break;
  }
}

function buttonAnimation(pressedkey){
  var activeButton = document.querySelector("."+pressedkey);
  // console.log(activeButton);
  activeButton.classList.add("pressed");
  // 
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}