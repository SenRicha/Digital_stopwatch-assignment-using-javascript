function showTime(){
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds()
    var session = "AM";
    if(h==0){
        h =12
    }
    if(h>12){
        h = h-12
        session = "PM";
    }
   h = (h<10) ? "0" + h : h;
   m = (m<10) ? "0" + m: m;
   s = (s<10)?  "0" + s: s;


    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;
    setTimeout(showTime,1000)
}
showTime()

var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('startTimer');
var reset = document.getElementById('resetTimer');
var stop = document.getElementById('stopTimer');
var interval; //to store timer values

//this function will run when click on start

function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    
}
function start_button(){
    interval = setInterval(startTimer)
}
function stop_button(){
    clearInterval(interval)
}
function reset_button(){
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;

}