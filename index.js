var tom1 = new Audio("sounds/tom-1.mp3")
var tom2 = new Audio("sounds/tom-2.mp3")
var tom3 = new Audio("sounds/tom-3.mp3")
var tom4 = new Audio("sounds/tom-4.mp3")
var snare = new Audio("sounds/snare.mp3")
var kickBass = new Audio("sounds/kick-bass.mp3")
var crash = new Audio("sounds/crash.mp3")

function makeSounds(key) {
  switch (key) {
    case "w":
      tom1.play()
      break

    case "a":
      tom2.play()
      break

    case "s":
      tom3.play()
      break

    case "d":
      tom4.play()
      break

    case "j":
      snare.play()
      break

    case "k":
      crash.play()
      break

    case "l":
      kickBass.play()
      break

    default:
      break
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed")

  setTimeout(function () { activeButton.classList.remove("pressed") }, 100)
}

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML
    makeSounds(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
  })
}

document.addEventListener("keydown", function (event) {
  var pressedKey = event.key
  makeSounds(pressedKey)
  buttonAnimation(pressedKey)
})