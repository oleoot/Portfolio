// ================ New cursor movement =============================================================
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
// ========= Smooth scrolling ===========================================================
$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
// ========= Animations =================================================================
TweenMax.from(".about-center", 1.6, {
    opacity: 0,
    delay: 0.2,
    height: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".avatar-img", 1.6, {
    opacity: 0,
    delay: 1,
    // height: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".about-headline", 1.6, {
    opacity: 0,
    delay: 1.2,
    height: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".btn", 1.6, {
    opacity: 0,
    delay: 1.5,
    height: 0,
    ease: Expo.easeInOut
});
TweenMax.staggerFrom(".social-icons a img", 1, {
    delay: 1.8,
    opacity: 0,
    // y: 10,
    ease: Power3.easeInOut
}, 0.08);


const sHeadline = new TimelineLite();
const tween = new TimelineLite();
const itemsS = new TimelineLite();
const progress = new TimelineLite();
const filling = new TimelineLite();



itemsS.add(
    // TweenMax.staggerFrom(".items-s", 1, {
    //     delay: 0.2,
    //     opacity: 0,
    //     y: 20,
    //     ease: Power3.easeInOut
    // }, 0.08),
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
        height: 0,
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
        height: 0,
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
        delay: 1.3,
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



sHeadline.add(
    TweenMax.from(".section-headline ", 1, {
        opacity: 0,
        height: 0,
        y: 20,
        ease: Expo.easeInOut
    }),
)
const controllerHeadline = new ScrollMagic.Controller();
const sceneHeadline = new ScrollMagic.Scene({
    triggerElement: "#tech",
    triggerHook: 0.9,
})
    .setTween(sHeadline)
    .addTo(controllerHeadline);






const gridBlockR = new TimelineLite();
gridBlockR.add(
    TweenMax.from(".experience-block-border", 2, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerGrid = new ScrollMagic.Controller();
const sceneGrid = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.5,
})
    .setTween(gridBlockR)
    .addTo(controllerGrid);







const gridBlockRightFirst = new TimelineLite();
gridBlockRightFirst.add(
    TweenMax.from(".experience-block-animation", 2, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)
const controllerGridBlockRightFirst = new ScrollMagic.Controller();
const sceneGridRightFirst = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.3,
})
    .setTween(gridBlockRightFirst)
    .addTo(controllerGridBlockRightFirst);





const gridBlockRightSecond = new TimelineLite();
gridBlockRightSecond.add(
    TweenMax.from(".experience-block-animation", 2, {
        opacity: 0,
        ease: Expo.easeInOut
    }),
)

const controllerGridBlockRightSecond = new ScrollMagic.Controller();
const sceneGridRightSecond = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: 0.3,
})
    .setTween(gridBlockRightSecond)
    .addTo(controllerGridBlockRightSecond);
