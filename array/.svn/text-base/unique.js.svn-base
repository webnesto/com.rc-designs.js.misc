/** @namespace Holds all general utility methods/tools */
var utils = utils || {};

utils.array = utils.array || {};

utils.array.unique = function(arr) {
	//if(!this.is(arr)) return false;
	// Return new array with duplicate values removed
	var a = [];
	var l = arr.length;
	for (var i = 0; i < l; i++) {
		for (var j = i + 1; j < l; j++) {
			// If this[i] is found later in the array
			if (arr[i] === arr[j]) j = ++i;
		}
		a.push(arr[i]);
	}
	return a;
}