/**
 * @fileoverview
 * Copy utility
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
 * JavaScript doesn't have a 'copy' function, because each class will best know
 * how to copy itself. However, it is possible to provide a function that suffices for
 * many object, particularly Object literals.  This `copy()` will perform a shallow 
 * copy on core JavaScript objects and will probably work for most user-defined classes.
 *   This copies an object exactly, including it's internal prototype and value references.
 * Only properties that are directly attached to the source object are copied.
 * However, an object and a copy will not compare equal with == or ===.
 *   Also, while this works on core JavaScript types, it probably won't work on
 * DOM elements and other objects provided by the runtime environment.
 * 
 * @function
 * @param {Object} obj Object to be copied.
 * @requires utils.clone
 * @returns {Object}
 */
utils.copy = function(obj) {
	if (typeof obj !== 'object' ) {
		return obj;  // non-object have value sematics, so obj is already a copy.
	} else {
		var value = obj.valueOf();
		if (obj != value) { 
			// the object is a standard object wrapper for a native type, say String.
			// we can make a copy by instantiating a new object around the value.
			return new obj.constructor(value);
		} else {
			// ok, we have a normal object. If possible, we'll clone the original's prototype 
			// (not the original) to get an empty object with the same prototype chain as
			// the original.  If just copy the instance properties.  Otherwise, we have to 
			// copy the whole thing, property-by-property.
			if ( obj instanceof obj.constructor && obj.constructor !== Object ) { 
				var c = utils.clone(obj.constructor.prototype);
			
				// give the copy all the instance properties of obj.  It has the same
				// prototype as obj, so inherited properties are already there.
				for ( var property in obj) { 
					if (obj.hasOwnProperty(property)) {
						c[property] = obj[property];
					} 
				}
			} else {
				var c = {};
				for ( var property in obj ) c[property] = obj[property];
			}
			return c;
		}
	}
}
