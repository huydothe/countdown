
function sleep(ms){
     return new Promise(resolve => setTimeout(resolve,ms));
}

async function countdown(inputNumber){
    while (inputNumber>0){
        document.getElementById("counter").innerHTML=inputNumber;
        inputNumber--;
       await sleep(1000);
    }
    return "counter finished"
}
let counter = countdown(10);
counter.then(function(data){
    document.getElementById("counter").innerHTML=data;
})

