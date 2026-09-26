(function initMotion() {
    if (!window.gsap) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    gsap.registerPlugin(window.ScrollTrigger);

    const header = document.querySelector("#site-header header");
    if (header) {
        gsap.from(header, {
            y: -24,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform"
        });
    }

    const hero = document.querySelector("#home, main > section:first-of-type");
    if (hero) {
        const heroBits = hero.querySelectorAll("h1, p, a, button, .mt-8");
        gsap.from(heroBits, {
            y: 32,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            delay: 0.15,
            ease: "power3.out"
        });

        const media = hero.querySelector("video, img.absolute");
        if (media) {
            gsap.fromTo(media, { scale: 1.08 }, {
                scale: 1,
                duration: 2.2,
                ease: "power2.out"
            });
        }
    }

    gsap.utils.toArray("main section").forEach(function (section, index) {
        if (index === 0) {
            return;
        }

        const items = section.querySelectorAll("h2, article, blockquote, .service-card, aside, .service-link");
        if (!items.length) {
            return;
        }

        gsap.from(items, {
            scrollTrigger: {
                trigger: section,
                start: "top 82%"
            },
            y: 36,
            opacity: 0,
            duration: 0.7,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "transform"
        });
    });

    gsap.utils.toArray("[data-img-swap]").forEach(function (tile, i) {
        const next = tile.querySelector(".img-swap-next");
        if (!next) {
            return;
        }

        const timeline = gsap.timeline({
            repeat: -1,
            yoyo: true,
            delay: 1.4 + i * 0.55,
            defaults: { duration: 0.8, ease: "power2.inOut" }
        })
            .to(next, { opacity: 1 }, 2.8)
            .to(next, { opacity: 0 }, 5.4);

        const hoverIn = function () {
            timeline.pause();
            gsap.to(next, { opacity: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
        };
        const hoverOut = function () {
            gsap.to(next, { opacity: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
            timeline.play();
        };

        tile.addEventListener("mouseenter", hoverIn);
        tile.addEventListener("mouseleave", hoverOut);
        tile.addEventListener("focusin", hoverIn);
        tile.addEventListener("focusout", hoverOut);
    });

    document.querySelectorAll(".process-step, .why-card, article:has(.work-icon), [data-img-swap], .upcoming-grid button").forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.remove("is-tapped");
            void card.offsetWidth;
            card.classList.add("is-tapped");
        });
        card.addEventListener("animationend", function (event) {
            if (event.animationName === "card-tap") {
                card.classList.remove("is-tapped");
            }
        });
    });
})();
