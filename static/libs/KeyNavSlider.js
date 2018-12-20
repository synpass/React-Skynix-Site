var owl = $('.owl-carousel');
owl.owlCarousel();
document.onkeydown = function(keynav) {
    switch (keynav.keyCode) {
        case 37:
            owl.trigger('prev.owl.carousel');
            break;
        case 39:
            owl.trigger('next.owl.carousel');
            break;
    }
};