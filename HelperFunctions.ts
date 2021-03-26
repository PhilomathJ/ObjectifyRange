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
				break;
			case 'object':
				console.log(Object(msg));
				break;
			case 'number':
			case 'bigint':
			case 'symbol':
				console.log(String(msg));
				break;
			case 'boolean':
				console.log(new Boolean(msg));
				break;
			default:
				return;
		}
	}
}

/**
 * Swaps rows for columns in a 2-dimensional array
 * @param	{any[][]}	arr	2-dimensional array to br transposed
 * @returns	{any[][]}			Transposed array
 */
function transpose(arr: any[][]) {
	return arr[0].map((_, c) => arr.map((r) => r[c]));
}
