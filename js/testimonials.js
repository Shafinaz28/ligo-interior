(function initSliders() {
    document.querySelectorAll("[data-slider], [data-testimonial-slider]").forEach(function (slider) {
        const track = slider.querySelector("[data-track]");
        const slides = Array.from(slider.querySelectorAll("[data-slide]"));
        const dots = Array.from(slider.querySelectorAll("[data-dot]"));
        const prev = slider.querySelector("[data-prev]");
        const next = slider.querySelector("[data-next]");
        if (!track || !slides.length) {
            return;
        }

        const isRow = slider.getAttribute("data-slider") === "row";
        const autoplay = slider.hasAttribute("data-autoplay");
        const videos = slides.map(function (slide) {
            return slide.querySelector("video");
        });
        let index = 0;
        let startX = 0;
        let timer = null;

        function visibleCount() {
            if (!isRow) {
                return 1;
            }
            return window.matchMedia("(min-width: 860px)").matches ? 3 : 1;
        }

        function maxIndex() {
            return Math.max(0, slides.length - visibleCount());
        }

        function show(nextIndex) {
            videos.forEach(function (video) {
                if (video && !video.paused) {
                    video.pause();
                }
            });
            if (isRow) {
                const max = maxIndex();
                if (nextIndex > max) {
                    index = 0;
                } else if (nextIndex < 0) {
                    index = max;
                } else {
                    index = nextIndex;
                }
                const gap = 24;
                const slideWidth = slides[0].getBoundingClientRect().width + gap;
                track.style.transform = "translateX(-" + (index * slideWidth) + "px)";
            } else {
                index = (nextIndex + slides.length) % slides.length;
                track.style.transform = "translateX(-" + (index * 100) + "%)";
            }
            dots.forEach(function (dot, i) {
                dot.classList.toggle("bg-accent", i === index);
                dot.classList.toggle("bg-accent/30", i !== index);
            });
        }

        function stopAuto() {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        }

        function startAuto() {
            if (!autoplay) {
                return;
            }
            stopAuto();
            timer = setInterval(function () {
                show(index + 1);
            }, 4000);
        }

        function go(nextIndex) {
            show(nextIndex);
            startAuto();
        }

        if (prev) {
            prev.addEventListener("click", function () {
                go(index - 1);
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                go(index + 1);
            });
        }
        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                go(i);
            });
        });

        track.addEventListener("touchstart", function (event) {
            startX = event.changedTouches[0].clientX;
            stopAuto();
        }, { passive: true });

        track.addEventListener("touchend", function (event) {
            const delta = event.changedTouches[0].clientX - startX;
            if (delta < -40) {
                go(index + 1);
            } else if (delta > 40) {
                go(index - 1);
            } else {
                startAuto();
            }
        }, { passive: true });

        slider.addEventListener("mouseenter", stopAuto);
        slider.addEventListener("mouseleave", startAuto);

        window.addEventListener("resize", function () {
            show(index);
        });

        startAuto();
    });
})();
