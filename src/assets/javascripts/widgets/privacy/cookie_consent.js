import 'node_cookie_consent'

const linkUrl = '/policy'
const linkText = 'Got it'
const messageText = `This site uses some cookies. By clicking the button '${linkText}' you give your consent to use them.`

window.addEventListener('load', () => {
  window.cookieconsent.initialise({
    content: {
      message: messageText,
      dismiss: linkText,
      link: 'More info',
      href: linkUrl,
      target: '_self',
    },
    elements: {
      dismiss:
        '<a aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss btn btn-block">{{dismiss}}</a>',
    },
  })
})
