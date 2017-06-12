var testData = require('../Data/TestConstants.js');
var homePage = require('../Pages/HomePage.js');

describe('Test Authorization page empty fields', function() {
	it('Test Authorization page empty fields', function() {
	// navigate to home page
    homePage.navigateToURL();

    //determine location of the first element
    homePage.getGridCellTopAlignedFirst().getLocation().then(function(locFirst) {
        console.log('first element y: '+locFirst.y);

    //determine location of the second element
        homePage.getGridCellTopAlignedSecond().getLocation().then(function(locSecond) {
        console.log('second element y: '+locSecond.y);

    //compare values
        expect(locFirst.y).toEqual(locSecond.y,
                      														"Elements aren`t top-aligned");
        });
        });
      });

   });