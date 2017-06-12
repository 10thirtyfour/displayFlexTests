var testData = require('../Data/TestConstants');
var locators = require('../Data/Locators');

var HomePage = function() {
// elements
	var gridCellExampleFirst = element(by.css(locators.HomePage.GRID_CELL_EXAMPLE_FIRST));
	var gridCellExampleSecond = element(by.css(locators.HomePage.GRID_CELL_EXAMPLE_SECOND));
	var gridCellTopAlignedFirst = element(by.css(locators.HomePage.GRID_CELL_TOP_ALIGNED_FIRST));
    var gridCellTopAlignedSecond = element(by.css(locators.HomePage.GRID_CELL_TOP_ALIGNED_SECOND));
    var gridCellBottomAlignedFirst = element(by.css(locators.HomePage.GRID_CELL_BOTTOM_ALIGNED_FIRST));
    var gridCellBottomAlignedSecond = element(by.css(locators.HomePage.GRID_CELL_BOTTOM_ALIGNED_SECOND));
    var gridCellCenteredFirst = element(by.css(locators.HomePage.GRID_CELL_CENTERED_FIRST));
    var gridCellCenteredSecond = element(by.css(locators.HomePage.GRID_CELL_CENTERED_SECOND));

// methods
	this.navigateToURL = function() {
		console.log("Set browser.ignoreSynchronization = true");
		browser.ignoreSynchronization = true;

		// the amount of time to wait before declaring
		// that the element was not found
		browser.manage().timeouts().implicitlyWait(
				testData.Timeout.MAX_ELEMENT_WAIT_TIME_MILI);

		browser.driver.manage().window().maximize();

		console.log('Navigating to URL...');
		browser.get(testData.Constants.BASE_URL);
	};

	this.getGridCellExampleFirst = function() {
        		return gridCellExampleFirst;
        };

    this.getGridCellExampleSecond = function() {
            		return gridCellExampleSecond;
        };

    this.getGridCellTopAlignedFirst = function() {
            		return gridCellTopAlignedFirst;
        };

    this.getGridCellTopAlignedSecond = function() {
                		return gridCellTopAlignedSecond;
        };

    this.getGridCellBottomAlignedFirst = function() {
                		return gridCellBottomAlignedFirst;
        };

    this.getGridCellBottomAlignedSecond = function() {
                    		return gridCellBottomAlignedSecond;
        };

    this.getGridCellCenteredFirst = function() {
                    		return gridCellCenteredFirst;
        };

    this.getGridCellCenteredSecond = function() {
                        		return gridCellCenteredSecond;
        };

};

module.exports = new HomePage();