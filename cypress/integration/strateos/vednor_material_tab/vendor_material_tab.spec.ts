import VendorsMaterialPage from '../../../robots/strateos/vendors_material/VendorsMaterial';
import VendorsMaterial from '../../../fixtures/locators/vendors_material.json';
import Data from '../../../fixtures/data/data.json';
context('Strateos Vendors Material Tab Test', () => {
const Page = new VendorsMaterialPage();

    describe('Strateos Vendors Material Tab assignment', ()=>{

        it("Vendors Material", () => {
            Page.visitStrateos();
            Page.login();
            Page.clickOnMenu(VendorsMaterial.menu)
            Page.clickOnVendors(VendorsMaterial.vendors)
            Page.clickOnMaterialSubTab(VendorsMaterial.material)
            Page.clickOnNewButton(VendorsMaterial.new_button)
            Page.clickOnAddButton(VendorsMaterial.add_button)
            Page.selectTheCompound(VendorsMaterial.compound)
            Page.clickOnContinue(VendorsMaterial.continue)
            Page.selectResource(VendorsMaterial.resource)
            Page.clickSelect(VendorsMaterial.select)
            Page.selectVendor(VendorsMaterial.vendor)
            Page.selectVendorType(VendorsMaterial.vendor_type)
            Page.clickAddCostItem(VendorsMaterial.add_cost_item_input)
            Page.enterAmount(VendorsMaterial.amount_input,Data.amount);
            Page.selectUnit(VendorsMaterial.select_unit)
            Page.selectUnitType(VendorsMaterial.unit_type_suggestion)
            Page.enterCost(VendorsMaterial.cost_input, Data.cost)
            Page.enterSKU(VendorsMaterial.sku_input,Data.sku)
            Page.clickCheckMark(VendorsMaterial.check_icon)
            Page.clickOnCreate(VendorsMaterial.create_button)
        });
    });
});