(function initTestimonials() {
    const slider = document.querySelector("[data-testimonial-slider]");
    if (!slider) {
        return;
    }

    const track = slider.querySelector("[data-track]");
    const slides = Array.from(slider.querySelectorAll("[data-slide]"));
    const dots = Array.from(slider.querySelectorAll("[data-dot]"));
    const videos = slides.map(function (slide) {
        return slide.querySelector("video");
    });
    let index = 0;
    let startX = 0;

    function show(next) {
        videos.forEach(function (video) {
            if (video && !video.paused) {
                video.pause();
            }
        });
        index = (next + slides.length) % slides.length;
        track.style.transform = "translateX(-" + (index * 100) + "%)";
        dots.forEach(function (dot, i) {
            dot.classList.toggle("bg-accent", i === index);
            dot.classList.toggle("bg-accent/30", i !== index);
        });
    }

    slider.querySelector("[data-prev]").addEventListener("click", function () {
        show(index - 1);
    });
    slider.querySelector("[data-next]").addEventListener("click", function () {
        show(index + 1);
    });
    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            show(i);
        });
    });

    track.addEventListener("touchstart", function (event) {
        startX = event.changedTouches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", function (event) {
        const delta = event.changedTouches[0].clientX - startX;
        if (delta < -40) {
            show(index + 1);
        } else if (delta > 40) {
            show(index - 1);
        }
    }, { passive: true });
})();
