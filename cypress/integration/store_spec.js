describe("Stardew Valley Store", () => {
  it("Check if main page says unavailable", () => {
    cy.visit(
      "https://shop.stardewvalley.net/products/stardew-valley-the-board-game"
    );
    cy.findAllByText(/Sold out/i);
  });
});
