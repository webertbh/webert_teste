$(document).ready(function(){
  $('.navbar-label').on('click', function(){
    $(this).toggleClass('is-open')
    $(this).next('.navbar-submenu').slideToggle()
  })
})
