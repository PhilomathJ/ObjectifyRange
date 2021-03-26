// Potential types of data from th worksheet
type cellData = number | Date | string;

/**
 * ObjectifyColumns - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with column headers as keys and rest of column array as values
 * @param	{any[][]}	values	Range from which to get values
 * @returns	{void}
 */
function objectifyColumns(values: cellData[][]): Object {
	if (!(values.length > 0 && values[0].length > 0)) throw new Error('Argument is not a 2-dimensional array');

	const headers: cellData[] = values.shift()!; // Remove the headers into their own array - assert non-null
	const colValues: cellData[][] = transpose(values); // Swap rows for columns

	let obj: any = {};

	headers.forEach((h, index) => {
		// Iterate through all headers
		obj[h.toString()] = colValues[index]; // User header value as key and rest of column as value
	});

	return obj;
}

/**
 * ObjectifyRows - Converts a Google Sheets Range 2-dimensional array
 * 	into an object with row headers as keys and rest of row array as values
 * @param	{any[][]}	values	Range from which to get values
 * @returns	{void}
 */
function objectifyRows(values: cellData[][]): Object {
	if (!(values.length > 0 && values[0].length > 0)) throw new Error('Argument is not a 2-dimensional array');

	let obj: any = {};

	values.forEach((row) => {
		// Iterate through all rows
		obj[row.shift()!.toString()] = row; // 1st col is key, rest of row is value
	});

	return obj;
}
