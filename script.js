let timerDisplay = document.querySelector(".timerDisplay");
let start = document.getElementById('str');
let stop = document.getElementById('stp');
let reset = document.getElementById('res');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

start.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId= setInterval(startTimer,10);

});

 stop.addEventListener('click',function(){
        clearInterval(timerId);

});
reset.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;

});

function startTimer(){
    msec++;
    if(msec==100){
        msec=00;
        secs++;
        if(secs==60){
            secs=00;
            mins++;
            
        }
    
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;

    let minsString = mins < 10 ? `0${mins}` : mins;

     timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`
    
}