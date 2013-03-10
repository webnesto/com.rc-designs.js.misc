/**
 * @fileoverview
 * Clone utility
 * OWL JavaScript Utilities
   Oran Looney, April 2008

  This work is licensed under the Creative Commons Attribution 3.0 United 
  States License. To view a copy of this license, visit 
  http://creativecommons.org/licenses/by/3.0/us/ or send a letter to 
  Creative Commons, 171 Second Street, Suite 300, 
  San Francisco, California, 94105, USA.
 * 
 * @author  Oran Looney
 * @date 04/01/2008
 */

/**
 * @namespace Holds all general utility methods/tools
 */
var utils = utils || {}

/**
 * Used to create an object clone.  A clone of an object is an empty object with a prototype 
 * reference to the original. As such, you can access the current properties of the original 
 * through the clone.  Can be an alternative to PrototypeJS Class system
 * 
 * @function
 * @param {Object} obj Object to be cloned.   Can be thought of as a Class definition.
 * @returns {Object}
 */
utils.clone = function(obj){

	/* NOTE: this is an older version of the clone.  It uses more memory by also creating
	 a new function object along with the clone.
	 function clone(obj) {
	 // A clone of an object is an empty object with a prototype reference to the original.
	 // As such, you can access the current properties of the original through the clone.
	 // If you set a clone's property, it will override the orignal's property, and
	 // not affect the orignal. You can use the delete operator on the clone's overridden
	 // property to return to the earlier lookup behavior.
	 function _Clone() { } // a private constructor, used only by this one clone.
	 Clone.prototype = obj;
	 var c = new Clone();
	 c.constructor = Clone;
	 return c;
	 }
	 */
	// This version of clone was inspired by the MochiKit clone function.
	function _Clone(){ }
	
	function chain(base, local){
		// creates a scope chain, where the local properties are searched first, and then
		// the base properties.  The local properties are copied in, but base is cloned in.
		var chain = utils.clone(base);
		for (key in local) {
			chain[key] = local[key];
		}
		return chain;
	}
	
	_Clone.prototype = obj;
	return new _Clone();
}