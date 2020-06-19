function validate(){
    let a = document.getElementById("nam1");
    let b = document.getElementById("nam2");
    let c = document.getElementById("mail");
    let d = document.getElementById("pwd");
    let e = document.getElementById("cpwd");

    if (a.value == "" || b.value == "" || c.value == "" || d.value == "" || e.value == ""){
        alert("All fields are required");
        return false;
    }    
    else {
        return email();
    }

    function email() {
        let regex1 = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;

        if (regex1.test(c.value)) {
            return pass();
        } else {
            alert("Enter valid email address");
            return false;
        }
    }

    function pass() {
        let regex3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
        if (regex3.test(d.value)) {
            if (d.value == e.value) {
                alert("Your account has been created successfully")
                return true;
            } else {
                alert("Passwords do not match");
                return false;
            }
        } else {
            alert("Invalid password\n\nNote: Your password must contain atleast eight characters and include an uppercase letter, a lowercase letter and a number");
            return false;
        }
    }
    
}