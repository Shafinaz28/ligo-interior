const homes = [
    {
        id: "oak",
        name: "The Oak Residence",
        place: "Private family home",
        roomsLabel: "4 rooms",
        cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        rooms: [
            {
                name: "Living room",
                copy: "A calm gathering room built around oak, linen, and a long line of light. The proportions are generous, but the materials keep it intimate.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 27, y: 58, title: "Custom oak wall", text: "Floor-to-ceiling millwork conceals storage and warms the room without visual noise." },
                    { x: 62, y: 46, title: "Low linen seating", text: "Deep, quiet sofas keep the conversation area grounded and the views open." },
                    { x: 78, y: 28, title: "Gallery lighting", text: "Concealed ceiling wash lights the art and plaster evenly from dusk onward." }
                ]
            },
            {
                name: "Kitchen",
                copy: "A working kitchen with the composure of a sitting room. Stone, bronze, and pale oak are kept in a tight, lasting palette.",
                image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 48, y: 62, title: "Honed stone island", text: "A single block of stone for prep, dining, and lingering. No sharp gloss, just touch." },
                    { x: 22, y: 40, title: "Tall pantry wall", text: "Full-height oak doors hide small appliances so the room stays visually still." }
                ]
            },
            {
                name: "Primary suite",
                copy: "Soft plaster, layered textiles, and a low bed line make the suite feel collected rather than staged.",
                image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 54, y: 60, title: "Upholstered bed", text: "A quiet, tailored frame in oatmeal wool so the architecture stays the focus." },
                    { x: 18, y: 42, title: "Draped light", text: "Full-height linen filters morning sun and gives the room a slow, even glow." }
                ]
            },
            {
                name: "Bath",
                copy: "Stone underfoot, warm metal, and a window that keeps the room connected to the garden.",
                image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 40, y: 68, title: "Carved stone bath", text: "A freestanding tub set off-axis so the garden view remains the first thing you see." },
                    { x: 72, y: 38, title: "Bronze fittings", text: "Unlacquered bronze that will deepen with use, matching the kitchen metals." }
                ]
            }
        ]
    },
    {
        id: "harbour",
        name: "Harbour House",
        place: "Coastal apartment",
        roomsLabel: "4 rooms",
        cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        rooms: [
            {
                name: "Sitting room",
                copy: "Light, air, and a pale envelope. The room is designed to hold the sea view without competing with it.",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 34, y: 52, title: "Pale plaster walls", text: "A mineral finish that catches daylight and keeps the palette almost colourless." },
                    { x: 70, y: 44, title: "Low lounge chairs", text: "Sculpted seating that leaves the window line uninterrupted." }
                ]
            },
            {
                name: "Kitchen",
                copy: "A galley that opens to the sitting room, finished in pale stone and brushed nickel.",
                image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 50, y: 58, title: "Open dining bar", text: "Breakfast, laptop, and evening drinks share one long stone edge." },
                    { x: 24, y: 36, title: "Open shelving", text: "Everyday ceramics on show, so the kitchen feels lived-in rather than closed." }
                ]
            },
            {
                name: "Bedroom",
                copy: "A restful room with a quieter palette and a wide headboard wall that hides storage.",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 52, y: 55, title: "Headboard wall", text: "Upholstered panels conceal sockets and switches, keeping the bed wall calm." },
                    { x: 80, y: 30, title: "Morning light", text: "Sheer layers first, blackout second — the room can go from glow to dark in one pull." }
                ]
            },
            {
                name: "Dining",
                copy: "A compact dining room that borrows light from the sitting room and holds eight without crowding.",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 46, y: 60, title: "Oval dining table", text: "No sharp corners, easier movement, and a softer conversation line." },
                    { x: 68, y: 32, title: "Pendant grouping", text: "Three small lights instead of one chandelier, scaled to the ceiling height." }
                ]
            }
        ]
    },
    {
        id: "noir",
        name: "Noir Atelier",
        place: "City pied-à-terre",
        roomsLabel: "4 rooms",
        cover: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        rooms: [
            {
                name: "Gallery living",
                copy: "Darker, more cinematic rooms for a city apartment. Shadow is used as a material.",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 30, y: 48, title: "Dark timber floor", text: "Wide boards in a smoked finish, so furniture silhouettes sit more quietly." },
                    { x: 64, y: 36, title: "Picture wall", text: "A single measured grid of art, lit independently from the rest of the room." }
                ]
            },
            {
                name: "Kitchen",
                copy: "A precise, almost furniture-like kitchen in smoked oak and dark stone.",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 42, y: 54, title: "Smoked oak run", text: "Handleless fronts with a vertical grain that reads as architecture, not cabinetry." },
                    { x: 76, y: 42, title: "Task lighting", text: "A thin bronze bar washes the worktop without lighting the whole apartment." }
                ]
            },
            {
                name: "Bedroom",
                copy: "A cocooned suite with heavy drapery and a muted, almost monochrome bed layer.",
                image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 50, y: 58, title: "Layered bedding", text: "Washed linen and a wool throw in the same family of greys as the walls." },
                    { x: 22, y: 40, title: "Reading niche", text: "A low chair and a single lamp, kept away from the bed so the room can still rest." }
                ]
            },
            {
                name: "Bath",
                copy: "Dark stone, a large mirror, and lighting that can drop to a candle-level glow.",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80",
                hotspots: [
                    { x: 38, y: 50, title: "Book-matched stone", text: "Veins aligned across the vanity so the wall reads as one piece of geology." },
                    { x: 70, y: 34, title: "Mirror light", text: "A hidden perimeter glow for grooming, separate from the room’s evening scene." }
                ]
            }
        ]
    }
];

const tour = {
    homeIndex: 0,
    roomIndex: 0,
    hotspotIndex: -1
};

function $(id) {
    return document.getElementById(id);
}

function currentHome() {
    return homes[tour.homeIndex];
}

function currentRoom() {
    return currentHome().rooms[tour.roomIndex];
}

function renderHomePills() {
    $("tour-homes").innerHTML = homes.map(function (home, index) {
        const active = index === tour.homeIndex
            ? "bg-ink text-paper"
            : "bg-transparent text-ink hover:bg-ink/8";
        return (
            '<button type="button" data-home="' + index + '" class="rounded-full border border-ink/15 px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase transition-colors ' + active + '">' +
                home.name +
            "</button>"
        );
    }).join("");
}

function renderRoomThumbs() {
    $("tour-rooms").innerHTML = currentHome().rooms.map(function (room, index) {
        const active = index === tour.roomIndex ? "ring-2 ring-accent opacity-100" : "opacity-80 hover:opacity-100";
        return (
            '<button type="button" data-room="' + index + '" class="group relative min-w-[148px] overflow-hidden rounded-2xl ' + active + '">' +
                '<img class="h-24 w-full object-cover" src="' + room.image + '" alt="' + room.name + '">' +
                '<span class="absolute inset-x-0 bottom-0 bg-ink/55 px-3 py-2 text-left text-[0.68rem] tracking-[0.14em] text-white uppercase">' + room.name + "</span>" +
            "</button>"
        );
    }).join("");
}

function renderHotspots() {
    const room = currentRoom();
    $("tour-hotspots").innerHTML = room.hotspots.map(function (spot, index) {
        const selected = index === tour.hotspotIndex;
        return (
            '<button type="button" data-hotspot="' + index + '" class="absolute z-10 -translate-x-1/2 -translate-y-1/2" style="left:' + spot.x + "%;top:" + spot.y + '%" aria-label="' + spot.title + '">' +
                '<span class="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/50"></span>' +
                '<span class="relative flex h-7 w-7 items-center justify-center rounded-full border border-white bg-accent text-xs text-white shadow-lg ' + (selected ? "scale-110" : "") + '">' + (index + 1) + "</span>" +
            "</button>"
        );
    }).join("");
}

function renderPanel() {
    const home = currentHome();
    const room = currentRoom();
    const spot = tour.hotspotIndex >= 0 ? room.hotspots[tour.hotspotIndex] : null;

    $("tour-kicker").textContent = home.place + " · " + home.roomsLabel;
    $("tour-home-name").textContent = home.name;
    $("tour-room-name").textContent = room.name;
    $("tour-room-copy").textContent = room.copy;
    $("tour-progress").textContent = "Room " + (tour.roomIndex + 1) + " of " + home.rooms.length;

    if (spot) {
        $("tour-detail-title").textContent = spot.title;
        $("tour-detail-text").textContent = spot.text;
        $("tour-detail").classList.remove("invisible", "opacity-0");
    } else {
        $("tour-detail-title").textContent = "Click a numbered point";
        $("tour-detail-text").textContent = "Each marker is a material, a piece of furniture, or a lighting decision from the room.";
        $("tour-detail").classList.remove("invisible", "opacity-0");
    }
}

function setTourImage(src) {
    const image = $("tour-image");
    image.classList.add("opacity-0");
    window.setTimeout(function () {
        image.src = src;
        image.onload = function () {
            image.classList.remove("opacity-0");
        };
    }, 160);
}

function renderTour() {
    renderHomePills();
    renderRoomThumbs();
    renderHotspots();
    renderPanel();
    setTourImage(currentRoom().image);
    $("tour-image").alt = currentHome().name + " — " + currentRoom().name;
}

function selectHome(index) {
    tour.homeIndex = index;
    tour.roomIndex = 0;
    tour.hotspotIndex = -1;
    renderTour();
}

function selectRoom(index) {
    const rooms = currentHome().rooms;
    tour.roomIndex = (index + rooms.length) % rooms.length;
    tour.hotspotIndex = -1;
    renderTour();
}

function selectHotspot(index) {
    tour.hotspotIndex = index;
    renderHotspots();
    renderPanel();
}

function bindTour() {
    $("tour-homes").addEventListener("click", function (event) {
        const button = event.target.closest("[data-home]");
        if (button) {
            selectHome(Number(button.getAttribute("data-home")));
        }
    });

    $("tour-rooms").addEventListener("click", function (event) {
        const button = event.target.closest("[data-room]");
        if (button) {
            selectRoom(Number(button.getAttribute("data-room")));
        }
    });

    $("tour-hotspots").addEventListener("click", function (event) {
        const button = event.target.closest("[data-hotspot]");
        if (button) {
            selectHotspot(Number(button.getAttribute("data-hotspot")));
        }
    });

    $("tour-prev").addEventListener("click", function () {
        selectRoom(tour.roomIndex - 1);
    });

    $("tour-next").addEventListener("click", function () {
        selectRoom(tour.roomIndex + 1);
    });

    document.querySelectorAll("[data-open-home]").forEach(function (button) {
        button.addEventListener("click", function () {
            const id = button.getAttribute("data-open-home");
            const index = homes.findIndex(function (home) {
                return home.id === id;
            });
            if (index >= 0) {
                selectHome(index);
            }
        });
    });

    const stage = $("tour-stage");
    const image = $("tour-image");
    stage.addEventListener("mousemove", function (event) {
        const box = stage.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        image.style.transform = "scale(1.08) translate(" + x * -18 + "px, " + y * -14 + "px)";
    });
    stage.addEventListener("mouseleave", function () {
        image.style.transform = "scale(1.04)";
    });

    document.addEventListener("keydown", function (event) {
        if (event.target.closest("input, textarea")) {
            return;
        }
        if (event.key === "ArrowRight") {
            selectRoom(tour.roomIndex + 1);
        }
        if (event.key === "ArrowLeft") {
            selectRoom(tour.roomIndex - 1);
        }
    });
}

function bindContact() {
    const form = $("contact-form");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = $("contact-name").value.trim();
        const email = $("contact-email").value.trim();
        const message = $("contact-message").value.trim();
        const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
        window.location.href = "mailto:hello@ligointeriors.com?subject=" + encodeURIComponent("Interior cost estimate") + "&body=" + body;
    });
}

renderTour();
bindTour();
bindContact();

(function bindHeroVideo() {
    const video = $("hero-video");
    if (!video) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        video.pause();
        video.removeAttribute("autoplay");
        return;
    }

    const play = video.play();
    if (play && typeof play.catch === "function") {
        play.catch(function () {});
    }
})();

(function bindFaq() {
    document.querySelectorAll("[data-faq]").forEach(function (button) {
        button.addEventListener("click", function () {
            const item = button.closest("[data-faq-item]");
            const panel = item.querySelector("[data-faq-panel]");
            const icon = item.querySelector("[data-faq-icon]");
            const open = !item.classList.contains("is-open");

            document.querySelectorAll("[data-faq-item]").forEach(function (other) {
                other.classList.remove("is-open");
                const otherPanel = other.querySelector("[data-faq-panel]");
                const otherIcon = other.querySelector("[data-faq-icon]");
                if (otherPanel) {
                    otherPanel.classList.add("hidden");
                }
                if (otherIcon) {
                    otherIcon.textContent = "+";
                }
            });

            if (open) {
                item.classList.add("is-open");
                panel.classList.remove("hidden");
                icon.textContent = "−";
            }
        });
    });
})();
