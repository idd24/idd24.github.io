$(document).ready(function() {
    //mail icon action
    $('#copy-email').on('click', function() {
        navigator.clipboard.writeText('ishandesai12@gmail.com')
    });

    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'click',
        container: 'body',
    })
    setInterval(function () {
        $('[data-toggle="tooltip"]').tooltip('hide'); 
    }, 5000);
});