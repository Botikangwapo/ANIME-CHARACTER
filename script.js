  AOS.init();

        // Navbar Toggle Script
        const toggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".header ul");

        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Banner image hover change script
        let places = document.querySelectorAll(".place-list li");
        let active = "/assets/alder/Luffy icon _ Manga anime one piece, Luffy, One piece photos.jpg";

        places.forEach((e) => {
            e.addEventListener("mouseenter", (event) => {
                places.forEach((e) => {
                    e.classList.remove("active");
                });

                event.target.classList.add("active");
                active = event.target.getAttribute("data-img");
                let banner = document.querySelector(".banner");
                banner.style.backgroundImage = `url('${active}')`;
            });
        });
