class ContactUs {
    get titleContactInfo() {
      return cy.get('[href="http://www.ukeess.com/contact_us"]');
    }
    get titleUkeessSoftwareHouse() {
      return cy.get('[style="text-indent: 0px;"]').eq(0);
    }
    get contactInformation() {
      return cy.get('[style="text-indent: 0px;"]').eq(0);
    }
  }
  
  export default new ContactUs();