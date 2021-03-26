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

function transpose(a) {
	// return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
	// or in more modern dialect
	return a[0].map((_, c) => a.map((r) => r[c]));
}
