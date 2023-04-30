import Homepage from "../../fixtures/pom/home.page";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to homepage", () => {
    Homepage.buttonHome.should("contains.text", "Home");
    Homepage.buttonContactUs.should("contains.text", "Contact Us");
    Homepage.titleWhoWeAre.should("contains.text", "Who We Are");
  });
});