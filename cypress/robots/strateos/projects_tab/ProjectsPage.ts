import { BasePage } from '../../BasePage';


export default class ProjectsPage extends BasePage {
   
    visitStrateos(){
      this.accessUrl('http://localhost:5555/');
    }

    login() {
      cy.get('#emailInput').type('ben.miles@strateos.com'); //Cypress.env('USER_NAME')
      cy.get('#passwordInput').type('Testing123!'); //Cypress.env('PASSWORD')
      cy.get('#submitButton').click();
      return this;
    }

    openProjectsTab(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    createNewProject(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    enterProjectName(domElement: string, name: string) {
      this.typeTextOnSelectedElement(domElement, name);
    }

    clickOnSubmit(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    assertProjectName(domElement: string,name: string) {
      this.seesTextOnSelectedElement(domElement, name);
    }

    favoriteTheProject(domElement: string) {
      this.clickOnDomElement(domElement);
    }

    assertIfProjectGotFavorited(domElement: string,className: string) {
      this.seesClassOnDomElement(domElement, className);
    }
    
}