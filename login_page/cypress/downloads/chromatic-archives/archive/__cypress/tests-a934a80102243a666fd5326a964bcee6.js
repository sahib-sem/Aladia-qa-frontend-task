/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./cypress/e2e/signUpFlow.cy.js ***!
  \**************************************/


/* ==== Test Created with Cypress Studio ==== */
it('sign up flow', function () {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwRmxvdy5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0FBLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBVztFQUM1QkMsRUFBRSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDOztFQUViO0VBQ0FELEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7RUFDaEZILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDNUNKLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLElBQUksQ0FBQyxlQUFlLENBQUM7RUFDdkRMLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDOUNILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0VBQ2pDTixFQUFFLENBQUNFLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQzdESCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQztFQUNoQ04sRUFBRSxDQUFDRSxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQztFQUN0RUosRUFBRSxDQUFDRSxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQ0csSUFBSSxDQUFDLEtBQUssQ0FBQztFQUN0RUwsRUFBRSxDQUFDRSxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQztFQUN6RUosRUFBRSxDQUFDRSxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUMxRUwsRUFBRSxDQUFDRSxHQUFHLENBQUMsNEZBQTRGLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUMvR0osRUFBRSxDQUFDRSxHQUFHLENBQUMsNEZBQTRGLENBQUMsQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO0VBQzNITCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxvR0FBb0csQ0FBQyxDQUFDRSxLQUFLLENBQUMsS0FBSyxDQUFDO0VBQ3pISixFQUFFLENBQUNFLEdBQUcsQ0FBQyxvR0FBb0csQ0FBQyxDQUFDRyxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQzdITCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQzlDSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQztFQUNqQ04sRUFBRSxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDdkNILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0VBQ2xETixFQUFFLENBQUNFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUNsREosRUFBRSxDQUFDRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUM5Q0gsRUFBRSxDQUFDRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7RUFDakNOLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDOUNILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0VBQzNDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXh0LWFwcC8uL2N5cHJlc3MvZTJlL3NpZ25VcEZsb3cuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PSBUZXN0IENyZWF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG5pdCgnc2lnbiB1cCBmbG93JywgZnVuY3Rpb24oKSB7XG4gIGN5LnZpc2l0KCcvJyk7XG5cbiAgLyogPT09PSBHZW5lcmF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG4gIGN5LmdldCgnW2RhdGEtY3k9XCJlbWFpbC1mb3JtLXRpdGxlXCJdJykuc2hvdWxkKCdoYXZlLnRleHQnLCAnIEVudGVyIHlvdXIgZW1haWwgJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJpbnB1dC1maWVsZFwiXScpLmNsZWFyKCduJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJpbnB1dC1maWVsZFwiXScpLnR5cGUoJ25ld0BnbWFpbC5jb20nKTtcbiAgY3kuZ2V0KCdbZGF0YS1jeT1cImJ0blwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwiYnRuXCJdJykuY2xpY2soKTtcbiAgY3kuZ2V0KCcuZ2FwLTYgPiA6bnRoLWNoaWxkKDIpID4gLm1iLTEnKS5zaG91bGQoJ2JlLnZpc2libGUnKTtcbiAgY3kuZ2V0KCcuZ2FwLTIgPiAuZmxleCcpLmNsaWNrKCk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJuYW1lLWZpZWxkXCJdID4gW2RhdGEtY3k9XCJpbnB1dC1maWVsZFwiXScpLmNsZWFyKCduZScpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwibmFtZS1maWVsZFwiXSA+IFtkYXRhLWN5PVwiaW5wdXQtZmllbGRcIl0nKS50eXBlKCduZXcnKTtcbiAgY3kuZ2V0KCdbZGF0YS1jeT1cInN1cm5hbWUtZmllbGRcIl0gPiBbZGF0YS1jeT1cImlucHV0LWZpZWxkXCJdJykuY2xlYXIoJ3VzJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJzdXJuYW1lLWZpZWxkXCJdID4gW2RhdGEtY3k9XCJpbnB1dC1maWVsZFwiXScpLnR5cGUoJ3VzZXInKTtcbiAgY3kuZ2V0KCdbZGF0YS1jeT1cInBhc3N3b3JkLWZpZWxkXCJdID4gLm1iLTEgPiBbZGF0YS1jeT1cImlucHV0LWNvbnRhaW5lclwiXSA+IFtkYXRhLWN5PVwiaW5wdXQtZmllbGRcIl0nKS5jbGVhcignUycpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwicGFzc3dvcmQtZmllbGRcIl0gPiAubWItMSA+IFtkYXRhLWN5PVwiaW5wdXQtY29udGFpbmVyXCJdID4gW2RhdGEtY3k9XCJpbnB1dC1maWVsZFwiXScpLnR5cGUoJ1Nsa2pkZmxrakBsa2o0Jyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJjb21maXJtLXBhc3N3b3JkLWZpZWxkXCJdID4gLm1iLTEgPiBbZGF0YS1jeT1cImlucHV0LWNvbnRhaW5lclwiXSA+IFtkYXRhLWN5PVwiaW5wdXQtZmllbGRcIl0nKS5jbGVhcignbGtqJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJjb21maXJtLXBhc3N3b3JkLWZpZWxkXCJdID4gLm1iLTEgPiBbZGF0YS1jeT1cImlucHV0LWNvbnRhaW5lclwiXSA+IFtkYXRhLWN5PVwiaW5wdXQtZmllbGRcIl0nKS50eXBlKCdsa2o0M1NGJCcpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwiYnRuXCJdJykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gIGN5LmdldCgnW2RhdGEtY3k9XCJidG5cIl0nKS5jbGljaygpO1xuICBjeS5nZXQoJy50ZXh0LWxnJykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gIGN5LmdldCgnLmp1c3RpZnktYmV0d2VlbiA+IDpudGgtY2hpbGQoMSknKS5jbGljaygpO1xuICBjeS5nZXQoJy5qdXN0aWZ5LWJldHdlZW4gPiA6bnRoLWNoaWxkKDYpJykuY2xlYXIoKTtcbiAgY3kuZ2V0KCdbZGF0YS1jeT1cImJ0blwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwiYnRuXCJdJykuY2xpY2soKTtcbiAgY3kuZ2V0KCdbZGF0YS1jeT1cImJ0blwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpO1xuICBjeS5nZXQoJ1tkYXRhLWN5PVwibG9nb3V0LWJ1dHRvblwiXScpLmNsaWNrKCk7XG4gIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbn0pOyJdLCJuYW1lcyI6WyJpdCIsImN5IiwidmlzaXQiLCJnZXQiLCJzaG91bGQiLCJjbGVhciIsInR5cGUiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=