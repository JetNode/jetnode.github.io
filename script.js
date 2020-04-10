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

function unselectDeepChoice() {
    $(".deepChoice").removeClass("deepSelected");
    $(".converterHolder").fadeOut();
}

function selectDeepChoice(choiceClass) {
    unselectDeepChoice();
    var itemClass = ".deepChoice." + choiceClass;
    $(itemClass).addClass("deepSelected");
    showConverterHolder(choiceClass);
}

function showConverterHolder(choiceClass) {
    var converterClass = '.' + choiceClass + 'ConverterHolder';
    $(converterClass).fadeIn();
}

function closeDropdown(choiceClass) {
    $(".selectionBoxOpener." + choiceClass).removeClass("dropdownSelected");
    $(".selectionBoxDropdown." + choiceClass).fadeOut();
}

function selectDropdown(choiceClass) {
    $(".dropdownOpener." + choiceClass).toggleClass('flip');
    var isSelected = $(".selectionBoxOpener." + choiceClass).hasClass("dropdownSelected");
    if (isSelected == true) {
        closeDropdown(choiceClass);
    } else {
        $(".selectionBoxOpener." + choiceClass).addClass("dropdownSelected");
        $(".selectionBoxDropdown." + choiceClass).fadeIn();
    }
}