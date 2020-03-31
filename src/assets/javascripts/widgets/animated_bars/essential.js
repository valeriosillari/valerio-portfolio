import $ from 'jquery'
import TweenMax from 'node_gsap_tween_max'
import ScrollMagic from 'node_scroll_magic'
// // Scroll magic Debug Plugin Logic !!!
// import addIndicators from 'node_scroll_magic_debug'

const $itemBar = '.js-animated-bar'
const itemBarStartParentElement = '.js-section-2'
const barItemClass = 'bar'

if ($(itemBarStartParentElement)[0]) {
  const barInitLoop = (barList) => {
    // -------------------------------------------------
    // trigger bar animation
    setTimeout(() => {
      barList.forEach((barItem) => {
        const $currentBar = $(barItem)
        setTimeout(() => {
          $currentBar.css('width', $currentBar.attr('data-percent'))
        }, barItem * 100)
      })
    }, 250)
  }

  // get bars
  const barList = Array.from(document.getElementsByClassName(barItemClass))

  new ScrollMagic.Scene({
    // start animation when scroll magic "meets" this element
    triggerElement: itemBarStartParentElement,
  })

    .on('enter', (item) => {
      // trigger a TweenMax.to tween
      TweenMax.to(
        // element with animation
        $itemBar,
        // time for transition (fading)
        0.6,
        // logic for transition (fading)
        {
          opacity: item.type === 'enter' ? 1 : 0,
        }
      )
      barInitLoop(barList)
    })

    // // add indicators (requires debug plugin)
    // // !!! change module name for scroll magic if you want to use the Debug Plugin !!
    // .addIndicators({
    //     name: 'BARS Indicators'
    // })

    // set cpntroller for each scene/section
    .addTo(new ScrollMagic.Controller())
}
