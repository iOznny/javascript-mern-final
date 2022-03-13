/// <reference types="cypress" />

describe('Loading main page', () => {
    
    it('Loading main page in site', () => {
        cy.visit('http://127.0.0.1:5500/manage-appointments/index.html');

        // Checking the element and text
        cy.contains('[data-cy="title"]', 'Administrador de Pacientes de Veterinaria');
        // cy.get('h1').should('exist');

        // Checking exists element
        cy.get('[data-cy="title"]').should('exist');

        // Checking exists element and content specific text
        cy.get('[data-cy="title"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        // Checking text
        cy.get('[data-cy="quote-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        // Not equal
        cy.get('[data-cy="quote-heading"]')
            .invoke('text')
            .should('not.equal', 'Demo');
    });

});