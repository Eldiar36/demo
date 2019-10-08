$('.mobile-btn').on(  'click',function () {
    $('.mobile-btn').toggleClass('active')
    $('.nav-menu-items').toggleClass('active')
})
$('.nav-menu-items li a').on('click',function () {
    $('.mobile-btn').removeClass('active')
    $('.nav-menu-items').removeClass('active')
})

