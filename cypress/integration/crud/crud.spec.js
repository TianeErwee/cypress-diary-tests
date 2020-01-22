/// <reference types="Cypress" />

describe('crud', function () {

  [
    {id: 4, title: "First entry", content: "Content of first entry"},
    {id: 5, title: "Second entry", content: "Content second entry"},
    {id: 6, title: "Third entry", content: "Content third entry"}
  ].forEach((entry) => {
    it('should create an entry', () => {
      cy.visit('/entries/list');
      cy.get('#create-entry').click();
      cy.get('#title-input').type(`${entry.title}`);
      cy.get('#content-input').type(`${entry.content}`);
      cy.get('#submit-entry').click();
      cy.url().should('include', '/entries/list');
      cy.get(`#view-entry${entry.id}`)
        .should('exist')
        .children()
        .should('contain.text', entry.title)
        .should('contain.text', entry.content);
    });
  });

  it('should delete entry that is to be deleted from list', () => {
    cy.visit('/entries/list');
    cy.get('#delete-entry2').click();
    cy.get(`#view-entry2`)
      .should('not.exist');
  });

  it('should delete entry that is to be deleted from view', () => {
    cy.visit('/entries/list');
    cy.get(`#view-entry3`).click();
    cy.url().should('include', `/entries/view-entry/3`);
    cy.get('#delete-entry').click();
    cy.url().should('include', '/entries/list');
    cy.get(`#view-entry3`)
      .should('not.exist');
  });

  it('should update entry that is to be updated', () => {
    cy.visit('/entries/list');
    cy.get(`#view-entry1`).click();
    cy.url().should('include', `/entries/view-entry/1`);
    cy.get('#edit-entry').click();
    cy.url().should('include', 'entries/update-entry/1');
    cy.get('#title-input').clear().type('Updated title');
    cy.get('#content-input').clear().type('Updated content');
    cy.get('#submit-entry').click();
    cy.url().should('include', '/entries/list');
    cy.get(`#view-entry1`)
      .should('exist')
      .children()
      .should('contain.text', 'Updated title')
      .should('not.contain.text', 'entry')
      .should('contain.text', 'Updated content');
  });
});
