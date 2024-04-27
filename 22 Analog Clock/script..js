let hr = document.querySelector("#hour");
let min = document.querySelector("#minut");
let sec = document.querySelector("#second");

function displayTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30*hours + minutes/2;
    let minRotation = 6*minutes;
    // console.log(minRotation);
    let secRotation = 6*seconds;


    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000);