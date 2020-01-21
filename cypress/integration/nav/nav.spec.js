/// <reference types="Cypress" />

describe('nav', () => {
  it('should open dashboard', () => {
    cy.visit('http://localhost:4200/');
    cy.url().should('include', '/dashboard');
    cy.wait(1000);
  });

  it('should open list of entries', () => {
    cy.get('#view-entries').click();
    cy.url().should('include', '/entries/list');
  });

  it('should open create-entry page', () => {
    cy.get('#create-entry').click();
    cy.url().should('include', '/entries/create-entry');
  });

  it('should go back to list on cancel', () => {
    cy.get('#cancel').click();
    cy.url().should('include', '/entries/list');
  });

  it('should navigate to first entry in list', () => {
    cy.get('#entries-list').children().first().click();
    cy.url().should('include', '/entries/view-entry');
  });

  it('should navigate to update', () => {
    cy.url().then(val => {
      const entryId = Number(val[val.length - 1]);
      cy.get('#edit-entry').click();
      cy.url().should('include', `/entries/update-entry/${entryId}`);
    });
  });

  it('should navigate back to view if cancel is pressed', () => {
    cy.url().then(val => {
      const entryId = Number(val[val.length - 1]);
      cy.get('#cancel').click();
      cy.url().should('include', `/entries/view-entry/${entryId}`);
    });
  });
});
