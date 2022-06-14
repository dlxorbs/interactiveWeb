

const section2 = document.querySelector(".main_two")
const section3 = document.querySelector(".main_three")
const carbon = document.querySelector(".carbon")

const PCDESK = document.querySelector(".PCDESK")




const interact = function(){

    
    const sec2Top = section2.getBoundingClientRect().top;
    const sec2Bottom = section2.getBoundingClientRect().bottom;

    if(sec2Top+400 <= window.innerHeight && sec2Bottom > 400){

        carbon.style.opacity = "1"

    }
    else{
    
        carbon.style.opacity = "0"
     
    }

}


const move = function(){
    const sec3Top = section3.getBoundingClientRect().top;
    const sec3Bottom = section3.getBoundingClientRect().bottom;

    if(sec3Top +500 <= window.innerHeight && sec3Bottom > 800 ){

        PCDESK.style.animation = `fadein 0.5s 1s both`;
    }
    else{
    
        PCDESK.style.animation = `fadeout 0.5s 1s both`;
     
    }
}


interact()
move()
document.addEventListener("scroll", function () {
    interact()
    move()
  })