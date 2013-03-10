/**
 * @author ernesto
 */

var utils = utils || {};

utils.templateProcess = function(objectLiteral, templateSet, templateName, iterationIndex){
	// #ifdef debugger
		//if(!objectLiteral) debug.error("utils.templateProcess() - called with objectLiteral undefined");
		if(!templateSet) debug.error("utils.templateProcess() - called with no templateSet defined");
		if(!templateSet[templateName]) debug.error("utils.templateProcess() - called with out a valide templateName named: " + templateName);
	// #endif
	if(!objectLiteral) return;
	var _finalObj = objectLiteral;
	_finalObj.iterationIndex = iterationIndex;
	var _template = templateSet[templateName];
	
	function _handleArray(arry, newTemplateName){
		var _returnList = "";
		if (templateSet[newTemplateName]) {
			arry.each(function(itemData, index){
				_returnList += utils.templateProcess(itemData, templateSet, newTemplateName, index);
			});
		}  
		// #ifdef debugger
		else {
			debug.error("utils.templateProcess() - Array in data with no template section of appropriate name: " + attrib);
		}
		// #endif
		return _returnList;
	}
	
	if(_finalObj instanceof Array) {
		_finalObj = _handleArray(_finalObj, templateName);
		return(_finalObj);
	} else {
		for(var attrib in _finalObj){
			if (_finalObj.hasOwnProperty(attrib)) {
				if (_finalObj[attrib] instanceof Array) {
					_finalObj[attrib] = _handleArray(_finalObj[attrib], attrib);
				} else if (_finalObj[attrib] instanceof Object) {
					if (templateSet[attrib]) {
						_finalObj[attrib] = utils.templateProcess(_finalObj[attrib], templateSet, attrib);
					}
				}
			}
		}
		return _template.evaluate(_finalObj);
	}
}
