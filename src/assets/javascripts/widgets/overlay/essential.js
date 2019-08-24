import $ from 'jquery'
import 'node_fancybox_full'

$('[data-fancybox]').fancybox({
  // Enable infinite gallery navigation
  loop: true,
  // timing
  speed: 250,
  // animation between slides
  transitionEffect: 'slide',
  // close button
  smallBtn: false,
  // What buttons should appear in the top right corner.
  buttons: ['close'],
  // Should display counter at the top left corner
  infobar: false,
})
