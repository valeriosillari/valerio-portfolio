import $ from 'jquery'
import ScrollMagic from 'node_scroll_magic'
// Scroll magic Debug Plugin Logic !!!
// import 'node_scroll_magic_debug'

// ============================================================================
// VARIABLES
// ============================================================================

// save selectors as variables to increase performance
const $screen = $(window)
const sectionClassJs = '.js-section'
const $section = $(sectionClassJs)
const dotClassStatic = '.js-dot-item-'
const classDotActive = 'active'
// set ScrollMagic controller
const controller = new ScrollMagic.Controller()

// ============================================================================
// FUNCTIONS
// ===========================================================================

// delay at event triggered
const delay = (() => {
  let timer = 0
  return (callback, ms) => {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

const collectSceneSection = () => {
  const arraySectionScenes = []

  $section.each(thisSection => {
    const currentSectionNumber = thisSection + 1
    const currentSectionClass = `${sectionClassJs}-${currentSectionNumber}`
    const $currentSection = $(currentSectionClass)
    const sectionHeight = $($currentSection).height()
    const $currentSectionDotClass = dotClassStatic + currentSectionNumber

    arraySectionScenes.push(() => {
      return (
        new ScrollMagic.Scene({
          triggerElement: currentSectionClass,
          duration: sectionHeight,
        })
          // add indicators (requires debug plugin)
          // !!! change module name for scroll magic if you want to use the Debug Plugin !!!
          // .addIndicators({
          //     name: `navigation ${currentSectionClass}`
          // })
          // add class toggle (active class for dots)
          .setClassToggle($currentSectionDotClass, classDotActive)
          // set cpntroller for each scene/section
          .addTo(controller)
      )
    })
  })
  return arraySectionScenes
}

// add scenes, as much as sections in the page, to the scrollMagic
const setScrollMagicScenes = () => {
  // count sections: return an array, named: 'arraySectionScenes' , with inside info about each section (as HEIGHT)
  const arraySectionScenes = collectSceneSection()

  // set a new empty array for active scenes. now empty. here below we will populate it
  const activeScenes = []

  // here we set the first trick. for each section we have (arraySectionScenes), we populate the array "activeScenes"
  // so magic scroll start working!!!
  arraySectionScenes.forEach(arraySectionScene => {
    if (typeof arraySectionScene === 'function') {
      // add the new scene
      const arraySectionSceneItem = arraySectionScene()
      // push it to our active scenes array
      activeScenes.push(arraySectionSceneItem)
    }
  })

  return activeScenes
}

// INIT nav dots
const startNavDots = () => {
  // start the scroll link logic thank to scroll plugin

  // SCROLLMAGIC : start at page load
  let activeScenes = setScrollMagicScenes()

  // TODO: move out as function!
  // TODO: DRY code here?
  // SCROLL MAGIC: at resize of windows re-init again
  $screen.resize(() => {
    delay(() => {
      // --- STEP 1: destroy ScrollMagic current data ---
      // destroy the scroll magic values (as HEIGHT/duration)
      activeScenes.forEach(scene => {
        // make sure scene wasn't null
        if (scene) {
          // destroy active scene
          scene.destroy(true)
        }
      })
      // !!! destroy also the previous array of active sections
      activeScenes = []

      // --- STEP 2: reinit ScrollMagic for resize loop ---
      // re init scroll magic
      const scrollMagicResize = setScrollMagicScenes()
      // !!! now, after scroll magic run at resize, we receive a new udpated array of active scenes with correct data.
      // here we change the name of the received variable to be ready for the next resize loop
      activeScenes = scrollMagicResize
    }, 250)
  })
}

// ============================================================================
// IMPLEMENTATION
// ============================================================================
startNavDots()
