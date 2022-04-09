/// <reference types="cypress" />

describe('Validate form', () => {
    it('Submit to form', () => {
        cy.visit('http://127.0.0.1:5500/manage-appointments/index.html');
        cy.get('[data-site="form"]').submit();
    })
})