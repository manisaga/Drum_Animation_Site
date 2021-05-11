
var object = document.querySelectorAll("button");

function playAudio(name)
{
    var sourceFilePath = "sounds/";
    switch(name)
    {
        case "w":
            sourceFilePath+="tom-1.mp3";
        break
        case "a":
            sourceFilePath+="tom-2.mp3";
        break;
        case "s":
            sourceFilePath+="tom-3.mp3";
        break;
        case "d":
            sourceFilePath+="tom-4.mp3";
        break;
        case "j":
            sourceFilePath+="snare.mp3";
        break;
        case "k":
            sourceFilePath+="crash.mp3";
        break;
        case "l":
            sourceFilePath+="kick-bass.mp3";
        break;
        default:
            break;

    }
    var audio= new Audio(sourceFilePath);
    audio.play();
}

// add and remove animation by adding classes
function buttonAnimation(className)
{
    var activeButton = document.querySelector("."+className);
    activeButton.classList.add("pressed");
    var myVar = setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },1000);
}
//detecting button press
for(var i=0;i<object.length;i++)
    object[i].addEventListener("click",function() {
        var name=this.innerHTML;
        buttonAnimation(name);
        playAudio(name);
    });


//detecting the keydown pressed; keystrokes pressed
document.addEventListener("keydown",function(event)
{
    var name=event.key;
    console.log(name);
    buttonAnimation(name);
    playAudio(name);
});