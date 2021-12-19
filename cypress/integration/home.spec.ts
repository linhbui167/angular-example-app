
describe('Home page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
  })
  it('should change view', () => {
    cy.visit('/')
    cy.get('.view-type').click()
    cy.get('#article-list').should('have.class', 'is-row')
    cy.get('.view-type').click()
    cy.get('#article-list').should('have.class', 'is-grid')
  })
  it('should scroll to top', () => {
    cy.scrollTo('bottom')
    cy.get('.backtotop__wrap').click()
    cy.window().its('scrollY').should('equal', 0)
  })
})
