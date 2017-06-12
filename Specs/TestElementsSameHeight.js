var testData = require('../Data/TestConstants.js');
var homePage = require('../Pages/HomePage.js');

describe('Test Authorization page empty fields', function() {
	it('Test Authorization page empty fields', function() {
	// navigate to home page
    homePage.navigateToURL();

    //determine the height of the first element
    homePage.getGridCellExampleFirst().getSize().then(function(eleSizeFirst) {
    console.log('first element height: '+eleSizeFirst.height);

    //determine the height of the second element
    homePage.getGridCellExampleSecond().getSize().then(function(eleSizeSecond) {
    console.log('first element height: '+eleSizeSecond.height);

    //compare values
    expect(eleSizeSecond.height).toEqual(eleSizeFirst.height,
              														"Elements aren`t the same height");
              														});
    });
    });

    });
