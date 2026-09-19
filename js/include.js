async function loadPartial(id, url) {
    const host = document.getElementById(id);
    if (!host) {
        return;
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Could not load " + url);
    }

    host.innerHTML = await response.text();
}

async function loadSiteChrome() {
    await Promise.all([
        loadPartial("site-header", "header/header.html"),
        loadPartial("site-footer", "footer/footer.html")
    ]);

    const headerScript = document.createElement("script");
    headerScript.src = "header/header.js";
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
