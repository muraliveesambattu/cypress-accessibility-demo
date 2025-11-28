describe('Accessibility Tests for CRUD Application', () => {
  beforeEach(() => {
    // Visit the application before each test
    cy.visit('/');
    // Inject axe-core into the page
    cy.injectAxe();
  });

  it('Should have no accessibility violations on page load', () => {
    // Check for accessibility violations
    cy.checkA11y();
  });

  it('Should detect missing form labels', () => {
    // This test will fail because inputs don't have labels
    cy.checkA11y(null, {
      rules: {
        'label': { enabled: true }
      }
    });
  });

  it('Should detect color contrast issues', () => {
    // This test will detect poor color contrast
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: true }
      }
    });
  });

  it('Should detect missing alt text on images', () => {
    // This test will detect images without alt text
    cy.checkA11y(null, {
      rules: {
        'image-alt': { enabled: true }
      }
    });
  });

  it('Should detect missing ARIA labels and landmarks', () => {
    // This test will detect missing ARIA attributes
    cy.checkA11y(null, {
      rules: {
        'aria-allowed-attr': { enabled: true },
        'landmark-one-main': { enabled: true },
        'region': { enabled: true }
      }
    });
  });

  it('Should detect keyboard navigation issues', () => {
    // Check for focus management and keyboard accessibility
    cy.checkA11y(null, {
      rules: {
        'focus-order-semantics': { enabled: true },
        'focusable-content': { enabled: true },
        'keyboard': { enabled: true }
      }
    });
  });

  it('Should detect heading hierarchy issues', () => {
    // Check for proper heading structure
    cy.checkA11y(null, {
      rules: {
        'heading-order': { enabled: true }
      }
    });
  });

  it('Should detect all accessibility issues with detailed report', () => {
    // Comprehensive accessibility check with callback for detailed reporting
    cy.checkA11y(null, null, (violations) => {
      if (violations.length > 0) {
        cy.log(`Found ${violations.length} accessibility violation(s):`);
        violations.forEach((violation, index) => {
          cy.log(`\n${index + 1}. ${violation.id}: ${violation.description}`);
          cy.log(`   Impact: ${violation.impact}`);
          cy.log(`   Nodes affected: ${violation.nodes.length}`);
          violation.nodes.forEach((node, nodeIndex) => {
            cy.log(`   - Node ${nodeIndex + 1}: ${node.html}`);
          });
        });
      }
    });
  });

  it('Should test accessibility after adding an item', () => {
    // Fill form and submit
    cy.get('#itemName').type('Test Item');
    cy.get('#itemDescription').type('This is a test description');
    cy.get('#itemStatus').select('active');
    cy.get('button[type="submit"]').click();

    // Wait for the item to be added
    cy.wait(500);

    // Check accessibility after interaction
    cy.checkA11y();
  });

  it('Should test accessibility when editing an item', () => {
    // Wait for items to load
    cy.wait(1000);

    // Click edit button on first item if it exists
    cy.get('body').then(($body) => {
      if ($body.find('.item-card').length > 0) {
        cy.get('.item-card').first().find('button').contains('Edit').click();
        cy.wait(500);
        cy.checkA11y();
      }
    });
  });
});

