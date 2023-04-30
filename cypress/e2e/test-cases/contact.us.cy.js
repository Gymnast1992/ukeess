import ContactUs from "../../fixtures/pom/contact.us.page";

describe("Contact Us", () => {
  beforeEach(() => {
    cy.visit("/contact_us");
  });

  it("Should verify the address of the UKEESS Software House", () => {
    ContactUs.titleContactInfo.should("contains.text", "Contact Information");
    ContactUs.titleUkeessSoftwareHouse.should(
      "contains.text",
      "UKEESS Software House"
    );
    ContactUs.contactInformation.should("contains.text", "12 Mirtova Str, ");
    ContactUs.contactInformation.should(
      "contains.text",
      "Lviv, 79068, Ukraine "
    );
    ContactUs.contactInformation.should("contains.text", "+380(68)8442200");
    ContactUs.contactInformation.should(
      "contains.text",
      `49° 52' 0.67", 24° 1' 34.21"`
    );
  });
});