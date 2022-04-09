/// <reference types="cypress" />

describe('Fill form', () => {
    it('Create quote', () => {
        cy.visit('/index.html');
        cy.get('[data-site="form"]').submit();
        cy.get('[data-cy="button"]').click();
    })

    it('Edit quote', () => {      
        cy.get('[data-cy="btn-edit"]').click();

        cy.get('[data-cy="pet"]').clear().type('New Hook');
        cy.get('[data-cy="button"]').click();

        cy.get('[data-cy="alert"]')
            .invoke('text')
            .should('equal', 'Editado correctamente');

        cy.get('[data-cy="alert"]')            
            .should('have.class', 'alert-success');
    })
})