
let numberContent = document.querySelector('#numberContent');
    numberContent.innerHTML = 0;
    let number = 1;

    function numberAnimate(){
        numberContent.innerHTML = number;
        if (number >= 89){
            clearInterval(numberAnimateSet)
        }
        number++;
    }
    const numberAnimateSet = setInterval(numberAnimate, 20);
