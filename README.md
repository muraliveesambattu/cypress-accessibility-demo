# Cypress Accessibility Demo - CRUD Application

A simple Node.js CRUD application with intentional accessibility issues, configured with Cypress accessibility testing using cypress-axe.

## Features

- Express.js REST API with CRUD operations
- Simple HTML frontend with accessibility issues
- Cypress accessibility tests using cypress-axe

## Accessibility Issues Included

The application intentionally includes several accessibility issues for testing purposes:

1. **Missing Form Labels** - Input fields don't have associated labels
2. **Poor Color Contrast** - Header text has low contrast against background
3. **Missing Alt Text** - Images lack alt attributes
4. **Missing ARIA Labels** - No ARIA landmarks or labels
5. **Missing Focus Indicators** - No visible focus states
6. **Missing Skip Links** - No skip navigation links
7. **Status Badge Contrast** - Status badges have poor contrast
8. **Missing Heading Hierarchy** - Improper heading structure

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Running Accessibility Tests

### Run all tests:
```bash
npm test
```

### Open Cypress Test Runner:
```bash
npm run test:open
```

### Run only accessibility tests:
```bash
npm run test:a11y
```

## Test Structure

The accessibility tests are located in `cypress/e2e/a11y-todo.cy.js` and include:

- Basic accessibility check on page load
- Specific checks for form labels
- Color contrast validation
- Image alt text validation
- ARIA attributes and landmarks
- Keyboard navigation
- Heading hierarchy
- Comprehensive accessibility report
- Tests after user interactions (add/edit items)

## API Endpoints

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

