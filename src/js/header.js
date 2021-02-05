let h1 = document.createElement("h1");
    h1.innerHTML= "To do list";
    h1.style.color = "#CD6155";
    h1.style.textAlign= "center";
    h1.style.fontSize= "3em"

let dateElement= document.createElement("p");

let monthArray = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var date=new Date();

    dateElement.innerHTML= days[date.getDay()] + ", " + date.getDate() + " of " + monthArray[date.getMonth()] + " of " + date.getFullYear();
    dateElement.style.textAlign= "center";
    dateElement.style.fontSize= "2em"
    dateElement.style.color="#808B96"


export let header = document.getElementById("app").appendChild(h1);
export let dateHeader = document.getElementById("app").appendChild(dateElement);
