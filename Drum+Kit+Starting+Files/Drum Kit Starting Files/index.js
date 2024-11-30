//detect button press
for (var n=0; n<document.querySelectorAll(".drum").length; n++)
{ 
    document.querySelectorAll(".drum")[n].addEventListener("click", function () {
       var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
});
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
       }
    }

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}

    /*
function handleClick () {
    var audio = new Audio ("./sounds/tom-1.mp3");
    audio.play();
}
    }

function playSound = (fileName) => {
    const audio = new Audio();
    audio.src = fileName;
    audio.play();
  };*/