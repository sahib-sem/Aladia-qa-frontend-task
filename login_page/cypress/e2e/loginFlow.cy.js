describe('Login Flow', () => {
    it('user with registered account should login', () => {
        cy.visit('/');
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy="email-form-title"]').should('be.visible');
        cy.get('[data-cy="input-field"]').clear('a');
        cy.get('[data-cy="input-field"]').type('accout@gmail.com');
        cy.get('[data-cy="btn"]').should('be.visible');
        cy.get('[data-cy="btn"]').click();
        cy.get('[data-cy="btn"]').should('be.visible');
        cy.get('[data-cy="password-prompt"]').should('be.visible');
        cy.get('[data-cy="input-field"]').clear('S');
        cy.get('[data-cy="input-field"]').type('S908098flkj@');
        cy.get('[data-cy="btn"]').should('be.visible');
        cy.get('[data-cy="btn"]').click();
        cy.should('be.visible');
        cy.get('[data-cy="welcome-message"]').should('be.visible');
        cy.get('[data-cy="btn"]').click();
        cy.should('be.visible');
        cy.get('.flex-1 > .text-base').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('email field validation', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('[data-cy="email-form-title"]').should('have.text', ' Enter your email ');
        cy.get('[data-cy="input-field"]').clear('re');
        cy.get('[data-cy="input-field"]').type('re');
        cy.get('[data-cy="input-error-message"]').should('have.text', 'Invalid email address');
        cy.get('[data-cy="input-field"]').clear('r');
        cy.get('[data-cy="input-error-message"]').should('have.text', '(*) required');
        cy.get('[data-cy="btn"]').click();
        cy.get('[data-cy="email-form-title"]').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });
});
  