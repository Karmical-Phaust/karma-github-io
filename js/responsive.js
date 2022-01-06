function responsive() {

    var x = document.getElementById("repnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

}

$(document).on("click", function(event) {
    var $trigger = $(".navbar");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".navbar").toggleClass('responsive');
    }
});