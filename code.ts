const DEBUG = true;

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
 * ObjectifyColumns - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with column headers as keys and rest of column array as values
 * @param	{}
 * @returns	{void}
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
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

	const range = sheet.getRange(startRow, startCol, rows, cols);
	const values: any[][] = range.getValues();

	log(values);

	const headers: any[] = values.shift(); // Remove the headers into their own array
	const colValues: any[][] = transpose(values); // Swap rows for columns

	let obj: Object = {};

	headers.forEach((h, index) => {
		obj[h] = colValues[index];
	});

	log(obj);
}

/**
 * ObjectifyRows - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with row headers as keys and rest of row array as values
 * @param	{}
 * @returns	{void}
 */
function objectifyRows({
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
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

	const range = sheet.getRange(startRow, startCol, rows, cols);
	const values: any[][] = range.getValues();

	log(values);

	let obj: Object = {};

	values.forEach((row) => {
		obj[row.shift()] = row; // 1st col is key, rest of row is value
	});

	log(obj);
}

function onOpen(): void {
	SpreadsheetApp.getUi()
		.createMenu('Objectify')
		.addItem('Objectify Columns', 'callObjectifyColumns')
		.addItem('Objectify Rows', 'callObjectifyRows')
		.addToUi();
}

function callObjectifyColumns() {
	objectifyColumns(testRangeCols);
	SpreadsheetApp.getActiveSpreadsheet().toast('Objectifying columns complete', 'Complete');
}

function callObjectifyRows() {
	objectifyRows(testRangeRows);
	SpreadsheetApp.getActiveSpreadsheet().toast('Objectifying rows complete', 'Complete');
}
