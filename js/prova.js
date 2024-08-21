var btn1 = document.getElementById("btn1");
var par1 = document.querySelector(".p1");

var btn2 = document.getElementById("btn2");
var par2 = document.querySelector(".p2");

btn1.onclick = function () {
    console.log("btn 1 clicked");
    par1.style.display = "block";
    par2.style.display = "none";
}


btn2.onclick = function () {
    console.log("btn 2 clicked");
    par1.style.display = "none";
    par2.style.display = "block";
}