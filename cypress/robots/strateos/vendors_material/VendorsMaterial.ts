import { BasePage } from '../../BasePage';


export default class VendorsMaterialPage extends BasePage {
   
    visitStrateos(){
      this.accessUrl('http://localhost:5555/');
    }

   

    clickOnMenu(domElement: string){
      this.clickOnDomElement(domElement)
    }

    clickOnVendors(domElement: string){
      this.clickOnDomElement(domElement)
    }

    clickOnMaterialSubTab(domElement: string){
      this.clickOnDomElement(domElement)
    }
    
    clickOnNewButton(domElement: string){
      this.clickOnDomElement(domElement)
    }

    clickOnAddButton(domElement: string){
      this.clickOnDomElement(domElement)
    }

    assertVendorCreation(domElement: string,text: string){
      this.seesDomContainText(domElement,text)
    }

    selectTheCompound(domElement: string){
        this.clickOnDomElement(domElement)
    }

    clickOnContinue(domElement: string){
        this.clickOnDomElement(domElement)
    }

    selectResource(domElement: string){
        this.clickOnDomElement(domElement)
    }

    clickSelect(domElement: string){
        this.clickOnDomElement(domElement)
    }

    selectVendor(domElement: string){
        this.clickOnDomElement(domElement)
    }

    selectVendorType(domElement: string){
        this.clickOnDomElement(domElement)
    }

    clickAddCostItem(domElement: string){
        this.clickOnDomElement(domElement)
    }

    enterAmount(domElement: string, text: string){
        this.typeTextOnSelectedElement(domElement,text)
    }

    selectUnit(domElement: string){
        this.clickOnDomElement(domElement)
    }

    selectUnitType(domElement: string){
        this.clickOnDomElement(domElement)
    }

    enterCost(domElement: string, text: string){
        this.typeTextOnSelectedElement(domElement,text)
    }

    enterSKU(domElement: string, text: string){
        this.typeTextOnSelectedElement(domElement,text)
    }

    clickCheckMark(domElement: string){
        this.clickOnDomElement(domElement)
    }

    clickOnCreate(domElement: string){
        this.clickOnDomElement(domElement)
    }

}