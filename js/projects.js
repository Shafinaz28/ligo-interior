(function initClientProjects() {
    const projects = window.CLIENT_PROJECTS || [];
    const grid = document.getElementById("client-grid");
    const lightbox = document.getElementById("project-lightbox");
    if (!grid || !lightbox) {
        return;
    }

    const stage = document.getElementById("lightbox-image");
    const title = document.getElementById("lightbox-title");
    const thumbs = document.getElementById("lightbox-thumbs");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    let active = null;
    let index = 0;

    function imagePath(project, file) {
        return encodeURI("images/projects/" + project.folder + "/" + file);
    }

    projects.forEach(function (project) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "client-card";
        const cover = project.images[0]
            ? '<img src="' + imagePath(project, project.images[0]) + '" alt="' + project.name + '">'
            : '<div class="client-card-fallback">' + project.name.charAt(0) + "</div>";
        card.innerHTML =
            cover +
            '<span class="client-card-meta">' +
            "<strong>" + project.name + "</strong>" +
            "</span>";
        card.addEventListener("click", function () {
            openProject(project, 0);
        });
        grid.appendChild(card);
    });

    function renderThumbs() {
        thumbs.innerHTML = "";
        if (!active) {
            return;
        }
        active.images.forEach(function (file, i) {
            const thumb = document.createElement("button");
            thumb.type = "button";
            thumb.className = "lightbox-thumb" + (i === index ? " is-active" : "");
            thumb.innerHTML = '<img src="' + imagePath(active, file) + '" alt="">';
            thumb.addEventListener("click", function () {
                show(i);
            });
            thumbs.appendChild(thumb);
        });
    }

    function show(next) {
        if (!active || !active.images.length) {
            return;
        }
        index = (next + active.images.length) % active.images.length;
        stage.src = imagePath(active, active.images[index]);
        stage.alt = active.name + " — photo " + (index + 1);
        title.textContent = active.name;
        renderThumbs();
    }

    function openProject(project, start) {
        active = project;
        index = start || 0;
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
        if (!project.images.length) {
            stage.removeAttribute("src");
            stage.alt = "";
            title.textContent = project.name;
            thumbs.innerHTML = "";
            return;
        }
        show(index);
    }

    function close() {
        lightbox.classList.remove("is-open");
        document.body.style.overflow = "";
        active = null;
    }

    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            close();
        }
    });
    prevBtn.addEventListener("click", function () {
        show(index - 1);
    });
    nextBtn.addEventListener("click", function () {
        show(index + 1);
    });
    document.addEventListener("keydown", function (event) {
        if (!lightbox.classList.contains("is-open")) {
            return;
        }
        if (event.key === "Escape") {
            close();
        }
        if (event.key === "ArrowLeft") {
            show(index - 1);
        }
        if (event.key === "ArrowRight") {
            show(index + 1);
        }
    });
})();
