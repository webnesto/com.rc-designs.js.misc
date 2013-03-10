/** @namespace Holds all general utility methods/tools */
var utils = utils || {};

utils.mixin = function(a) {
	var _objs = arguments.length;
	if (_objs < 2) return;
	for (var i = 1; i < _objs; i++) {
		for (var key in arguments[i]) {
			if (arguments[i].hasOwnProperty(key)) a[key] = arguments[i][key];
		}
	}
	return this.create(a)
}