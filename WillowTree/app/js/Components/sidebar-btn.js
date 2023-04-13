
    $('.catalog-menu__btn-content').on('click', function(e){
        e.preventDefault();
        $('.wrap').toggleClass('active');
        $('.title').toggleClass('active');
        $('.header').toggleClass('active');
        $('.catalog').toggleClass('active');
        $('.catalog-shop').toggleClass('active');
        $('.modal-location').toggleClass('active');
        $('.footer').toggleClass('active');
    });
    
    $('.wrap-box__img').on('click', function() {
        $('.wrap').removeClass('active');
        $('.title').removeClass('active');
        $('.header').removeClass('active');
        $('.catalog').removeClass('active');
        $('.catalog-shop').removeClass('active');
        $('.modal-location').removeClass('active');
        $('.footer').removeClass('active');
    });


