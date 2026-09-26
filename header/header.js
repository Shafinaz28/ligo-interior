(function initHeader() {
    const header = document.querySelector("#site-header header") || document.querySelector("header");
    const bar = header && header.querySelector(".header-bar");
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    const desktop = window.matchMedia("(min-width: 860px)");

    if (!toggle || !nav || !bar) {
        return;
    }

    function setOpen(open) {
        if (desktop.matches) {
            open = false;
        }

        toggle.classList.toggle("is-open", open);
        nav.classList.toggle("is-open", open);
        header.classList.toggle("is-menu-open", open);
        document.documentElement.classList.toggle("menu-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");

        if (open) {
            document.body.appendChild(nav);
        } else if (nav.parentElement !== bar) {
            const quoteBar = bar.querySelector(".quote-open-btn-bar");
            bar.insertBefore(nav, quoteBar || toggle);
        }
    }

    toggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(!toggle.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
        if (event.target.closest("a, [data-quote-open]")) {
            setOpen(false);
        }
    });

    desktop.addEventListener("change", function () {
        setOpen(false);
    });
})();
