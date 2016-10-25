$(".dropdown").on("show.bs.dropdown", function(event) {
    $(".dropdown-toggle>i").removeClass("fa-bars").addClass("fa-times");
    $(".dropdown-toggle").addClass("otvoren");
    $(".search-icon").addClass("otvoren");
});
$(".dropdown").on("hide.bs.dropdown", function() {
    $(".dropdown-toggle>i").removeClass("fa-times").addClass("fa-bars");
    $(".dropdown-toggle").removeClass("otvoren");
    $(".search-icon").removeClass("otvoren");
});
$(document).ready(function() {
    $('#skroler-novosti').carousel({
        interval: 10000
    });
    $('#skroler-kapital').carousel({
        interval: 10000
    });
    if ($(window).width() > 1199) {
        $('.fdi-Carousel .item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        });
    };
    if ($(window).width() < 480) {
        $(".search-icon").click(function(event) {
            event.preventDefault();
            console.log("klikno si da ga jebes..")
            $(".bijeli-menu.affix .pretraga").toggle();
            return false;
        });
    }
});
$("#dalje").click(function() {
    $("#skroler-novosti").carousel("next");
});
$(".kapital #dalje").click(function() {
    $("#skroler-kapital").carousel("next");
});
var $gridvijesti = $('#vijesti-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $gridvijesti.masonry({
        itemSelector: '.card',
    });
});
var $gridkapital = $('#kapital-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $gridkapital.masonry({
        itemSelector: '.card',
    });
});
var $grideu = $('#eu-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $grideu.masonry({
        itemSelector: '.card',
    });
});
var $gridlic = $('#licnosti-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $gridlic.masonry({
        itemSelector: '.card',
    });
});
var $gridkar = $('#karijera-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $gridkar.masonry({
        itemSelector: '.card',
    });
});
var $gridkolum = $('#kolumne-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $gridkolum.masonry({
        itemSelector: '.card',
    });
});
var $gridnaj = $('#najave-wrap').imagesLoaded(function() {
    // init Masonry after all images have loaded
    $gridnaj.masonry({
        itemSelector: '.card',
    });
});