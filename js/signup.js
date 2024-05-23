document.addEventListener('DOMContentLoaded', function () {
    var confirmPasswordText = document.getElementById("confirmPassword");
    confirmPasswordText.addEventListener('input', checkPass);
})

function checkPass() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var notMatchLabel = document.getElementById("notMatch");

    if (password !== confirmPassword) {
        notMatchLabel.textContent = "Passwords are not matching!";
    } else {
        notMatchLabel.textContent = "";
    }
}
