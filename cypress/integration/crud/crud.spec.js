/// <reference types="Cypress" />

describe('crud', function () {

  it('should open dashboard', () => {
    cy.visit('/');
    cy.url().should('include', '/dashboard');
  });
});
