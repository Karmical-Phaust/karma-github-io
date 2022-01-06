const dateObj = new Date();
const month = String(dateObj.getMonth() + 1).padStart(2, '0');
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = month + '/' + day + '/' + year;
const nd = new Date(output)

function checkif() {
    var sev = document.getElementById("servers").value;
    var yname = document.getElementById("yname").value;
    var yemail = document.getElementById("yemail").value;
    var appl = document.getElementById("appl").value;
    var dt = document.getElementById("date").value;
    const date = new Date(dt);

    document.getElementById("servers").setCustomValidity("");
    switch (sev) {
        case "":
            document.getElementById("servers").setCustomValidity("Please select a server");
            break;
        case "Discord - activated by Norse":
        case "Minecraft - activated by Crack":
        case "I/O - activated by Regista/ASGARD":
        case "Babylon - activated by Marduk":
            document.getElementById("servers").setCustomValidity("");
            break;
        default:
            document.getElementById("servers").setCustomValidity("Please select a validated server");
            break;
    }

    document.getElementById("yname").setCustomValidity("");
    if (yname == '') {
        document.getElementById("yname").setCustomValidity("Please fill out your name");
    } else if (yname.length > 100) {
        document.getElementById("yname").setCustomValidity("Your name should not exceed 100 characters");
    }

    document.getElementById("yemail").setCustomValidity("");
    if (yemail == '') {
        document.getElementById("yemail").setCustomValidity("Please enter your email for contact");
    } else if (yemail.length > 100) {
        document.getElementById("yemail").setCustomValidity("Your email should not exceed 100 characters");
    }

    document.getElementById("appl").setCustomValidity("");
    if (appl.length > 500) {
        document.getElementById("appl").setCustomValidity("Application should not exceed 500 characters");
    }

    document.getElementById("date").setCustomValidity("");
    if (dt == "") {
        document.getElementById("date").setCustomValidity("Please choose the enroll date");
    } else if (date < nd) {
        document.getElementById("date").setCustomValidity("Please select enroll date from today");
    }
}