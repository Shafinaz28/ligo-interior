(function initFaq() {
    const items = Array.from(document.querySelectorAll("[data-faq-item]"));
    if (!items.length) {
        return;
    }

    function setOpen(item, open) {
        const panel = item.querySelector("[data-faq-panel]");
        const icon = item.querySelector("[data-faq-icon]");
        const button = item.querySelector("[data-faq]");
        item.classList.toggle("is-open", open);
        if (panel) {
            panel.classList.toggle("hidden", !open);
        }
        if (icon) {
            icon.textContent = open ? "−" : "+";
        }
        if (button) {
            button.setAttribute("aria-expanded", open ? "true" : "false");
        }
    }

    items.forEach(function (item) {
        setOpen(item, item.classList.contains("is-open"));
        const button = item.querySelector("[data-faq]");
        if (!button) {
            return;
        }
        button.addEventListener("click", function () {
            const willOpen = !item.classList.contains("is-open");
            items.forEach(function (other) {
                setOpen(other, willOpen && other === item);
            });
        });
    });
})();
