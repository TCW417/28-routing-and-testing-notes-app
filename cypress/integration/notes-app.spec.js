describe('Testing budget tracker app with full-CRUD operations', () => {
  it('should display the About landing page on load', () => {
    cy.visit('/');
    cy.get('div[class=about]')
      .find('h2')
      .should('contain', 'About the Lab 28 Notes App')
  });

  it('should run through an end-to-end crud operation on the app', () => {
    cy.visit('/');
    cy.get('a').contains('Notes').click();
    cy.url().should('include', '/dashboard');

    cy.get('a').contains('New Note').click();
    cy.get('input[name=title]')
      .clear()
      .type('Cypress Test Note')
      .should('have.value', 'Cypress Test Note');

    cy.get('textarea[name=content]')
      .clear()
      .type('This is the text associated with the new Cypress note. This note was created using the Cypress automated UI/end-to-end test suite.')
      .should('contain', 'This is the text associated');
    cy.get('button[type=submit]').click();

    cy.get('div[class=note-list')
      .find('button[name=edit]')
      .click();
    cy.get('input[name=title]')
      .type(' EDITED!');
    cy.get('button[type=submit]').click();

    cy.get('p[class=note-title')
      .should('contain', 'Cypress Test Note EDITED!');

    cy.get('div[class=note-list')
      .find('button[name=delete]')
      .click();
  });

  it('should handle multiple notes', () => {
    cy.visit('/');
    cy.get('a').contains('Notes').click();
    cy.url().should('include', '/dashboard');

    cy.get('a').contains('New Note').click();
    cy.get('input[name=title]')
      .clear()
      .type('Note 1')
      .should('have.value', 'Note 1');
    cy.get('textarea[name=content]')
      .clear()
      .type('Note 1 text.');
    cy.get('button[type=submit]').click();
    cy.get('a').contains('New Note').click();
    cy.get('input[name=title]')
      .clear()
      .type('Note 2')
      .should('have.value', 'Note 2');
    cy.get('textarea[name=content]')
      .clear()
      .type('Note 2 text.');
    cy.get('button[type=submit]').click();

    cy.get('a').contains('New Note').click();
    cy.get('input[name=title]')
      .clear()
      .type('Note 3')
      .should('have.value', 'Note 3');
    cy.get('textarea[name=content]')
      .clear()
      .type('Note 3 text.');
    cy.get('button[type=submit]').click();
  });

  it('should allow editing Note 2', () => {
    cy.get('div[class=note-list]:nth(1)')
      .find('button[name=edit]')
      .click();
    cy.get('input[name=title]')
      .type(' EDITED!');
    cy.get('button[type=submit]').click();

    cy.get('p[class=note-title')
      .should('contain', 'Note 2 EDITED!');
    });

  it('should allow deletion of note 1', () => {
    cy.get('div[class=note-list]:nth(2)')
      .find('button[name=delete]')
      .click();
    cy.get('p[class=note-title]')
      .should('not.contain', 'Note 1');
  });

  it('should allow deletion of note 3', () => {
    cy.get('div[class=note-list]:nth(0)')
      .find('button[name=delete]')
      .click();
    cy.get('p[class=note-title]')
      .should('not.contain', 'Note 3');
  });

  it('should allow deletion of note 2', () => {
    cy.get('div[class=note-list]:nth(0)')
      .find('button[name=delete]')
      .click();
    cy.get('p[class=note-title]')
      .should('not.contain', 'Note 2');
  });

  it('should show the About page when link is clicked on', () => {
    cy.get('a').contains('About').click();
    cy.url().should('include', '/');
    cy.get('div[class=about]')
      .find('h2')
      .should('contain', 'About the Lab 28 Notes App');
  });
});
