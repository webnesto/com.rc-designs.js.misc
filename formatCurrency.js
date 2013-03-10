/**
 * @fileoverview
 * Format number into american currency
 * 
 * @author http://javascript.internet.com/forms/currency-format.html
 * @author ernesto
 */
var utils = utils || {};

/**
 * Will format a number or string that can be converted to a number as American currency.
 * Adds dollar sign, commas, and rounds decimal point to 2 places.
 * 
 * @param {Number} num May be a string as long as no characters other than "$", ",", ".", and "-" are included.
 */
utils.formatCurrency = function(num, dontIncludeCents) {
	var _num = num.toString().replace(/\$|\,/g,'');;
	var _sign;
	var _cents;
	if(isNaN(_num))	_num = "0";
	_sign = (_num == (_num = Math.abs(_num)));
	_num = Math.floor(_num*100+0.50000000001);
	_cents = _num%100;
	_num = Math.floor(_num/100).toString();
	if(_cents<10)	_cents = "0" + _cents;
	for (var i = 0; i < Math.floor((_num.length - (1 + i)) / 3); i++) {
		_num = _num.substring(0, _num.length - (4 * i + 3)) + ',' +
			_num.substring(_num.length - (4 * i + 3));
	}
	var _returnStr = (((_sign)?'':'-') + '$' + _num);
	_returnStr = (dontIncludeCents || (_cents == 0)) ? _returnStr : _returnStr + '.' + _cents;
	return _returnStr;
}
