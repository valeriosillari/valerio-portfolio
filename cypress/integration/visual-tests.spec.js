describe('Visual regression tests', () => {
  it('Should match previous screenshot "Home Page"', () => {
    cy.visit('/')
    cy.matchImageSnapshot()
  })
})
