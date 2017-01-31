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
    $("#dalje").click(function() {
        $("#skroler-novosti").carousel("next");
    });
    $(".kapital #dalje").click(function() {
        $("#skroler-kapital").carousel("next");
    });

    function provjereDimenzija() {
        if ($(window).width() > 1199) {
            $('.fdi-Carousel .item').each(function() {
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            });
        };
        if ($(window).width() < 768) {
            $(".search-icon").click(function(event) {
                event.preventDefault();
                if ($(".crni-menu").hasClass("affix")) {
                    $(".pretraga").css("top", "100px");
                    $(".bijeli-menu.affix .pretraga").toggle();
                } else if ($(document.body).scrollTop() < 170) {
                    $(".pretraga").css("top", "170px");
                    $(".pretraga").toggle();
                }
            });
        }
        if ($(window).width() >= 768) {
            var $gridvijesti = $('#vijesti-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridvijesti.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridostalihvijesti = $('.wrap-ostalih-vijesti').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridostalihvijesti.masonry({
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
            var $gridkolum = $('#pauza-wrap').imagesLoaded(function() {
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
            var $gridpovezanih = $(".wrap-povezanih-vijesti").imagesLoaded(function() {
                $gridpovezanih.masonry({
                    itemSelector: '.card',
                });
            });
        }
    }
    provjereDimenzija();
    window.addEventListener("resize", function() {
        // pozovi funkcije uslovljene dimenzijama
        provjereDimenzija();
    }, false);
});

$('document').ready(function() {
    var $naslov = $(".modal-title");
    var $opis = $("#modalDescription");
    var nazivSlike = $(".item.active .carousel-caption h3").text();
    var opisSlike = $(".item.active .carousel-caption p").text();
    $naslov.text(nazivSlike);
    $opis.text(opisSlike);
    var url = $('.item.active').next().find("img").attr('data-src');
    $('.item.active').next().find("img").attr("src", url);
    $('#slikeCarousel').on('slid.bs.carousel', function(e) {
        var url = $('.item.active').next().find("img").attr('data-src');
        $('.item.active').next().find("img").attr("src", url); //set value : src = url
        var naslovSlike = $(".item.active .carousel-caption h3").text();

        var opisSlike = $(".item.active .carousel-caption p").text();
        $naslov.text(naslovSlike);
        $opis.text(opisSlike);
    });
    var brojSlajdova = $("#slikeCarousel>.carousel-inner>.item").length;
    $("#slikeCarousel>.carousel-inner>.item").each(function(index) {
        var urlSlike = $(this).find("img").attr('data-src');
        var element = "<li data-target='#slikeCarousel' data-slide-to=" + index + " style='background:url(" + urlSlike + ")'></li>";
        $("#carousel-thumbs").append(element);
    });
    $(".galerija>img").click(function(evet) {
        $(".otvoriGaleriju").click();
    });
    //  $("#selectmenu").selectmenu();    
    $('[name="drzava-registar"],[name="cpvKodovi"],[name="godinePP"],[name="sveobuhvatnaDobit"]').selectmenu();
});
$("#Pops").popover({
    html: true,
    content: function() {
        return $('#popover-content').html();
    }
});
$("#Pops1").popover({
    html: true,
    content: function() {
        return $('#popover-content1').html();
    }
});
$(".kategorija-tendera>div").click(function() {
    $(this).toggleClass("active");
});
$(".grupa span").click(function() {
    $(this).parent().find('.datepick').focus();
});
$(".akordion>.menu-content>li>a").click(function(event) {
    event.preventDefault();
});
$("input.akordion-input[type='text']").on("click", function() {
    $(this).select();
});
$(document).ready(function() {

    $("#datetimepicker1").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker1").datepicker("show");
    }).focus();
    $("#datetimepicker2").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker2").datepicker("show");
    }).focus();
    $("#datetimepicker3").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker3").datepicker("show");
    }).focus();
    $("#datetimepicker4").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker4").datepicker("show");
    }).focus();
    $(function() {
        $("#slider-range, #slider-range2").slider({
            range: true,
            min: 1,
            max: 1000000,
            values: [1, 100000],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + " KM" + " - " + ui.values[1] + " KM");
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0) + " KM" +
            " - " + $("#slider-range").slider("values", 1) + " KM");
    });
    // $('.profil-centar').children().not('.tab-podaci').not('.tab-osnovno').hide();
    $(".profil-card.opcije>li>a").on("click", function() {
        event.preventDefault();
        var klasa = $(this).attr("data-target");
        var text = $(this).text();
        console.log("Klik registrovan na: " + text + "\n ciljana klasa: " + klasa)
        $('.profil-centar').children().not('.tab-podaci').not('.' + klasa).fadeOut(function() {
            var pronadjen = $(this);
            console.log(pronadjen);
            $('.' + klasa).fadeIn(600);
        });
    });
    $('#tabela-rezultata td .bookmark-tendera>a').on("click", function() {
        event.preventDefault();
        $(this).toggleClass('active');
        var red = $(this).closest('tr');
        var zadnjakolona = red.find("td").eq(6);
        red.attr('data-izdvojen', $(red).attr('data-izdvojen') == '0' ? '1' : '0');
        if (zadnjakolona.text() == 0) {
            zadnjakolona.text(1);
        } else {
            zadnjakolona.text(0);
        }
        oTable.row(red).invalidate();

    });
    $.fn.dataTable.moment('DD.MM.YYYY.');
    $.fn.dataTable.moment('DD.MM.YYYY.');
    var oldStart = 0;
    var oTable = $('#tabela-rezultata').DataTable({
        searching: true,
        "paging": true,
        "info": false,
        "pageLength": 15,
        "pagingType": "numbers",
        "fnDrawCallback": function(o) {
            if (o._iDisplayStart != oldStart) {
                var targetOffset = $('#tabela-rezultata').offset().top - 350;
                $('html,body').animate({ scrollTop: targetOffset }, 500);
                oldStart = o._iDisplayStart;
            }
            dodajLabel();
            dodajKlik();
        },
        "columnDefs": [{
                "targets": 5,
                "orderable": false
            },
            { type: 'currency', targets: 2 }
        ]
    });

    $("#sacuvani-tenderi").click(function() {
        oTable.draw();
        oTable
            .columns(6)
            .search("1")
            .draw();
        dodajLabel();
        dodajKlik();
    });
    $("#svi-tenderi").click(function() {
        oTable.draw();
        oTable.search('')
            .columns().search('')
            .draw();
        dodajLabel();
        dodajKlik();
    });

    function dodajKlik() {
        function naKlik() {
            var sveKolone = $(this).nextAll('td');
            if (!sveKolone.hasClass("normalnaVisina")) {
                sveKolone.addClass("normalnaVisina");
                $(this).addClass('otvoren');
                //   sveKolone.css("display", "block")
            } else {
                sveKolone.removeClass("normalnaVisina");
                $(this).removeClass('otvoren');
            }
        }
        $("#tabela-rezultata td:first-child()").unbind('click').bind("click", naKlik);
        return true;
    }

    function dodajLabel() {
        var headertext = [];
        var headers = document.querySelectorAll("thead");
        var tablebody = document.querySelectorAll("tbody");

        for (var i = 0; i < headers.length; i++) {
            headertext[i] = [];
            for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
                var current = headrow;
                headertext[i].push(current.textContent.replace(/\r?\n|\r/, ""));
            }
        }

        if (headers.length > 0) {
            for (var h = 0, tbody; tbody = tablebody[h]; h++) {
                for (var i = 0, row; row = tbody.rows[i]; i++) {
                    for (var j = 0, col; col = row.cells[j]; j++) {
                        col.setAttribute("data-th", headertext[h][j]);
                    }
                }
            }
        }
    };
    /* -proširenje za sortiranje vrijednosti sa oznakom valute  */
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        "currency-pre": function(a) {
            a = (a === "-") ? 0 : a.replace(/[^\d\-\.]/g, "");
            return parseFloat(a);
        },

        "currency-asc": function(a, b) {
            return a - b;
        },

        "currency-desc": function(a, b) {
            return b - a;
        }
    });
});