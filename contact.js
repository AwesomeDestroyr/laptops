function check() {
    var name = document.getElementById("Name").value;     
var email = document.getElementById("Email").value; 
var text = document.getElementById("text").value;
    if (name == " " && email == " " && text == " ") {
        alert("Please fill the form");
    }


}   