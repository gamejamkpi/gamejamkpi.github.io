$('a[href^="#"]').click(function() {

    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 200);

    return false;

    e.preventDefault();

});
