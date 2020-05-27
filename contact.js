function check() {
    console.log ("hello");
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var text = document.getElementById('text').value;
    if (name == "" || email == "") {
        alert("Please fill the form");
    }


}