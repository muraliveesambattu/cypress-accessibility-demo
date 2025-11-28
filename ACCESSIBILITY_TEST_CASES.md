# Accessibility Test Cases for Form

## 📋 Test Cases You Can Write

### 1. **Form Labels & Input Association**
```javascript
it('Should have labels associated with all form inputs', () => {
  cy.checkA11y(null, {
    rules: {
      'label': { enabled: true }
    }
  });
});

it('Should verify label-for associations', () => {
  cy.get('#username').should('have.attr', 'id', 'username');
  cy.get('label[for="username"]').should('exist');
  cy.get('#email').should('have.attr', 'id', 'email');
  cy.get('label[for="email"]').should('exist');
});
```

### 2. **Required Fields**
```javascript
it('Should mark required fields with aria-required', () => {
  cy.get('#username').should('have.attr', 'required');
  cy.get('#email').should('have.attr', 'required');
  cy.get('#username').should('have.attr', 'aria-required', 'true');
  cy.get('#email').should('have.attr', 'aria-required', 'true');
});
```

### 3. **Color Contrast**
```javascript
it('Should have sufficient color contrast for all text', () => {
  cy.checkA11y(null, {
    rules: {
      'color-contrast': { enabled: true }
    }
  });
});

it('Should have sufficient contrast for button text', () => {
  cy.get('button').should('have.css', 'background-color');
  cy.get('button').should('have.css', 'color');
  // Verify contrast ratio programmatically if needed
});
```

### 4. **Keyboard Navigation**
```javascript
it('Should be navigable using only keyboard', () => {
  cy.get('body').tab();
  cy.focused().should('have.attr', 'id', 'username');
  
  cy.focused().tab();
  cy.focused().should('have.attr', 'id', 'email');
  
  cy.focused().tab();
  cy.focused().should('have.attr', 'type', 'submit');
});

it('Should have visible focus indicators', () => {
  cy.get('#username').focus();
  cy.get('#username').should('have.css', 'outline').and('not.equal', 'none');
  
  cy.get('button').focus();
  cy.get('button').should('have.css', 'outline').and('not.equal', 'none');
});
```

### 5. **Form Structure & Semantics**
```javascript
it('Should have proper form element', () => {
  cy.get('form').should('exist');
  cy.get('form').should('have.attr', 'id', 'userForm');
});

it('Should have proper input types', () => {
  cy.get('#username').should('have.attr', 'type', 'text');
  cy.get('#email').should('have.attr', 'type', 'email');
});
```

### 6. **ARIA Attributes**
```javascript
it('Should have proper ARIA attributes', () => {
  cy.checkA11y(null, {
    rules: {
      'aria-allowed-attr': { enabled: true },
      'aria-required-attr': { enabled: true },
      'aria-valid-attr-value': { enabled: true }
    }
  });
});
```

### 7. **Page Structure**
```javascript
it('Should have main landmark', () => {
  cy.get('main').should('exist');
  cy.checkA11y(null, {
    rules: {
      'landmark-one-main': { enabled: true }
    }
  });
});

it('Should have h1 heading', () => {
  cy.get('h1').should('exist');
  cy.get('h1').should('contain', 'User Registration');
  cy.checkA11y(null, {
    rules: {
      'page-has-heading-one': { enabled: true }
    }
  });
});
```

### 8. **Button Accessibility**
```javascript
it('Should have accessible button name', () => {
  cy.get('button').should('contain', 'Submit');
  cy.get('button').should('have.attr', 'type', 'submit');
  cy.checkA11y(null, {
    rules: {
      'button-name': { enabled: true }
    }
  });
});

it('Should have descriptive button text', () => {
  cy.get('button[type="submit"]').should('have.text', 'Submit');
});
```

### 9. **Input Validation & Error Messages**
```javascript
it('Should show error messages when form is submitted empty', () => {
  cy.get('button[type="submit"]').click();
  // Check for HTML5 validation messages
  cy.get('#username:invalid').should('exist');
  cy.get('#email:invalid').should('exist');
});

it('Should have accessible error announcements', () => {
  // After adding error messages, test with:
  cy.checkA11y(null, {
    rules: {
      'aria-required-attr': { enabled: true }
    }
  });
});
```

### 10. **Focus Management**
```javascript
it('Should manage focus properly', () => {
  cy.get('#username').focus();
  cy.focused().should('have.attr', 'id', 'username');
  
  cy.get('#email').focus();
  cy.focused().should('have.attr', 'id', 'email');
});
```

### 11. **Screen Reader Compatibility**
```javascript
it('Should be readable by screen readers', () => {
  cy.checkA11y(null, {
    rules: {
      'aria-hidden-focus': { enabled: true },
      'aria-required-children': { enabled: true }
    }
  });
});
```

### 12. **Form Fieldset & Grouping** (if you add fieldsets)
```javascript
it('Should group related fields in fieldsets', () => {
  // If you add fieldsets later:
  cy.get('fieldset').should('exist');
  cy.get('legend').should('exist');
});
```

### 13. **Input Placeholder vs Label**
```javascript
it('Should not rely solely on placeholders', () => {
  // Verify labels exist (not just placeholders)
  cy.get('#username').should('not.have.attr', 'placeholder');
  cy.get('label[for="username"]').should('exist');
});
```

### 14. **Form Submission Accessibility**
```javascript
it('Should announce form submission status', () => {
  // After adding success/error messages:
  cy.get('button[type="submit"]').click();
  // Check for ARIA live regions or status messages
});
```

### 15. **Comprehensive Accessibility Check**
```javascript
it('Should pass all accessibility checks', () => {
  cy.checkA11y(null, null, (violations) => {
    if (violations.length > 0) {
      cy.log(`Found ${violations.length} accessibility violation(s):`);
      violations.forEach((violation, index) => {
        cy.log(`\n${index + 1}. ${violation.id}: ${violation.description}`);
        cy.log(`   Impact: ${violation.impact}`);
        cy.log(`   Nodes affected: ${violation.nodes.length}`);
      });
    }
  });
});
```

### 16. **Specific Rule Testing**
```javascript
it('Should test specific WCAG rules', () => {
  cy.checkA11y(null, {
    rules: {
      'label': { enabled: true },
      'color-contrast': { enabled: true },
      'button-name': { enabled: true },
      'page-has-heading-one': { enabled: true },
      'landmark-one-main': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'keyboard': { enabled: true }
    }
  });
});
```

### 17. **Form Interaction Tests**
```javascript
it('Should maintain accessibility during form interaction', () => {
  cy.get('#username').type('testuser');
  cy.get('#email').type('test@example.com');
  cy.checkA11y(); // Check after interaction
});
```

### 18. **Mobile/Responsive Accessibility**
```javascript
it('Should be accessible on mobile viewport', () => {
  cy.viewport('iphone-6');
  cy.checkA11y();
});
```

### 19. **Form Reset Accessibility**
```javascript
it('Should have accessible reset functionality', () => {
  // If you add a reset button:
  cy.get('button[type="reset"]').should('exist');
  cy.get('button[type="reset"]').should('have.attr', 'aria-label');
});
```

### 20. **Input Type Validation**
```javascript
it('Should use correct input types for better accessibility', () => {
  cy.get('#email').should('have.attr', 'type', 'email');
  // Email type provides better mobile keyboard and validation
});
```

---

## 🎯 Recommended Test Suite Structure

```javascript
describe('Form Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  describe('Form Structure', () => {
    it('Should have main landmark');
    it('Should have h1 heading');
    it('Should have proper form element');
  });

  describe('Form Labels', () => {
    it('Should have labels for all inputs');
    it('Should have proper label-for associations');
  });

  describe('Form Inputs', () => {
    it('Should mark required fields');
    it('Should use correct input types');
    it('Should have proper ARIA attributes');
  });

  describe('Color & Contrast', () => {
    it('Should have sufficient color contrast');
  });

  describe('Keyboard Navigation', () => {
    it('Should be navigable with keyboard');
    it('Should have visible focus indicators');
  });

  describe('Button Accessibility', () => {
    it('Should have accessible button name');
    it('Should have descriptive button text');
  });

  describe('Comprehensive Check', () => {
    it('Should pass all accessibility checks');
  });
});
```

---

## 📊 Test Coverage Summary

- ✅ Form Labels & Associations
- ✅ Required Fields
- ✅ Color Contrast
- ✅ Keyboard Navigation
- ✅ Focus Management
- ✅ ARIA Attributes
- ✅ Page Structure
- ✅ Button Accessibility
- ✅ Form Semantics
- ✅ Screen Reader Compatibility
- ✅ Responsive Accessibility
- ✅ Form Interactions

---

## 💡 Tips

1. **Start with comprehensive check**: Use `cy.checkA11y()` first to find all issues
2. **Then test specific rules**: Test individual rules to understand each violation
3. **Test interactions**: Check accessibility during and after user interactions
4. **Test different viewports**: Ensure accessibility on mobile and desktop
5. **Use detailed callbacks**: Log violations for better debugging

