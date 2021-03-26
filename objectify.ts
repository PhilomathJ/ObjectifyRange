/**
 * ObjectifyColumns - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with column headers as keys and rest of column array as values
 * @param	{any[][]}	values	Range from which to get values
 * @returns	{void}
 */
function objectifyColumns(values: any[][]): Object {
	const headers: any[] = values.shift(); // Remove the headers into their own array
	const colValues: any[][] = transpose(values); // Swap rows for columns

	let obj: Object = {};

	headers.forEach((h, index) => {
		obj[h] = colValues[index];
	});

	return obj;
}

/**
 * ObjectifyRows - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with row headers as keys and rest of row array as values
 * @param	{any[][]}	values	Range from which to get values
 * @returns	{void}
 */
function objectifyRows(values: any[][]): Object {
	let obj: Object = {};

	values.forEach((row) => {
		obj[row.shift()] = row; // 1st col is key, rest of row is value
	});

	return obj;
}
