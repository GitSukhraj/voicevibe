var basicInfo = document.getElementById("basic-info");
var details = document.getElementById("details");
var basicText = document.getElementById("basic-content");
var detailText = document.getElementById("detail-content");

basicInfo.onclick = function () {
    basicInfo.style.border = "1.5px solid rgb(187, 187, 187)";
    basicInfo.style.borderBottom = "none";
    details.style.border = "none";
    details.style.borderBottom = "1.5px solid rgb(187, 187, 187)";
    detailText.style.display = "none";
    basicText.style.display = "block";
};

details.onclick = function () {
    details.style.border = "1.5px solid rgb(187, 187, 187)";
    details.style.borderBottom = "none";
    basicInfo.style.border = "none";
    basicInfo.style.borderBottom = "1.5px solid rgb(187, 187, 187)";
    basicText.style.display = "none";
    detailText.style.display = "block";
};
