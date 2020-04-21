$('.slider').slick(
    dots: true;
});

$(document).ready(function () {
    $('.your-class').slick({
        setting- name: setting - value
    });
});

$(function () {
    $('.page-header').each(function () {
        var $window =$(window),
            $header = $(this),
        headerOffsetTop = $header.offset().top;

    $window.on('scroll', function () {
        if ($window.scrollTop() > headerOffsetTop)
            $header.addClass('sticky');
        } else {
        $header.removeClass('stickey');
        }
        });

        $window.trigger('scroll');

    });
});

$('.single-item').slick(
    dots: true;
);
