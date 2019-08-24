import $ from 'jquery'

const splashscreenFadingTime = 750

$(document).ready(() => {
  $('.js-splashscreen').fadeOut(splashscreenFadingTime)
})
