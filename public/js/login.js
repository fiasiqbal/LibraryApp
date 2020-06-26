function validateForm(){
    let x = document.getElementById("mail");
    let y = document.getElementById("pwd");
    if (x.value == "" || y.value == ""){
        alert("Empty field");
        return false;
    } else {
        return email();
    }

    function email() {
        let regex1 = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;

        if (regex1.test(x.value)) {
            return pass();
        } else {
            alert("Enter valid email address");
            return false;
        }
    }

    function pass() {
        if (y.value.length<8) {
            alert("Enter valid password");
            return false;
        }
        else {
            // alert("You are now logged in")
            return true;
        }
    }
}