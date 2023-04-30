import Services from "../../fixtures/pom/services.page";

describe("Services", () => {
  beforeEach(() => {
    cy.visit("/services");
  });

  it("Should navigate to the Services page", () => {
    // Services.buttonServices.click();
    Services.titleServicesInDetail.should(
      "contains.text",
      "Services In Detail"
    );
    Services.textUl.should(
      "contains.text",
      "QA for existing software solutions"
    );
  });
});