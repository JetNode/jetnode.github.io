function summonMenu() {
    $(".semiTransparent").fadeIn();
    menuToggle();
}

function hideMenu() {
    menuToggle();
    $(".semiTransparent").fadeOut();
}

function menuToggle() {
    $(".menu").animate({width:'toggle'}, 200);
}