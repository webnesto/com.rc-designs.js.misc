/**
 * @author joseph
 */
var utils = utils || {};

/**
 * Requires a 3 objects:
 * 1. Containing Wrapper Class 
 * 2. A switch to toggle the display with a class name
 * 3. the object that will be toggle on/off with a class name
 */

utils.setToggleElements = function(containerNode, wrapperClass, switchClass, toggleItemClass){
	var _toggleWrappers;
	if(containerNode){
		_toggleWrappers = $(containerNode).select('.'+wrapperClass);
	} else {
		_toggleWrappers = $$('.'+wrapperClass);
	}
	_toggleWrappers.each(function(_wrapper) {
		var _switch =  _wrapper.select('.'+switchClass).first();
		var _toggledItem =  _wrapper.select('.'+toggleItemClass).first();

		function toggle(item) {
			item.style.display === 'none' ? item.style.display = 'block' : item.style.display = 'none';
		}
		
		function rotateArrow(_this) {
			_this.hasClassName('closed') ? _this.removeClassName('closed') : _this.addClassName('closed');
		}
		
		_switch.observe("click", function(){
			toggle(_toggledItem);
			rotateArrow(this);
			if (window.getSelection && window.getSelection() != null) {
				window.getSelection().removeAllRanges();
			} else if (document.selection) {
				window.document.selection.empty();
			}
		});
		
	});	
}
