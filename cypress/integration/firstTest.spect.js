/// <reference types="cypress" />

describe('Loading main page', () => {
    
    it('Loading main page in site', () => {
        cy.visit('http://127.0.0.1:5500/manage-appointments/index.html');
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
        // cy.get('h1').should('exist');

        cy.get('[data-cy="title"]').should('exist');
    });

});