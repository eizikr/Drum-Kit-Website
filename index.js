var len = document.querySelectorAll("button").length;
var soundURLS = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3"
    ];

// Click sound
for(var i = 0 ; i < len ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonKey = this.innerHTML;
        makeSound(buttonKey);
        buttonAnimation(buttonKey);
    });
}

// Keyboard sound
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Make sound
function makeSound(buttonKey){
    switch (buttonKey) {
        case "w":
            new Audio(soundURLS[0]).play();
            break;
            
        case "a":
            new Audio(soundURLS[1]).play();
            break;
            
        case "s":
            new Audio(soundURLS[2]).play();
            break;
         
        case "d":
            new Audio(soundURLS[3]).play();
            break;
                    
        case "j":
            new Audio(soundURLS[4]).play();
            break;
                        
        case "k":
            new Audio(soundURLS[5]).play();
            break;
                          
        case "l":
            new Audio(soundURLS[6]).play();
            break;

        default:
            console.log(buttonKey);
            break;
    }
}
                                
    // var soundTest = new Audio("sounds/tom-1.mp3");
    // soundTest.play();
                                
function buttonAnimation(buttonKey){
    var key = document.querySelector("."+buttonKey);
    //Add class to element
    key.classList.add("pressed");
    //Delay of 1 sec
    setTimeout(function(){key.classList.remove("pressed");} , 100);
    
}