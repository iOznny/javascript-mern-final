/// <reference types="cypress" />

describe('Delete', () => {
    it('Create quote', () => {
        cy.visit('/index.html');
        cy.get('[data-site="form"]').submit();
        cy.get('[data-cy="button"]').click();

        // cy.screenshot();
    })

    it('Delete quote', () => {
        cy.get('[data-cy="btn-delete"]').click();
    })
})