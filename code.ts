// Generic data type that covers all possible return types from the Range.getValues() function
type cellData = number | boolean | Date | string;
const DEBUG = true;

/**
 * ObjectifyColumns - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with column headers as keys and rest of column array as values
 * @param	{}
 */
function objectifyColumns() {
	const ss = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = ss.getActiveSheet();

	const range = sheet.getRange(1, 1, 6, 6);
	const values: any[][] = range.getValues();

	console.log(values);

	ss.toast('Objectifying complete', 'Complete');
}

/**
 * Logs a message to the GCP console iff DEBUG is set to TRUE
 * Uses Typescript generics to allow for logging of any data type
 *
 *	@param	{T}	msg	The message to be logged is of type 'generic'
 * @returns {void}
 */
function log<T>(msg: T): void {
	if (DEBUG) {
		switch (typeof msg) {
			case 'string':
				console.log(msg);
			case 'object':
				console.log(Object(msg));
			case 'number':
			case 'bigint':
			case 'symbol':
				console.log(String(msg));
			case 'boolean':
				console.log(new Boolean(msg));
			default:
				return;
		}
	}
}

function onOpen(): void {
	SpreadsheetApp.getUi().createMenu('Objectify').addItem('Objectify Column', 'objectifyColumns').addToUi();
}
