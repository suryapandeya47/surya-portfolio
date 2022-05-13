

// submit form
let apiKey = "2b68e828-7f3c-428b-a2a0-6b0858daeb11";
let ourEmail = "bishalbaaniya@gmail.com";
let baseUrl = "https://api.elasticemail.com/v2/email/send";

$("#name, #email, #message, #subject").on("change", function () {
    if ($(this).val()) {
        $(this).css("border-bottom", "2px solid #e1e1e1")
    }
});
$("#email").on("blur", function () {
    if (!(validateEmail($(this).val()))) {
        $(this).css("border-bottom", "2px solid #ff0000")
    }
});

$('#contactForm').submit(function (e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    if (!name.value) {
        $("#name").css("border-bottom", "2px solid #ff0000")
    }
    if (!email.value || !validateEmail(email.value)) {
        $("#email").css("border-bottom", "2px solid #ff0000");
    }
    if (!subject.value) {
        $("#subject").css("border-bottom", "2px solid #ff0000")
    }
    if (!message.value) {
        $("#message").css("border-bottom", "2px solid #ff0000")
    }

    if (!name.value || !email.value || !message.value || !subject.value || !validateEmail(email.value)) {
        return false;
    } else {
        $.ajax({
            method: 'GET',
            url: baseUrl + "?apikey=" + apiKey + "&subject=" + subject.value +
                "&from=" + ourEmail + "&to=bishalbaaniya@gmail.com" +
                "&bodyHtml=" + "<strong>Name</strong>: "
                + name.value + "<br/><strong>Email: </strong>" + email.value +
                "<br/><strong>Message: </strong>" + message.value
        });
        e.preventDefault();
        $(this).get(0).reset();
        swal({
            title: "Success!",
            text: "Your message has been sent successfully",
            icon: "success",
            button: "OK",
        });
    }
});

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function submitForm(e) {
    e.preventDefault();
}

