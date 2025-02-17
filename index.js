var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML; // Get the button text
        playSound(buttonInnerHTML); // Call the function to play sound
        buttonAnimation(buttonInnerHTML); // Call the function to animate button
    });
}

document.addEventListener("keydown", function(e){
        playSound(e.key);
        buttonAnimation(e.key);
});

// Function to Play Sound Based on Button
function playSound(key) {
    var soundFile;
    
    switch (key) {
        case "w":
            soundFile = "sounds/tom-1.mp3";
            break;
        case "a":
            soundFile = "sounds/tom-2.mp3";
            break;
        case "s":
            soundFile = "sounds/tom-3.mp3";
            break;
        case "d":
            soundFile = "sounds/tom-4.mp3";
            break;
        case "j":
            soundFile = "sounds/snare.mp3";
            break;
        case "k":
            soundFile = "sounds/crash.mp3";
            break;
        case "l":
            soundFile = "sounds/kick-bass.mp3";
            break;
        default:
            return; // Do nothing if no valid key is found
    }

    var audio = new Audio(soundFile);
    audio.play();
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
