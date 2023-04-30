class Services {
    get titleServicesInDetail() {
      return cy.get(".title").eq(1);
    }
    get textUl() {
      return cy.get('[class="text"] ul').eq(0);
    }
  }
  
  export default new Services();