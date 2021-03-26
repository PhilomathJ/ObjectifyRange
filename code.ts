const DEBUG = true;

// Worksheet test data in cells
const testRangeCols = {
	startRow: 1,
	startCol: 1,
	rows: 6,
	cols: 6,
};

const testRangeRows = {
	startRow: 10,
	startCol: 1,
	rows: 6,
	cols: 6,
};

/**
 * Create custom user menu allowing user to call objectify functions
 */
function onOpen(): void {
	SpreadsheetApp.getUi()
		.createMenu('Objectify')
		.addItem('Objectify Columns', 'callObjectifyColumns')
		.addItem('Objectify Rows', 'callObjectifyRows')
		.addToUi();
}

function callObjectifyColumns() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	const range = sheet.getRange(
		testRangeCols.startRow,
		testRangeCols.startCol,
		testRangeCols.rows,
		testRangeCols.cols
	);
	const columns: any[][] = range.getValues();

	const columnObject: Object = objectifyColumns(columns);
	SpreadsheetApp.getActiveSpreadsheet().toast('Objectifying columns complete', 'Complete');
	log(columnObject);
}

function callObjectifyRows() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	const range = sheet.getRange(
		testRangeRows.startRow,
		testRangeRows.startCol,
		testRangeRows.rows,
		testRangeRows.cols
	);
	const rows: any[][] = range.getValues();

	const rowsObject: Object = objectifyRows(rows);
	SpreadsheetApp.getActiveSpreadsheet().toast('Objectifying rows complete', 'Complete');
	log(rowsObject);
}
