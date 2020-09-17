$(document).ready(function () {
    // On navigation menu click
    $('a[href ^= "#"]').on('click', function (event) {
        event.preventDefault();

        // Scroll to view
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);

        // Hide navigation menu if open on mobile
        if ($('#menu-btn').prop('checked')) {
            $('#menu-btn').prop('checked', false);
        }
    });
});