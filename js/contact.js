function bindContact() {
    const form = document.getElementById("contact-form");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();
        const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
        window.location.href = "mailto:ligointerior@gmail.com?subject=" + encodeURIComponent("Interior cost estimate") + "&body=" + body;
    });
}

bindContact();
