import VendorsPage from '../../../robots/strateos/vendors_tab/VendorsPage';
import VendorsTab from '../../../fixtures/locators/vendors_tab.json';
import Data from '../../../fixtures/data/data.json'
context('Strateos Vendors Tab Test', () => {
const Page = new VendorsPage();

    describe('Strateos Vendors Tab assignment', ()=>{

        it("Vendors", () => {
            Page.visitStrateos();
            Page.login();
            Page.clickOnMenu(VendorsTab.menu)
            Page.clickOnVendors(VendorsTab.vendor)
            Page.clickOnVendorsSubtab(VendorsTab.vendor_subtab)
            Page.wait(5000)
            Page.clickOnPlusIcon(VendorsTab.plus_icon)
            Page.enterVendorName(VendorsTab.vendor_name_input, Data.vendor_name)
            Page.clickOnCreateVendor(VendorsTab.create_vendor)
            Page.assertVendorCreation(VendorsTab.card, Data.vendor_name)
        });
    });
});