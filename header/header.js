(function initHeader() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", function () {
        const open = toggle.classList.toggle("is-open");
        nav.classList.toggle("hidden", !open);
        nav.classList.toggle("flex", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
})();
