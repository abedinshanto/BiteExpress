$(document).ready(function() {
    $('#hide-btn').click(function() {
        $('#hide-div').toggle();

        var button = $(this).find('button');
        var icon = $(this).find('i');

        if (button.text() === 'See more products') {
            button.text('See fewer products');
            icon.removeClass('fa-square-caret-down').addClass('fa-square-caret-up');
        } else {
            button.text('See more products');
            icon.removeClass('fa-square-caret-up').addClass('fa-square-caret-down');
        }
    });
});
