/** @namespace Holds all general utility methods/tools */
var utils = utils || {};

utils.array = utils.array || {};

utils.array.each = function(arr, method) {
	if(!this.is(arr)) return false;
	var _len = arr.length;
	for (var i = 0; i < _len; i++) {
		method(arr[i], i);
	}
}
