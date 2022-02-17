import { BasePage } from '../../BasePage';


export default class CompoundsPage extends BasePage {
   
    visitStrateos(){
      this.accessUrl('http://localhost:5555/');
    }

    login() {
      cy.get('#emailInput').type('ben.miles@strateos.com'); //Cypress.env('USER_NAME')
      cy.get('#passwordInput').type('Testing123!'); //Cypress.env('PASSWORD')
      cy.get('#submitButton').click();
      return this;
    }

    openCompoundsTab(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    clickOnRegisterCompoundBtn(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    clickOnDrawStructure(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    registerAsPublicCompound(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    enterSmileString(domElement: string, smile: string) {
      this.typeTextOnSelectedElement(domElement, smile);
    }

    clickOnNextBtn(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    enterNickname(domElement: string, smile: string) {
      this.typeTextOnSelectedElement(domElement, smile);
    }

    clickOnCreateCompound(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    assertCreatedCompound(domElement: string,name: string) {
      this.seesTextOnSelectedElement(domElement, name);
    }
}