window.LIGO_SHEET_URL = "https://script.google.com/macros/s/AKfycbz4N76MUS7OiF4cJCCNAaw7oCUlK4NynXQQIQF-990NwmIRef1oQAe5t2iCnVXO46g/exec";

function ligoSwal(options) {
    if (window.Swal && typeof window.Swal.fire === "function") {
        return window.Swal.fire(Object.assign({
            confirmButtonColor: "#e0aa3e",
            background: "#fcfaf6",
            color: "#2d2d2d"
        }, options));
    }
    window.alert(options.title + (options.text ? "\n" + options.text : ""));
    return Promise.resolve();
}

window.sendLigoLead = function (data, button) {
    if (!data.service) {
        return ligoSwal({
            icon: "warning",
            title: "Select a service",
            text: "Please choose a service before submitting."
        }).then(function () {
            return false;
        });
    }

    if (!window.LIGO_SHEET_URL || window.LIGO_SHEET_URL.indexOf("YOUR_SCRIPT_ID") !== -1) {
        return ligoSwal({
            icon: "info",
            title: "Sheet not connected yet",
            text: "Paste your Apps Script web-app URL into js/sheet-form.js (LIGO_SHEET_URL)."
        }).then(function () {
            return false;
        });
    }

    const payload = JSON.stringify(data);
    fetch(window.LIGO_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: payload
    });

    if (button) {
        button.disabled = false;
    }

    return ligoSwal({
        icon: "success",
        title: "Quote sent",
        text: "Thank you. We will follow up with a range and a date to walk the scheme."
    }).then(function () {
        return true;
    });
};
