$(document).ready(function () {
    // Scroll to view on navigation menu click
    $('a[href ^= "#"]').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });

    // Hamburger menu button animation
    $('.menu-btn').on('click', function () {
        $(this).toggleClass('change');
    });
});