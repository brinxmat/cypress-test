describe('My First Test', function() {
  it('Visits the homepage', function() {
    cy.visit('https://www.bibsys.no/en/')
    cy.title().should('eq', 'BIBSYS | Vi gjør kunnskap tilgjengelig')
  })
})
