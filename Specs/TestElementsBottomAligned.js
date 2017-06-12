var testData = require('../Data/TestConstants.js');
var homePage = require('../Pages/HomePage.js');

describe('Test Authorization page empty fields', function() {
	it('Test Authorization page empty fields', function() {
	// navigate to home page
    homePage.navigateToURL();

    //determine bottom of the first element
    homePage.getGridCellBottomAlignedFirst().getLocation().then(function(locFirst) {
      homePage.getGridCellBottomAlignedFirst().getSize().then(function(sizeFirst) {
        var bottomFirst = locFirst.y+sizeFirst.height;
        console.log('first element y: '+locFirst.y);
        console.log('first element bottom: '+bottomFirst);

    //determine bottom of the second element
        homePage.getGridCellBottomAlignedSecond().getLocation().then(function(locSecond) {
         homePage.getGridCellBottomAlignedSecond().getSize().then(function(sizeSecond) {
           var bottomSecond = locSecond.y+sizeSecond.height;
        console.log('second element y: '+locSecond.y);
        console.log('second element bottom: '+bottomSecond);
    //compare values
        expect(bottomFirst).toEqual(bottomSecond,
                      														"Elements aren`t bottom-aligned");
                      														});
                      														});
        });
        });
      });

   });