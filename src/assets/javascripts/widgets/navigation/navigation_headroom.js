import Headroom from 'node_headroom'

// grab an element
const headroomElement = document.querySelector('.js-headroom')

// initialise
if (headroomElement) {
  new Headroom(headroomElement).init()
}
