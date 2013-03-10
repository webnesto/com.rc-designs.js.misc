/**
 * @author ernesto
 */

/**
 * @namespace Holds all general utility methods/tools
 */
var utils = utils || {}
 
utils.multiHover = function(initElement, otherElement, overAction, outAction){
	var _overClass = "over";
	var _allElements = [initElement, otherElement];
	var _overAction = overAction || false;
	var _outAction = outAction || false;
	
	function _over(){
		this.addClassName(_overClass);
	}
	function _out(){
		this.removeClassName(_overClass);
	}
	function _show(){
		setTimeout(function(){
			_stateCheck(null, true)
		}, 3);
	}
	function _stateCheck(e, onTimeOut){
		if (!onTimeOut) {
			setTimeout(function(){
				_stateCheck(null, true)
			}, 3);
		} else {
			if (!_anyOver()) {
				if (_outAction) {
					_outAction();
				} else {
					otherElement.hide();
				}
			} else {
				if(_overAction){
					_overAction();
				} else {
					otherElement.show();
				}
			}
		}
	}
	function _anyOver(){
		return _allElements.any(function(elem){
			return elem.hasClassName("over")
		});
	}
	
	_allElements.each(function(elem){
		elem.observe('mouseover', _over);
		elem.observe('mouseout', _out);
		elem.observe('mouseout', _stateCheck);
	});
	
	initElement.observe('mouseover', _show);
}
