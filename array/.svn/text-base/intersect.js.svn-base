/** @namespace Holds all general utility methods/tools */
var utils = utils || {};

utils.array = utils.array || {};

//accepts array of arrays
//get members that appear in all arrays, return as new array
utils.array.intersect = function(arr) {
	var _len = arr.length; //get number of arrays
	var _tot = [];
	for (var i = 0; i < _len; i++) {
		var _sLen = arr[i].length;
		for (var j = 0; j < _sLen; j++) {
			if (_tot.indexOf(arr[i][j]) == -1) {
				_tot.push(arr[i][j]);
			}
		}
	}
	var _tLen = _tot.length;
	var _tr = [];
	for (var i = 0; i < _tLen; i++) {//for each member in total[i]
		for (var j = 0; j < _len; j++) {//check each array[j] for presence
			var _inAll = true;
			if (arr[j].indexOf(_tot[i]) == -1) {
				_inAll = false;
			}
			if ((!_inAll) && (_tr.indexOf(_tot[i]) == -1)) _tr.push(_tot[i]);
		}
	}
	var _trLen = _tr.length;
	for (var i = 0; i < _trLen; i++) {
		_tot.splice(_tot.indexOf(_tr[i]), 1);
	}
	return _tot;
};

