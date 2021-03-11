describe("Stardew Valley Store", () => {
  it("Main page says sold out", () => {
    cy.visit("https://shop.stardewvalley.net");
    cy.findAllByText(/Sold out/i);
  });

  it("Item page says sold out", () => {
    cy.visit(
      "https://shop.stardewvalley.net/products/stardew-valley-the-board-game"
    );
    cy.findAllByText(/Sold out/i);
  });
});
