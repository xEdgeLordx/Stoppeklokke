seconds = 0;
const disp = document.getElementById('display');
const runde = document.getElementById('runde');

number = 0;
let myTimer;
function StartTimer(){
    myTimer = setInterval(countseconds, 1000)
}
function countseconds(){
    number++;
    disp.innerHTML = number;
}
function PauseTimer(){
    clearInterval(myTimer);
}
function Lap(){
    runde.innerHTML += /*html*/`
    <li>${number}</li>
    `
}
function ResetStopWatch(){
    clearInterval(myTimer);
    disp.innerHTML = "0";
    runde.innerHTML = "Rundetid:"
}
function Reload(){
    location.reload();

}
