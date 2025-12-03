function generateText() {

    var name = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var lang = document.getElementById("lang").value;

    var eduArr = document.getElementsByName("edu");
    var edu = [];
    for (var i = 0; i < eduArr.length; i++) {
        if (eduArr[i].checked) {
            edu.push(eduArr[i].value);
        }
    }

    var expArr = document.getElementsByName("exp");
    var exp = "";
    for (var i = 0; i < expArr.length; i++) {
        if (expArr[i].checked) {
            exp = expArr[i].value;
            break;
        }
    }

    var alertMsg = "";

    if (name == "") alertMsg += "Please enter your name.\n";
    if (phone == "") alertMsg += "Please enter your phone.\n";
    if (email == "") alertMsg += "Please enter your email.\n";
    if (msg == "") alertMsg += "Please enter your message.\n";
    if (lang == "") alertMsg += "Please select a machine.\n";
    if (edu.length == 0) alertMsg += "Please select education.\n";
    if (exp == "") alertMsg += "Please select experience.\n";

    if (alertMsg != "") {
        document.getElementById("res").innerHTML = "";
        alert(alertMsg);
        return false;
    }

    var output = "Hello " + name + "!<br>";
    output += "Phone: " + phone + "<br>";
    output += "Email: " + email + "<br>";
    output += "Machine: " + lang + "<br>";
    output += "Message: " + msg + "<br>";
    output += "Education: " + edu.join(", ") + "<br>";
    output += "Experience: " + exp + "<br>";

    document.getElementById("res").innerHTML = output;

    return false;
}

function clearForm() {
    document.getElementById("fname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("lang").value = "";

    var eduArr = document.getElementsByName("edu");
    for (var i = 0; i < eduArr.length; i++) {
        eduArr[i].checked = false;
    }

    var expArr = document.getElementsByName("exp");
    for (var i = 0; i < expArr.length; i++) {
        expArr[i].checked = false;
    }

    document.getElementById("res").innerHTML = "";
}