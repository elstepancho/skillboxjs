describe('Pairs Game', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Should have a 4x4 grid with invisible numbers in initial state', () => {
    cy.get('.game-field').should('exist');

    cy.get('.game-field .open-card').should('have.length', 16);

    cy.get('.game-field .open-card').each(($card) => {
      cy.wrap($card).should('have.css', 'background-color', 'rgba(0, 0, 0, 0.8)');
      cy.wrap($card).should('have.css', 'color', 'rgba(0, 0, 0, 0)');
    });
  });

  it('Should keep one randomly chosen card open when clicked', () => {
    cy.get('.game-field .open-card').first().click();

    cy.get('.game-field .open-card').first().should('have.class', 'open-card');
  });

  it('Should find and keep a pair of cards open when clicked', () => {
    cy.get('.game-field .open-card').first().click();

    cy.get('.game-field .open-card').eq(1).click();

    cy.get('.game-field .open-card.open-card').should('have.length', 2);

    cy.get('.game-field .open-card.open-card').each(($card) => {
      cy.wrap($card).should('have.class', 'open-card');
    });
  });

  it('Should close two non-matching cards when a third card is clicked', () => {
    cy.get('.game-field .open-card').first().click();

    cy.get('.game-field .open-card').eq(2).click();

    cy.get('.game-field .open-card.open-card').should('have.length', 0);

    cy.get('.game-field .open-card').eq(0).should('not.have.class', 'open-card');
    cy.get('.game-field .open-card').eq(2).should('not.have.class', 'open-card');
  });
});
