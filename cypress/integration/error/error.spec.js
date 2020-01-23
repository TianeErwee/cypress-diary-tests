/// <reference types="Cypress" />

describe('error', function () {

  it('should log an error if network request fails', () => {
    cy.visit('/entries/view-entry/99');
    cy.get('#entry-exists').should('not.exist');
    cy.get('#entry-doesnt-exist').should('contain.text', 'Entry does not exist');
  });

});
