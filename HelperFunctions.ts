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
