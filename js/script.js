// New cursor movement
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
// Smooth scrolling
$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
