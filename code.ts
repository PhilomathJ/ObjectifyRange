const DEBUG = true;

const testRange = {
	startRow: 1,
	startCol: 1,
	rows: 6,
	cols: 6,
};

/**
 * ObjectifyColumns - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with column headers as keys and rest of column array as values
 * @param	{}
 */
function objectifyColumns({
	startRow,
	startCol,
	rows,
	cols,
}: {
	startRow: number;
	startCol: number;
	rows: number;
	cols: number;
}): void {
	const ss = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = ss.getActiveSheet();

	const range = sheet.getRange(1, 1, 6, 6);
	const values: any[][] = range.getValues();

	console.log(values);

	ss.toast('Objectifying complete', 'Complete');
}

function onOpen(): void {
	SpreadsheetApp.getUi()
		.createMenu('Objectify')
		.addItem('Objectify Column', 'callObjectifyColumns')
		.addToUi();
}

function callObjectifyColumns() {
	objectifyColumns(testRange);
}
