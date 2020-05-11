// ================ New cursor movement ==============================================================================================
let cursor = $('.cursor'),
    follower = $('.cursor-follower');


let posX = 0,
    posY = 0, mouseX = 0, mouseY = 0;
TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".items-m").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".items-m").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

// ========= Smooth scrolling ========================================================================================================
$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });
});
// ========= Main page Animation =======================================================================================================
TweenMax.from(".about-center", 1.6, {
    opacity: 0,
    delay: 0.2,
    y: 50,
    ease: Expo.easeInOut
});
TweenMax.from(".avatar-img", 1.6, {
    opacity: 0,
    delay: 0.8,
    ease: Expo.easeInOut
});
TweenMax.from(".about-headline", 1.6, {
    opacity: 0,
    delay: 1.2,
    ease: Expo.easeInOut
});
TweenMax.from(".btn", 1.6, {
    opacity: 0,
    delay: 1.5,
    y: 50,
    ease: Expo.easeInOut
});
TweenMax.staggerFrom(".social-icons a img", 1, {
    delay: 1.8,
    opacity: 0,
    ease: Power3.easeInOut
}, 0.08);

// ========= Tech Page Animation =======================================================================================================
const sHeadline = new TimelineLite();
const tween = new TimelineLite();
const itemsS = new TimelineLite();
const progress = new TimelineLite();
const filling = new TimelineLite();

itemsS.add(
    TweenMax.from(".items-s", 1, {
        opacity: 0,
        delay: 0.2,
        y: 20,
        ease: Power3.easeInOut
    })
)
const controllerItems = new ScrollMagic.Controller();
const sceneItems = new ScrollMagic.Scene({
    triggerElement: "#tech",
    triggerHook: 0.8,
})
    .setTween(itemsS)
    .addTo(controllerItems);

tween.add(
    TweenMax.from(".tech-headline", 1, {
        opacity: 0,
        delay: 0.5,
        ease: Expo.easeInOut
    })
)
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: "#tech",
    triggerHook: 0.7,
})
    .setTween(tween)
    .addTo(controller);



progress.add(
    TweenMax.from(".tech-progressBar", 1, {
        opacity: 0,
        delay: 1.2,
        ease: Expo.easeInOut
    }),
)
const controllerProgress = new ScrollMagic.Controller();
const sceneProgress = new ScrollMagic.Scene({
    triggerElement: "#tech",
    triggerHook: 0.6,
})
    .setTween(progress)
    .addTo(controllerProgress);



filling.add(

    TweenMax.from(".progressBar-filling", 1.5, {
        delay: 1.8,
        width: 0,
        ease: Expo.easeInOut
    })
)
const controllerFilling = new ScrollMagic.Controller();
const sceneFilling = new ScrollMagic.Scene({
    triggerElement: "#tech",
    triggerHook: 0.4,
})
    .setTween(filling)
    .addTo(controllerFilling);

// ========= Experience Animation =======================================================================================================

const expTopLeft = new TimelineLite();
expTopLeft.add(
    TweenMax.from("#experience-grid-top-left", 2, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerExpTopLeft = new ScrollMagic.Controller();
const sceneExpTopLeft = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.8,
})
    .setTween(expTopLeft)
    .addTo(controllerExpTopLeft);



const expBottomLeft = new TimelineLite();
expBottomLeft.add(
    TweenMax.from("#experience-grid-bottom-left", 2, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerExpBottomLeft = new ScrollMagic.Controller();
const sceneExpBottomLeft = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.7,
})
    .setTween(expBottomLeft)
    .addTo(controllerExpBottomLeft);




const expBottomRight = new TimelineLite();
expBottomRight.add(
    TweenMax.from("#experience-grid-bottom-right", 1, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerExpBottomRight = new ScrollMagic.Controller();
const sceneExpBottomRight = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.5,
})
    .setTween(expBottomRight)
    .addTo(controllerExpBottomRight);

// ========= Education Animation =======================================================================================================

const eduTopLeft = new TimelineLite();
eduTopLeft.add(
    TweenMax.from("#education-grid-top-left", 1, {
        opacity: 0,
        ease: Expo.easeInOut
    }),

)
const controllerEduTopLeft = new ScrollMagic.Controller();
const sceneEduTopLeft = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: 0.8,
})
    .setTween(eduTopLeft)
    .addTo(controllerEduTopLeft);




const eduBottomLeft = new TimelineLite();
eduBottomLeft.add(
    TweenMax.from("#education-grid-bottom-left", 1, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerEduBottomLeft = new ScrollMagic.Controller();
const sceneEduBottomLeft = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: 0.7,
})
    .setTween(eduBottomLeft)
    .addTo(controllerEduBottomLeft);



const eduBottomRight = new TimelineLite();
eduBottomRight.add(
    TweenMax.from("#education-grid-bottom-right", 1, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerEduBottomRight = new ScrollMagic.Controller();
const sceneEduBottomRight = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: 0.5,
})
    .setTween(eduBottomRight)
    .addTo(controllerEduBottomRight);
// ========= Certificates Animation ===================================================================================================

const certificates = new TimelineLite();
certificates.add(
    TweenMax.staggerFrom(".items-l", 1, {
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, 0.08)
)
const controllerCertificates = new ScrollMagic.Controller();
const sceneCertificatess = new ScrollMagic.Scene({
    triggerElement: "#certificate",
    triggerHook: 0.6,
})
    .setTween(certificates)
    .addTo(controllerCertificates);


// ========= Nav slider ===================================================================================================
const navSlide = () => {
    const nav = document.querySelector(".nav");
    const navBurger = document.querySelector(".nav-burger");
    const navLinks = document.querySelectorAll(".nav a");
    // Toggle Nav
    navBurger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }

        });
        // Burger animation
        navBurger.classList.toggle("toggle");

    });
    //  close navbar
    navLinks.forEach(function (link) {
        link.addEventListener('click', () => {
            nav.classList.toggle("nav-active");
            navBurger.classList.toggle("toggle");

            navLinks.forEach((link, index) => {
                link.style.animation = '';
            });
        })
    }


    )
}

navSlide();
