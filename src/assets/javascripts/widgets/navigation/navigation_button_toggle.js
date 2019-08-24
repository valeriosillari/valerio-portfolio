import $ from 'jquery'

const $menuListArea = $('.js-nav-menu')
const $menuButton = $('.nav-toggle-button')
const classActive = 'nav-is-active'

const menuButtonNavToggle = () => {
  // set logic for menu button at click (toggle)
  $menuButton.on('click', el => {
    el.preventDefault()

    const currentItem = el.currentTarget

    // when you click a nav link, you close the navi menu (mobile)
    const isNavItemClicked = () => {
      // at click of element, start scroll to logic
      $('.js-dot-item').on('click', e => {
        e.preventDefault()
        // remove active class
        $menuListArea.removeClass(classActive)
        $menuButton.removeClass(classActive)
      })
    }

    // set button animation
    if (currentItem.classList.contains(classActive)) {
      currentItem.classList.remove(classActive)
    } else {
      currentItem.classList.add(classActive)
    }

    // set logic for menu (show/hide)
    if ($menuListArea.hasClass(classActive)) {
      $menuListArea.removeClass(classActive)
    } else {
      $menuListArea.addClass(classActive)
    }

    isNavItemClicked()
  })
}

// implementation
menuButtonNavToggle()
