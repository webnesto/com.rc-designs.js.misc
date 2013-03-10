/**
 * @fileoverview
 * Interfaces
 * System to ensure an interface has been implemented.  
 * Used only for debugging.  Bulk of code is ommitted when built with pre-processing unless debug mode set.
 *
 * @author ernesto
 * @date 11/20/09
 */
 
/**
 * Ensure namespace exists
 * @type namespace
 */
var utils = utils || {};

/**
 * Can be used to determine if an object or class implements an interface.
 *
 * @param
 * @param ifaceDefinition Object Must be in the form { NAME: function(){ return "Interface Name" }, methods: ["foo","bar",...] }
 *
 */
utils.implementsInterface = function(classDef, ifaceDefinition){
	var _returnVal = true;
	// #ifdef debug
	var _className = (classDef.NAME) ? classDef.NAME() : "[Class Name not Specified]";
	var _classScope = classDef.prototype || classDef;
	ifaceDefinition.methods.each(function(method){
		if((typeof(_classScope[method])) !== "function"){
			debug.debug(classDef);
			debug.error(_className + " has no " + method + "()  which must be overriden to implement " + ifaceDefinition.NAME());
			_returnVal = false;
		}
	}.bind(this));
	if(_returnVal){
		debug.log(_className+" implements "+ifaceDefinition.NAME());
	}
	// #endif
	return _returnVal;
}
