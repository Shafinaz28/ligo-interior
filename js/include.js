(function showLoader() {
    let loader = document.getElementById("site-loader");
    if (!loader) {
        loader = document.createElement("div");
        loader.id = "site-loader";
        loader.className = "site-loader";
        loader.innerHTML =
            '<div class="site-loader-inner">' +
            '<img class="logo-horizontal invert" src="images/logo.png" alt="">' +
            '<div class="site-loader-bar"><span></span></div>' +
            "</div>";
        document.documentElement.appendChild(loader);
    }

    function hideLoader() {
        if (!loader || loader.classList.contains("is-done")) {
            return;
        }
        loader.classList.add("is-done");
        window.setTimeout(function () {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }

    window.addEventListener("load", function () {
        window.setTimeout(hideLoader, 500);
    });
    window.setTimeout(hideLoader, 4000);
})();

function mountQuoteModal(modal) {
    if (!modal) {
        return null;
    }
    if (document.body && modal.parentElement !== document.body) {
        document.body.appendChild(modal);
    }
    return modal;
}

function getQuoteModal() {
    return document.getElementById("quote-modal");
}

function openQuoteModal(service) {
    const modal = getQuoteModal();
    if (!modal) {
        loadQuoteModal().then(function () {
            if (getQuoteModal()) {
                openQuoteModal(service);
            }
        });
        return;
    }
    mountQuoteModal(modal);
    const select = document.getElementById("quote-service");
    if (select) {
        select.value = service || "";
    }
    modal.hidden = false;
    modal.classList.add("is-open");
    document.documentElement.classList.add("quote-open");
}

function closeQuoteModal() {
    const modal = getQuoteModal();
    if (!modal) {
        return;
    }
    modal.classList.remove("is-open");
    modal.hidden = true;
    document.documentElement.classList.remove("quote-open");
}

document.addEventListener("click", function (event) {
    const openBtn = event.target.closest("[data-quote-open]");
    if (openBtn) {
        event.preventDefault();
        openQuoteModal(openBtn.getAttribute("data-quote-service"));
        return;
    }

    const modal = getQuoteModal();
    if (!modal || !modal.classList.contains("is-open")) {
        return;
    }
    if (event.target === modal || event.target.closest("[data-quote-close]")) {
        closeQuoteModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeQuoteModal();
    }
});

document.addEventListener("submit", function (event) {
    if (event.target.id !== "quote-form") {
        return;
    }
    event.preventDefault();
    const name = document.getElementById("quote-name").value.trim();
    const phone = document.getElementById("quote-phone").value.trim();
    const email = document.getElementById("quote-email").value.trim();
    const address = document.getElementById("quote-address").value.trim();
    const service = (document.getElementById("quote-service") || {}).value || "";
    if (!service) {
        window.alert("Please select a service.");
        return;
    }
    const whatsapp = document.getElementById("quote-whatsapp") && document.getElementById("quote-whatsapp").checked
        ? "Yes"
        : "No";
    const body = encodeURIComponent(
        "Name: " + name +
        "\nPhone: " + phone +
        "\nEmail: " + email +
        "\nAddress: " + address +
        "\nService: " + service +
        "\nWhatsApp estimate: " + whatsapp
    );
    window.location.href =
        "mailto:ligointerior@gmail.com?subject=" +
        encodeURIComponent("Interior cost estimate — " + service) +
        "&body=" + body;
});

async function loadPartial(id, url) {
    const host = document.getElementById(id);
    if (!host || host.querySelector("header, .site-footer")) {
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return;
        }
        host.innerHTML = await response.text();
    } catch (error) {
        return;
    }
}

async function loadQuoteModal() {
    try {
        if (getQuoteModal()) {
            mountQuoteModal(getQuoteModal());
            return;
        }

        const response = await fetch("header/quote-modal.html?v=8");
        if (!response.ok) {
            return;
        }
        const wrap = document.createElement("div");
        wrap.innerHTML = (await response.text()).trim();
        mountQuoteModal(wrap.querySelector("#quote-modal"));
    } catch (error) {
        return;
    }
}

async function loadSiteChrome() {
    await Promise.allSettled([
        loadPartial("site-header", "header/header.html?v=18"),
        loadPartial("site-footer", "footer/footer.html?v=7"),
        loadQuoteModal()
    ]);

    const headerScript = document.createElement("script");
    headerScript.src = "header/header.js?v=13";
    document.body.appendChild(headerScript);

    const pageName = (window.location.pathname.split("/").pop() || "index.html").toLowerCase().replace(/\.html$/, "") || "index";
    const page = (pageName === "upcoming-project" || pageName === "upcoming-study") ? "projects" : pageName;
    document.querySelectorAll("#main-nav a.nav-link").forEach(function (link) {
        const href = (link.getAttribute("href") || "").toLowerCase().split(/[?#]/)[0].replace(/\.html$/, "") || "index";
        const current = href === page;
        link.classList.toggle("is-current", current);
        if (current) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

loadSiteChrome().then(function () {
    return loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js");
}).then(function () {
    return loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js");
}).then(function () {
    return loadScript("js/animate.js?v=3");
});
