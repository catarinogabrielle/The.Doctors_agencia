class MobileNavbar {
    constructor(mobileMenu, navList) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
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
 
const home = document.querySelector('.home-mobile');
const aboutmobile = document.querySelector('.about-mobile');
const service = document.querySelector('.service-mobile');
const more = document.querySelector('.more-mobile');
const footer = document.querySelector('.footer-mobile');

const menu = document.querySelector('.mobile-menu');
const menuimg = document.querySelector('.img-menu');

const hideMobileMenu = () => {
    menu.classList.toggle('active');
    menuimg.classList.toggle('active');
};

home.addEventListener('click', hideMobileMenu);
aboutmobile.addEventListener('click', hideMobileMenu);
service.addEventListener('click', hideMobileMenu);
more.addEventListener('click', hideMobileMenu);
footer.addEventListener('click', hideMobileMenu);

const mobileNavbar = new MobileNavbar(
    ".img-menu",
    ".mobile-menu",
);
mobileNavbar.init();

window.sr = ScrollReveal({ reset: true });

sr.reveal('.content', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 2000
});

sr.reveal('.about-img', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1400
});

sr.reveal('.about-text h2', { duration: 1000 });

sr.reveal('.about-text h5', { duration: 1000 });

sr.reveal('.about-text p', { duration: 1000 });

sr.reveal('.box', {
    rotate: { x: 0, y: 90, z: 0 },
    duration: 1800,
});

sr.reveal('.box2', {
    rotate: { x: 0, y: 90, z: 0 },
    duration: 2400,
});

sr.reveal('.more-content', { duration: 1200 });

sr.reveal('#content-footer', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1400
});

sr.reveal('.slider', {
    rotate: { x: 80, y: 0, z: 0 },
    duration: 1200
});

sr.reveal('.card1', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1900
});

sr.reveal('.card2', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1900
});

sr.reveal('.card3', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1900
});

sr.reveal('.card4', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1900
});

sr.reveal('.card5', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1900
});

sr.reveal('.card6', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1900
});