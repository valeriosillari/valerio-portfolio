describe('My First Test', () => {
  it('Visits the App Homepage', () => {
    cy.visit('/')
  })
})

describe('My First Test', () => {
  it('Check if we got Main Title H1', () => {
    cy.get('.section-1 .title').should('have.text', 'Hello.')
  })
})

describe('ScreenshotTest', function() {
  it('takes a screenshot Home', function() {
    cy.screenshot('screenshots/screenshot-homepage')
  })
})
