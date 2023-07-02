

var button = document.querySelectorAll(".drum");



for(var i=0;i<7;i++)
{
button[i].addEventListener("click",(event)=>{
    var but = event.target.innerHTML;
    makeSound(but);
    anim(but);
    


});

}

document.addEventListener('keyup',(event)=>{
    makeSound(event.key);
    anim(event.key);
})




makeSound =(but)=>{

    console.log(but);
    switch(but){
        case "w":
            var audio = new Audio("assets/sounds/tom-1.mp3");
            audio .play();
            break;

        case "a":
            var audio = new Audio("assets/sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("assets/sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio= new Audio("assets/sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio= new Audio("assets/sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("assets/sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("assets/sounds/kick-bass.mp3");
            audio.play();
            break;
            
        default:
            console.log(but);
    }




}

function anim(a){

    var activeButton = document.querySelector("."+a);
    activeButton.classList.add('press');
    setTimeout(()=>{
        activeButton.classList.remove('press')
    },100)

}