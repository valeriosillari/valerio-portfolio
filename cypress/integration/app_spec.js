describe('My First Test', () => {
  it('Visits the App Homepage', () => {
    cy.visit('http://localhost:9000')
  })
})

describe('My First Test', () => {
  it('Check if we got Main Title H1', () => {
    cy.get('.section-1 .title').should('have.text', 'Hello.')
  })
})
