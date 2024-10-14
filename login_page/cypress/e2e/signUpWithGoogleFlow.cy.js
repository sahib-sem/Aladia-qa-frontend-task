/* ==== Test Created with Cypress Studio ==== */
it('sign up with google flow', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('/');
  cy.get('[data-cy="email-form-title"]').should('have.text', ' Enter your email ');
  cy.get('[data-cy="signup-google"]').click();
  cy.get('.flex-1 > .w-20').should('be.visible');
  cy.get('.relative > [data-cy="btn"]').click();
  cy.get(':nth-child(1) > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').should('be.visible');
  cy.get(':nth-child(1) > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('N');
  cy.get(':nth-child(1) > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('New@1234');
  cy.get(':nth-child(2) > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('N');
  cy.get(':nth-child(2) > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('New@1234');
  cy.get('.overflow-hidden > [data-cy="btn"]').click();
  cy.get('[data-cy="btn"]').should('be.visible');
  /* ==== End Cypress Studio ==== */
});