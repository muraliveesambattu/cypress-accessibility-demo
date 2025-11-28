describe('Accessibility Tests for Form', () => {
  beforeEach(() => {
    // Visit the application before each test
    cy.visit('/');
    // Inject axe-core into the page
    cy.injectAxe();
  });

  // describe('Form Labels and Input Association', () => {
  //   it('Should have labels for all inputs', () => {
  //     // Check for accessibility violations related to labels
  //     cy.checkA11y(null, {
  //       rules: {
  //         'label': { enabled: true }
  //       }
  //     });
  //   });

  //   it('Should have proper label-for attribute associations', () => {
  //     // Verify username input has proper label association
  //     cy.get('#username').should('have.attr', 'id', 'username');
  //     cy.get('label[for="username"]').should('exist');
  //     cy.get('label[for="username"]').should('contain', 'Username');

  //     // Verify email input has proper label association
  //     cy.get('#email').should('have.attr', 'id', 'email');
  //     cy.get('label[for="email"]').should('exist');
  //     cy.get('label[for="email"]').should('contain', 'Email');

  //     // Verify labels are properly associated with inputs
  //     cy.get('label[for="username"]').click();
  //     cy.focused().should('have.attr', 'id', 'username');

  //     cy.get('label[for="email"]').click();
  //     cy.focused().should('have.attr', 'id', 'email');
  //   });
  // });

  it('Should detect accessibility violations', () => {
    // Check for accessibility violations
    cy.checkA11y();
  });

  // describe('Form Labels and Input Association', () => {
  //   it('It Should have Labels for All Input fields', () => {
  //     cy.checkA11y(null, {
  //       rules: {
  //         'label': { enabled: true }
  //       }
  //     })
  //   })
  //   it('Should have proper label-for attribute associations', () => {
  //     cy.get("#username").should('have.attr', 'id', 'username');
  //     cy.get('#email').should('have.attr', 'id', 'email')
  //   })
  // })
});


describe('Accessibility Tests for Form',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })
})