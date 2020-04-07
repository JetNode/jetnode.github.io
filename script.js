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

function summonUnitConverter() {
    $(".unitConverter").fadeIn(200);
}

function hideUnitConverter() {
    $(".unitConverter").fadeOut(200);
}