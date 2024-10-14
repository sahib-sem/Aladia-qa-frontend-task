/* ==== Test Created with Cypress Studio ==== */
it('sign up flow', function() {
  cy.visit('/');

  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-cy="email-form-title"]').should('have.text', ' Enter your email ');
  cy.get('[data-cy="input-field"]').clear('n');
  cy.get('[data-cy="input-field"]').type('new@gmail.com');
  cy.get('[data-cy="btn"]').should('be.visible');
  cy.get('[data-cy="btn"]').click();
  cy.get('.gap-6 > :nth-child(2) > .mb-1').should('be.visible');
  cy.get('.gap-2 > .flex').click();
  cy.get('[data-cy="name-field"] > [data-cy="input-field"]').clear('ne');
  cy.get('[data-cy="name-field"] > [data-cy="input-field"]').type('new');
  cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('us');
  cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('user');
  cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('S');
  cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Slkjdflkj@lkj4');
  cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('lkj');
  cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('lkj43SF$');
  cy.get('[data-cy="btn"]').should('be.visible');
  cy.get('[data-cy="btn"]').click();
  cy.get('.text-lg').should('be.visible');
  cy.get('.justify-between > :nth-child(1)').click();
  cy.get('.justify-between > :nth-child(6)').clear();
  cy.get('[data-cy="btn"]').should('be.visible');
  cy.get('[data-cy="btn"]').click();
  cy.get('[data-cy="btn"]').should('be.visible');
  cy.get('[data-cy="logout-button"]').click();
  /* ==== End Cypress Studio ==== */
});