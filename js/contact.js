function bindContact() {
    const form = document.getElementById("contact-form");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const address = document.getElementById("contact-address").value.trim();
        const service = document.getElementById("contact-service").value.trim();
        const body = encodeURIComponent(
            "Name: " + name +
            "\nPhone: " + phone +
            "\nEmail: " + email +
            "\nAddress: " + address +
            "\nService: " + service
        );
        window.location.href =
            "mailto:ligointerior@gmail.com?subject=" +
            encodeURIComponent("Interior cost estimate — " + service) +
            "&body=" + body;
    });
}

bindContact();
