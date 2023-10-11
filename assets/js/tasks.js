function getDate(){
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    return today.toLocaleDateString("en-US", options);
}

function getCurrentDay(){
    let options = {weekday: 'long'};
    let day  = new Date();
    return day.toLocaleDateString("en-US", options);
}

function getCurrentTime(){
    let currenttime = new Date(); 

    let hour = currenttime.getHours();
    let hour_12 = hour % 12;

    let format = hour > 12 ? "PM" : "AM";

    var time = `its ${hour_12} , ${currenttime.getMinutes()} ${format} `;

    return time;
}

let browser = [];

function openGoogle(){
    browser.push(window.open("https://google.com"));
}

function closeGoogle(){
    let lastBrowser = browser.length - 1;
    browser[lastBrowser].close();
    browser.splice(-1);
}

function searchOnGoogle(search){
    browser.push(window.open(`https://www.google.com/search?q=${search}`));
}