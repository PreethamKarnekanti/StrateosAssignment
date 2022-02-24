import { BasePage } from '../../BasePage';


export default class CompoundsPage extends BasePage {
   
    visitStrateos(){
      this.accessUrl('http://localhost:5555/');
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