describe('My First Test', function() {
  it('Visits the App Homepage', function() {
    cy.visit('http://localhost:9000')
  })
})

describe('My First Test', function() {
  it('Check if we got Main Title H1', function() {
    cy.get('.section-1 .title').should('have.text', 'Hello.')
  })
})
