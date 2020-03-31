import $ from 'jquery'

const $htmlBody = $('html, body')
const $clickElement = $('.js-scroll-to')

// check if element has data scroll element set as target, for scrolling logic
const $scrollTargetElement = ($element) => {
  const $scrollToTargetElement = $($element.getAttribute('data-scrollTo'))
  return $scrollToTargetElement
}

// at click of element, start scroll to logic
$clickElement.on('click', (el) => {
  el.preventDefault()

  $htmlBody.animate(
    {
      scrollTop: $scrollTargetElement(el.currentTarget).offset().top,
    },
    500
  )
})
