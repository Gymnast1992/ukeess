class Homepage {
    get buttonHome() {
      return cy.get(".menu-221");
    }
    get buttonContactUs() {
      return cy.get(".last");
    }
    get titleWhoWeAre() {
      return cy.get('[href="http://www.ukeess.com/who_we_are"]').eq(0);
    }
  }
  
  export default new Homepage();