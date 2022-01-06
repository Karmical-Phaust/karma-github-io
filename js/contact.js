function checkname() {
    var yname = document.getElementById("yname").value;
    var yemail = document.getElementById("yemail").value;
    var subj = document.getElementById("subj").value;
    var mess = document.getElementById("mess").value;

    document.getElementById("yname").setCustomValidity("");
    if (yname == '') {
        document.getElementById("yname").setCustomValidity("Please fill out your name");
    } else if (yname.length > 100) {
        document.getElementById("yname").setCustomValidity("Your name should not exceed 100 characters");
    }

    document.getElementById("yemail").setCustomValidity("");
    if (yemail == '') {
        document.getElementById("yemail").setCustomValidity("Please fill out your email");
    } else if (yemail.length > 100) {
        document.getElementById("yemail").setCustomValidity("Your email should not exceed 100 characters");
    }

    document.getElementById("subj").setCustomValidity("");
    if (subj == '') {
        document.getElementById("subj").setCustomValidity("Please fill out the subject");
    } else if (subj.length < 50) {
        document.getElementById("subj").setCustomValidity("Subject should not shorter than 50 characters");
    } else if (subj.length > 250) {
        document.getElementById("subj").setCustomValidity("Subject should not exceed 250 characters");
    }

    document.getElementById("mess").setCustomValidity("");
    if (mess == '') {
        document.getElementById("mess").setCustomValidity("Please fill out the message");
    } else if (mess.length > 500) {
        document.getElementById("mess").setCustomValidity("Message should not exceed 500 characters");
    }

}