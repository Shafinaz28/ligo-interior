function bindContact() {
    const form = document.getElementById("contact-form");
    const enquiry = document.getElementById("project-enquiry");
    const openBtns = document.querySelectorAll("[data-show-enquiry]");

    function showEnquiry() {
        if (!enquiry) {
            return;
        }
        enquiry.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(function () {
            const name = document.getElementById("contact-name");
            if (name) {
                name.focus();
            }
        }, 400);
    }

    openBtns.forEach(function (btn) {
        btn.addEventListener("click", showEnquiry);
    });

    if (window.location.hash === "#project-enquiry") {
        showEnquiry();
    }

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
        const whatsapp = document.getElementById("contact-whatsapp") && document.getElementById("contact-whatsapp").checked
            ? "Yes"
            : "No";
        const button = form.querySelector(".quote-submit");
        const send = window.sendLigoLead || function () { return Promise.resolve(false); };
        send({
            name: name,
            phone: phone,
            email: email,
            address: address,
            service: service,
            whatsapp: whatsapp,
            page: window.location.pathname
        }, button).then(function (ok) {
            if (ok) {
                form.reset();
            }
        });
    });
}

bindContact();
