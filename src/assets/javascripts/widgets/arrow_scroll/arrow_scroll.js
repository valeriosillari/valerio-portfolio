import $ from 'jquery'

const $window = $(window)
const $scrollArrow = $('.js-arrow-scroll')

const arrowScrolling = () => {
  $window.scroll(() => {
    const topWindow = $window.scrollTop() * 1.5
    const windowHeight = $window.height()
    const position = topWindow / windowHeight

    $scrollArrow.css('opacity', 1 - position)
  })
}

arrowScrolling()
