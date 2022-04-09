/// <reference types="cypress" />

describe('Fill form', () => {
    it('Create quote', () => {
        cy.visit('/index.html');
       
        cy.get('[data-cy="pet"]').type('Hook');
        cy.get('[data-cy="owner"]').type('Demo');
        cy.get('[data-cy="phone"]').type('1234567890');
        cy.get('[data-cy="date"]').type('2022-03-01');
        cy.get('[data-cy="hour"]').type('12:00');
        cy.get('[data-cy="symptom"]').type('Mucho sueño');

        cy.get('[data-cy="button"]').click();
    })
})