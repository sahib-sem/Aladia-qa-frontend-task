/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./cypress/e2e/signUpWithGoogleFlow.cy.js ***!
  \************************************************/


/* ==== Test Created with Cypress Studio ==== */
it('sign up with google flow', function () {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwV2l0aEdvb2dsZUZsb3cuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsWUFBVztFQUN4QztFQUNBQyxFQUFFLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDYkQsRUFBRSxDQUFDRSxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQztFQUNoRkgsRUFBRSxDQUFDRSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7RUFDM0NKLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDOUNILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBQzdDSixFQUFFLENBQUNFLEdBQUcsQ0FBQywrRUFBK0UsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQzVHSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywrRUFBK0UsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2xHTCxFQUFFLENBQUNFLEdBQUcsQ0FBQywrRUFBK0UsQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ3hHTixFQUFFLENBQUNFLEdBQUcsQ0FBQywrRUFBK0UsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2xHTCxFQUFFLENBQUNFLEdBQUcsQ0FBQywrRUFBK0UsQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ3hHTixFQUFFLENBQUNFLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUNwREosRUFBRSxDQUFDRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUM5QztBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9jeXByZXNzL2UyZS9zaWduVXBXaXRoR29vZ2xlRmxvdy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09IFRlc3QgQ3JlYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbml0KCdzaWduIHVwIHdpdGggZ29vZ2xlIGZsb3cnLCBmdW5jdGlvbigpIHtcbiAgLyogPT09PSBHZW5lcmF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG4gIGN5LnZpc2l0KCcvJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJlbWFpbC1mb3JtLXRpdGxlXCJdJykuc2hvdWxkKCdoYXZlLnRleHQnLCAnIEVudGVyIHlvdXIgZW1haWwgJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJzaWdudXAtZ29vZ2xlXCJdJykuY2xpY2soKTtcbiAgY3kuZ2V0KCcuZmxleC0xID4gLnctMjAnKS5zaG91bGQoJ2JlLnZpc2libGUnKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiBbZGF0YS1jeT1cImJ0blwiXScpLmNsaWNrKCk7XG4gIGN5LmdldCgnOm50aC1jaGlsZCgxKSA+IC5tYi0xID4gW2RhdGEtY3k9XCJpbnB1dC1jb250YWluZXJcIl0gPiBbZGF0YS1jeT1cImlucHV0LWZpZWxkXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gIGN5LmdldCgnOm50aC1jaGlsZCgxKSA+IC5tYi0xID4gW2RhdGEtY3k9XCJpbnB1dC1jb250YWluZXJcIl0gPiBbZGF0YS1jeT1cImlucHV0LWZpZWxkXCJdJykuY2xlYXIoJ04nKTtcbiAgY3kuZ2V0KCc6bnRoLWNoaWxkKDEpID4gLm1iLTEgPiBbZGF0YS1jeT1cImlucHV0LWNvbnRhaW5lclwiXSA+IFtkYXRhLWN5PVwiaW5wdXQtZmllbGRcIl0nKS50eXBlKCdOZXdAMTIzNCcpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoMikgPiAubWItMSA+IFtkYXRhLWN5PVwiaW5wdXQtY29udGFpbmVyXCJdID4gW2RhdGEtY3k9XCJpbnB1dC1maWVsZFwiXScpLmNsZWFyKCdOJyk7XG4gIGN5LmdldCgnOm50aC1jaGlsZCgyKSA+IC5tYi0xID4gW2RhdGEtY3k9XCJpbnB1dC1jb250YWluZXJcIl0gPiBbZGF0YS1jeT1cImlucHV0LWZpZWxkXCJdJykudHlwZSgnTmV3QDEyMzQnKTtcbiAgY3kuZ2V0KCcub3ZlcmZsb3ctaGlkZGVuID4gW2RhdGEtY3k9XCJidG5cIl0nKS5jbGljaygpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwiYnRuXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbn0pOyJdLCJuYW1lcyI6WyJpdCIsImN5IiwidmlzaXQiLCJnZXQiLCJzaG91bGQiLCJjbGljayIsImNsZWFyIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=