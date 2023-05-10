$(document).ready(function () {
    $(window).scroll(function () {
if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('li a[href*="' + sectionId + '"]')
                .classList.add('active');
        } else {
            document
                .querySelector('li a[href*="' + sectionId + '"]')
                .classList.remove('active');
        }
    });
});
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.webp";
    }
    else {
        icon.src = "images/moon.webp";
    }
}
document.body.style.overflow = "hidden";
const popup = document.querySelector('.popup');
const loder = document.getElementById("preloader");
const navbar = document.getElementById("navbarhide");
const navy = document.getElementById("logo1");
const check = document.getElementById("validate");
const hire1 = document.getElementById("hire");
const home = document.getElementById("home");
window.addEventListener('load', () => {
    popup.classList.add('showPopup');
    popup.childNodes[1].classList.add('showPopup');
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
    loder.style.display = "none";
})
check.addEventListener('click', () => {
    popup.classList.remove('showPopup');
    popup.childNodes[1].classList.remove('showPopup');
    document.body.style.overflow = "visible";
    navbar.style.display = "inline";
    navy.style.display = "none";
    document.querySelector('.home .home-content .check1').style.display = "inline";
    hire1.style.display = "inline";
    home.style.filter = "none";
})
function verifyCaptcha() {
    check.removeAttribute("disabled");
    check.style.color = "green";
    check.innerHTML = "Success! You are good to go now!";
}
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        nav: true,
        navText: [
            "<i class = 'fa fa-angle-left'></i>",
            "<i class = 'fa fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    })
})