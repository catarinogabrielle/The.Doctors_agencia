class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".img-menu",
    ".mobile-menu",
    ".mobile-menu li",
);
mobileNavbar.init();

let changeIcon = function (icon) {
    icon.classList.toggle('fa-times')
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('.content', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 2000
});

sr.reveal('.about-img', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1000
});

sr.reveal('.about-text h2', { duration: 1000 });

sr.reveal('.about-text h5', { duration: 1000 });

sr.reveal('.about-text p', { duration: 1000 });

sr.reveal('.box', {
    rotate: { x: 100, y: 0, z: 0 },
    duration: 1200
});

sr.reveal('.more-content', { duration: 1000 });

sr.reveal('#content-footer', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1000
});