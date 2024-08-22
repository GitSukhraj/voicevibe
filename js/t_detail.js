var basicInfo = document.getElementById("basic-info");
var details = document.getElementById("details");

basicInfo.onclick = function () {
    basicInfo.style.border = "1.5px solid rgb(187, 187, 187)";
    basicInfo.style.borderBottom = "none";
    details.style.border = "none";
    details.style.borderBottom = "1.5px solid rgb(187, 187, 187)";
};

details.onclick = function () {
    details.style.border = "1.5px solid rgb(187, 187, 187)";
    details.style.borderBottom = "none";
    basicInfo.style.border = "none";
    basicInfo.style.borderBottom = "1.5px solid rgb(187, 187, 187)";
};
