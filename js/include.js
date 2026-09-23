function mountQuoteModal(modal) {
    if (!modal) {
        return null;
    }
    document.documentElement.appendChild(modal);
    return modal;
}

function getQuoteModal() {
    return document.getElementById("quote-modal");
}

function openQuoteModal(service) {
    const modal = getQuoteModal();
    if (!modal) {
        return;
    }
    mountQuoteModal(modal);
    const select = document.getElementById("quote-service");
    if (service && select) {
        select.value = service;
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
    const service = document.getElementById("quote-service").value.trim();
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

        const response = await fetch("header/quote-modal.html?v=1");
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
        loadPartial("site-header", "header/header.html?v=12"),
        loadPartial("site-footer", "footer/footer.html?v=5"),
        loadQuoteModal()
    ]);

    const headerScript = document.createElement("script");
    headerScript.src = "header/header.js?v=10";
    document.body.appendChild(headerScript);

    const page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase().replace(/\.html$/, "") || "index";
    document.querySelectorAll("#main-nav a").forEach(function (link) {
        const href = (link.getAttribute("href") || "").toLowerCase().split("#")[0].replace(/\.html$/, "") || "index";
        if (href === page) {
            link.classList.remove("text-ink/70");
            link.classList.add("text-ink", "font-medium");
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
    return loadScript("js/animate.js");
});
