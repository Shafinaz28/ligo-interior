window.LIGO_SHEET_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

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

    const label = button ? button.innerHTML : "";
    if (button) {
        button.disabled = true;
        button.textContent = "Sending…";
    }

    return fetch(window.LIGO_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data)
    }).then(function () {
        return ligoSwal({
            icon: "success",
            title: "Quote sent",
            text: "Thank you. We will follow up with a range and a date to walk the scheme."
        }).then(function () {
            return true;
        });
    }).catch(function () {
        return ligoSwal({
            icon: "error",
            title: "Could not send",
            text: "Please try again or WhatsApp us."
        }).then(function () {
            return false;
        });
    }).then(function (ok) {
        if (button) {
            button.disabled = false;
            button.innerHTML = label;
        }
        return ok;
    });
};
