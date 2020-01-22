/// <reference types="Cypress" />

describe('nav', () => {
  it('should navigate to dashboard, list of entries, create-entry and back to list of entries', () => {
    cy.visit('/');
    cy.url().should('include', '/dashboard');
    cy.get('#view-entries').click();
    cy.url().should('include', '/entries/list');
    cy.get('#create-entry').click();
    cy.url().should('include', '/entries/create-entry');
    cy.get('#cancel').click();
    cy.url().should('include', '/entries/list');
  });

  it('should navigate to view-entry, then to entry list', () => {
    cy.visit('/entries/list');
    cy.get(`#view-entry1`).click();
    cy.url().should('include', `/entries/view-entry/1`);
    cy.get('#back').click();
    cy.url().should('include', '/entries/list');
  });

  it('should navigate to view-entry, then update-entry then back to view-entry on cancel', () => {
    cy.visit('/entries/list');
    cy.get(`#view-entry1`).click();
    cy.url().should('include', `/entries/view-entry/1`);
    cy.get('#edit-entry').click();
    cy.url().should('include', '/entries/update-entry/1');
    cy.get('#cancel').click();
    cy.url().should('include', `/entries/view-entry/1`);
  });

});
