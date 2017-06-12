var testData = require('../Data/TestConstants.js');
var homePage = require('../Pages/HomePage.js');

describe('Test Authorization page empty fields', function() {
	it('Test Authorization page empty fields', function() {
	// navigate to home page
    homePage.navigateToURL();

    //determine middle of the first element
    homePage.getGridCellCenteredFirst().getLocation().then(function(locFirst) {
      homePage.getGridCellCenteredFirst().getSize().then(function(sizeFirst) {
        var middleFirst = locFirst.y+sizeFirst.height/2;
        console.log('first element y: '+locFirst.y);
        console.log('first element bottom: '+middleFirst);

    //determine middle of the second element
        homePage.getGridCellCenteredSecond().getLocation().then(function(locSecond) {
         homePage.getGridCellCenteredSecond().getSize().then(function(sizeSecond) {
           var middleSecond = locSecond.y+sizeSecond.height/2;
        console.log('second element y: '+locSecond.y);
        console.log('second element bottom: '+middleSecond);
    //compare values
        expect(middleFirst).toEqual(middleSecond,
                      														"Elements aren`t vertically centered");
                      														});
                      														});
        });
        });
      });

   });