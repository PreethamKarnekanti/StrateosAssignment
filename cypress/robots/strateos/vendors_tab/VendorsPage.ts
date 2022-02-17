import { BasePage } from '../../BasePage';


export default class VendorsPage extends BasePage {
   
    visitStrateos(){
      this.accessUrl('http://localhost:5555/');
    }

    login() {
      cy.get('#emailInput').type('ben.miles@strateos.com'); //Cypress.env('USER_NAME')
      cy.get('#passwordInput').type('Testing123!'); //Cypress.env('PASSWORD')
      cy.get('#submitButton').click();
      return this;
    }

    clickOnMenu(domElement: string){
      this.clickOnDomElement(domElement)
    }

    clickOnVendors(domElement: string){
      this.clickOnDomElement(domElement)
    }

    clickOnVendorsSubtab(domElement: string){
      this.clickOnDomElement(domElement)
    }
    
    clickOnPlusIcon(domElement: string){
      this.clickOnDomElement(domElement)
    }

    enterVendorName(domElement: string, text: string){
      this.typeTextOnSelectedElement(domElement,text)
    }

    clickOnCreateVendor(domElement: string){
      this.clickOnDomElement(domElement)
    }

    assertVendorCreation(domElement: string,text: string){
      this.seesDomContainText(domElement,text)
    }
}