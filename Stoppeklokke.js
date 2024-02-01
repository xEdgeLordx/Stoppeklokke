seconds = 0;
const disp = document.getElementById('display');
const runde = document.getElementById('runde');
function Start(){
    setInterval(countsec, 1000);
}
function countsec(){
disp.innerHTML = seconds;
seconds ++;}
function stop(){
    runde.innerHTML += `<li>${seconds -1}</li>`
seconds = 0;
}
function reset(){
location.reload()

}
