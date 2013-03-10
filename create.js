/** @namespace Holds all general utility methods/tools */
var utils = utils || {};

//Used to create a new copy of any given object (removes need for class simulation)
utils.create = function(o) {
	function F() {
	}
	F.prototype = o;
	return new F();
};