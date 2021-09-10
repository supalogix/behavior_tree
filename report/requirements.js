
window.data.report = [
   {
      "Id": "S1",
      "Component": "App",
      "Priority": "P1",
      "Requirement": "Application Starts\n",
      "File": "startup-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "L1",
      "Component": "Login",
      "Priority": "P1",
      "Requirement": "When: User enters Item360 via Item360.walmart.com\nThen:\n  If the user login first time, he/she should redirect to /market-modal route\n  User should see a modal pop up to ask him/her to choose market\n  Once the user chose an option, they should be redirected to the respective store catalog view.\n",
      "File": "login-1-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "L2",
      "Component": "Login",
      "Priority": "P1",
      "Requirement": "When: If the user has access to multiple market catalogs\nThen: The options in the toggle market header are populated based on the available markets the user has access to.\n",
      "File": "login-2-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "UP1",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "The user is able to click on Upload button to initiate file upload\n",
      "File": "upload-btnClick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "UP2",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "the user can drag and drop the file\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "UP3",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "the user can select a file using browser option from \"Select file\n",
      "File": "next-btnClick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "UP4",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "the user can click next to proceed to next step\n",
      "File": "next-btnClick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "UP5",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "the user can provide a brief description for the task. This description is used to identify the activity from the activity manage\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "UP6",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "if there are any errors, we should be able to show it in the screen\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "UP7",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "the user can delete the file that resulted in error and proceed to submit.\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "UP8",
      "Component": "Upload",
      "Priority": "P1",
      "Requirement": "the user an submit multiple files\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "AM1",
      "Component": "Activity Manager",
      "Priority": "P2",
      "Requirement": "When: A user enters the Activity Manager,\nit is presented with all the activities that are completed or pending with either the supplier or with the internal workflows.\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "AM2",
      "Component": "Activity Manager",
      "Priority": "P2",
      "Requirement": "When: A user wants to refine the submissions,\nthey can use the filter. On click of the filter\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "AM3",
      "Component": "Activity Manager",
      "Priority": "P1",
      "Requirement": "All the submissions are filtered with a list of activity pertaining to the specific user\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "AM4",
      "Component": "Activity Manager",
      "Priority": "P1",
      "Requirement": "It is directed to another summary page, with the item summary and displays the information based on the activity status\n  Successful Updates\n  Completed Updates\n  Incomplete Updates (Not in Pilot)\n  Internal submissions (Not in Pilot)\n  Supplier submissions (Not in Pilot)\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "AM5",
      "Component": "Activity Manager",
      "Priority": "P2",
      "Requirement": "When A user is checking the summary ,\nThen they will have the option to either download the item details (read only) in a spreadsheet or view them\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "AM6",
      "Component": "Activity Manager",
      "Priority": "P2",
      "Requirement": "When A user checks the item details,\nThen they are presented with the new values that are being updated\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "R1",
      "Component": "Filters - Catalog",
      "Priority": "P1",
      "Requirement": "As a user I'm able to expand the filters link\n",
      "File": "filter-btn-click-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "R2",
      "Component": "Filters - Catalog",
      "Priority": "P1",
      "Requirement": "As a user, all the sub-filters should be closed\t\n",
      "File": "filter-btn-click-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "R3",
      "Component": "Filters - Catalog",
      "Priority": "P1",
      "Requirement": "As a user I can see 6 buckets of filters and expand them to see sub-filters\t\n",
      "File": "subFilter-click-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "R4",
      "Component": "Filters - Catalog",
      "Priority": "P1",
      "Requirement": "As a user, \nwhen i choose a sub-filter criteria and apply the same, \nthe result set should refresh and display ONLY the refined list\t\n",
      "File": "apply-filters-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "R5",
      "Component": "Filters - Catalog",
      "Priority": "P1",
      "Requirement": "Check if you are able to select multiple filters and the results changes/ narrows down to the selected filters\t\n",
      "File": "multiple-filters-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "CC1",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "the Basic export feature would be available which will allow upto 40K items export\t\n",
      "File": "export-btn-click-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC2",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "Then a raw non-formatted, but pre-filled spreadsheet is generated\n",
      "File": "export-spreadSheet-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "CC3",
      "Component": "CATALOG-Component",
      "Priority": "P3",
      "Requirement": "the user is on Catalog view\nthe user will\n\nView the catalog with the \"Item Configuration by Walmart Item Number\"  \n",
      "File": "items-presence-ca-1.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC4",
      "Component": "CATALOG-Component",
      "Priority": "P3",
      "Requirement": "Display a List view of all the catalog, with each line indicating an item\n",
      "File": "item-presence-ca-2.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC5",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "the user interacts with the 3 dots on the item card,\nThen: the following options available via the drop down:\n\nItem Configuration Overview\nSupply Chain Details\nItem Overview\nProduct Details\n",
      "File": "3dots-btn-click-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC6",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "each item card in catalog component should have the following fields present -\n\nWalmart Item Number\nProduct Name\nItem Status\nImage\nGTIN\nBuying Region\nUnit Cost\nAccounting Dept, Fineline\nCorporate Order Book\nRetail Price\nItem Type/Sub-Type\nSupply Item Effective Date\nMerchant\nSupplier\nOrderable Pack Quantity\n",
      "File": "itemCard-display-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC7",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "When: the user is on Catalog view\n\nThen: the user should be able to\n\nCopy and Paste upto 5000 product ID's to filter the catalog\n",
      "File": "search-by-itemID-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC8",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "2. Ability to search via - Walmart item number\t\n",
      "File": "seacrh-by-walmartItemNuber-ca.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "CC9",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "2. Ability to search via - GTIN\t\n",
      "File": "search-by-GTIN-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC10",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "2. Ability to search via - UPC\t\n",
      "File": "search-by-itemID-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC11",
      "Component": "CATALOG-Component",
      "Priority": "P1",
      "Requirement": "2. Ability to search via - Item ID\t\n",
      "File": "itemConfigurationOverView-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC12",
      "Component": "CATALOG-Component",
      "Priority": "P4",
      "Requirement": "the user interacts with the Item Configuration Overview from the Item card dropdown and should see the below fields -\n\nItem Overview\n\n  Image\n  Product Name\n  GTIN\n  Item ID\n  Walmart Item Number\nSummary\n\n  Selling Channel\n  Status\n  Online Status- (Not in Pilot)\n  Supplier\n  Item Creation Date\n  Item Effective Date\n  Orderable Pack Quantity\n  Is eCom Replenishable\n  Is Corporate Replenishable\n  Fulfilment Method (Not in Pilot)\n  Unit Cost\n  Selling Price (Base Retail)\n  Is Cross Referenced\n  Program Eligibility (Not in Pilot)\n  Brand\n  Financial Heirchary\n  Content Quality (Not in Pilot)\n  Rating & Reviews (Not in Pilot)\n  Product Details\n",
      "File": "checkbox-click-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC13",
      "Component": "CATALOG-Component",
      "Priority": "P2",
      "Requirement": "the user selects an item card via check box the catalog view will display the count of items selected and enable the export functionality\t\n",
      "File": "product-details-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "CC14",
      "Component": "CATALOG-Component",
      "Priority": "P4",
      "Requirement": "When: the user interacts with the Product Details from the item card dropdown\n\nThen: the user is presented a new page with the item overview\n\n  Image\n  Product Name\n  GTIN\n  Item ID\nand detailed information bucketed into\n\n  Basic Item Info\n  Site Experience\n  Compliance & Regulatory\n  Category-specific attributes to improve search & browse on Walmart.ca\nBy default, all the above buckets would be in the expanded state.\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "M1",
      "Component": "Maintenance",
      "Priority": "P4",
      "Requirement": "The user is able to click Maintenance tile from the left navigation.\n",
      "File": "test/e2e/canada/maintenance/main-btnclick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M2",
      "Component": "Maintenance",
      "Priority": "P4",
      "Requirement": "The user is able to view the PCSE tile in the list of available item maintenance capabilities.\n",
      "File": "test/e2e/canada/maintenance/main-btnclick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M3",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "The user is able to hover over the tile to view the description.\n",
      "File": "test/e2e/canada/maintenance/main-btnclick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M4",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "There are 3 sub-tiles:\n1) Product Content & Site Experience.\n2) Supply Chain.\n3) Store Attributes\n",
      "File": "test/e2e/canada/maintenance/main-btnclick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M5",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "The user can click the tile to proceed with the workflows.\n",
      "File": "test/e2e/canada/maintenance/main-btnclick-ca.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M6",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "Once within the workflow, they can view the various product IDs. They have capabilities to use:\n1) GTIN/UPC\n2) Walmart Item number\n3) EAN/ISBN\n",
      "File": "test/e2e/canada/maintenance/product-content/gtin.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M7",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "Once the user enters GTIN, they can select the next button to proceed to enter GTIN's\n",
      "File": "test/e2e/canada/maintenance/store-attributes/sc-win.spec.js",
      "Status": ""
   },
   {
      "Id": "M8",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "Once the user enters Walmart Item number, they can select the next button to proceed to enter Walmart Item number.\n",
      "File": "test/e2e/canada/maintenance/store-attributes/sc-win.spec.js",
      "Status": ""
   },
   {
      "Id": "M9",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "Once the user enters EAN/ISBN, they can select the next button to proceed to enter EAN/ISBN.\n",
      "File": "test/e2e/canada/maintenance/product-content/isbn.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "M10",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "After clicking submit button it will redirect to next page. Here user will see 2 options:\n1) Export ALL Available Attributes\n2) Export Custom set of attributes\n",
      "File": "test/e2e/canada/maintenance/store-attributes/st-win.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "M11",
      "Component": "Maintenance",
      "Priority": "P2",
      "Requirement": "User can select radio button of 'Export Custom set of attributes' option.\n",
      "File": "test/e2e/canada/maintenance/store-attributes/sc-win.spec.js",
      "Status": ""
   },
   {
      "Id": "M12",
      "Component": "Maintenance",
      "Priority": "P2",
      "Requirement": "User will see 4 sub-headers of:\n1) Basic Item Info\n2) Site Experience\n3) Compliance & Regulatory\n4) Category specific\n",
      "File": "test/e2e/canada/maintenance/store-attributes/st-win.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "M13",
      "Component": "Maintenance",
      "Priority": "P2",
      "Requirement": "User can select from list populated AND Attributes that can NOT be maintained will say (Read-Only).\n",
      "File": "test/e2e/canada/maintenance/store-attributes/sc-win.spec.js",
      "Status": ""
   },
   {
      "Id": "M14",
      "Component": "Maintenance",
      "Priority": "P2",
      "Requirement": "User can see the download button able to download\n",
      "File": "test/e2e/canada/maintenance/store-attributes/sc-win.spec.js",
      "Status": ""
   },
   {
      "Id": "M15",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "Same process for all of the tiles:\n1) Product Content & Site Experience.\n2) Supply Chain.\n3) Store Attributes\n",
      "File": "test/e2e/canada/maintenance/store-attributes/st-win.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "M16",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "Verify Download Button\n",
      "File": "",
      "Status": ""
   },
   {
      "Id": "M17",
      "Component": "Maintenance",
      "Priority": "P3",
      "Requirement": "User will see General Description of the functionality maintained by this tile\n",
      "File": "test/e2e/canada/maintenance/imagery/btnclick.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M18",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "User will have the\n1) Option to place images into folders named by GTIN which can have both single/bulk upload\n2) Browse files and upload.\n",
      "File": "test/e2e/canada/maintenance/imagery/upload-btnClick.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M19",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "1) Browse files and upload\n2) User can upload upto 10 images per item\n3) User will also have the option to view the Image Specifications\n",
      "File": "test/e2e/canada/maintenance/imagery/upload-btnClick.spec.js",
      "Status": "Pass"
   },
   {
      "Id": "M20",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "When:  User selects Download.\n\nThen: System will generate a “Maintainable Spreadsheet”\n  1) Spread sheet will have headers “Item Configuration”, “Logistics & Warehousing”, and \"Trade Item\"\n  2) One row of pre-populated info per WIN\n  3) Default fields Supplier Name, Supplier Number, GTIN, and, WIN\n  4) Read Only Attribute Text header will be in greyed out and non editable\n",
      "File": "test/e2e/canada/maintenance/store-attributes/st-win.spec.js",
      "Status": "Fail"
   },
   {
      "Id": "M21",
      "Component": "Maintenance",
      "Priority": "P1",
      "Requirement": "When: User is in Attribute Selection Screen.\n\nThen: User will see the options of \" Export All Available Supply Chain Attributes\"\nAND\n\"Export custom set of Supply Chain Attributes\"\nIf the user selects a GTIN from an invalid category or category for which the spec sheets aren't ready, \nthe user will be notified about this error.\n",
      "File": "test/e2e/canada/maintenance/store-attributes/st-win.spec.js",
      "Status": "Fail"
   }
];
window.data.allStats = {
   "total": 57,
   "passing": 26,
   "failing": 13,
   "notTested": 18,
   "passingRate": 45,
   "failingRate": 22,
   "notTestedRate": 31
};
window.data.p1Stats = {
   "total": 41,
   "passing": 19,
   "failing": 12,
   "notTested": 10,
   "passingRate": 46,
   "failingRate": 29,
   "notTestedRate": 24
};
window.data.p2Stats = {
   "total": 9,
   "passing": 1,
   "failing": 1,
   "notTested": 7,
   "passingRate": 11,
   "failingRate": 11,
   "notTestedRate": 77
};
window.data.p3Stats = {
   "total": 3,
   "passing": 3,
   "failing": 0,
   "notTested": 0,
   "passingRate": 100,
   "failingRate": 0,
   "notTestedRate": 0
};
window.data.p4Stats = {
   "total": 4,
   "passing": 3,
   "failing": 0,
   "notTested": 1,
   "passingRate": 75,
   "failingRate": 0,
   "notTestedRate": 25
};
