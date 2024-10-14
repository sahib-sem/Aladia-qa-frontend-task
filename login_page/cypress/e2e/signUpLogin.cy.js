describe('template spec', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('user should be able to sign up using new account and then login with the new account', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="email-form-title"]').should('be.visible');
    cy.get('[data-cy="input-field"]').clear('ne');
    cy.get('[data-cy="input-field"]').type('new@gmail.com');
    cy.get('[data-cy="btn"]').click();
    cy.get('.gap-6 > :nth-child(2) > .mb-1').should('be.visible');
    cy.get('.gap-2 > .flex').click();
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').clear('n');
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').type('new');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('us');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('user');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('S');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Slkjlkj');
    cy.get('[data-cy="password-field"] > .h-4 > :nth-child(1) > .text-\\[\\#E54E4E\\]').should('have.text', '8 character minimum');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('SlkjlkjT');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('SlkjlkjT');
    cy.get('.text-\\[\\#e1c361\\]').should('have.text', 'Number required');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('SlkjlkjT4');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('SlkjlkjT4');
    cy.get('.text-\\[\\#e3e469\\]').should('have.text', 'Symbol required (@$!%*?&)');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('SlkjlkjT4@');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('SlkjlkjT4@');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('l');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('lkjflkj4F@');
    cy.get('[data-cy="btn"]').click();
    cy.get('.text-lg').should('have.text', 'new user');
    cy.get('.justify-between > :nth-child(1)').click();
    cy.get('.justify-between > :nth-child(6)').clear();
    cy.get('.justify-between > :nth-child(6)').type('4');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="welcome-message"]').should('be.visible');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="input-field"]').clear('n');
    cy.get('[data-cy="input-field"]').type('new@gmail.com');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="password-prompt"]').should('have.text', 'Enter your password');
    cy.get('[data-cy="input-field"]').clear('S');
    cy.get('[data-cy="input-field"]').type('S1lkjlkj$');
    cy.get('[data-cy="btn"]').click();
    /* ==== End Cypress Studio ==== */
  });
})