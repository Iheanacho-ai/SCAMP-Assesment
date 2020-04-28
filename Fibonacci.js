let Fibonacci = function () { 
    let input = parseInt(document.querySelector("#term").value);
     let output = document.querySelector("#input");
     let answer = document.querySelector("h3");
     let array = [];
     if (input > 0 ){
     array[0] = 0;
     array[1] = 1;
 
     for (let i = 2; i <= input; i++) {
     array[i] = array[i - 1] + array[i - 2];   
 }
     }else if (input < 0){
         array = [];
     }
     else {
         array = [0];
     }

    let display = array.toString();
    output.value = display +".";
    answer.innerHTML = "The term "+ input +" of the Fibonaaci sequence is "+ Math.max(...array) +".";
    output.style.overflow = "scroll";
 }  