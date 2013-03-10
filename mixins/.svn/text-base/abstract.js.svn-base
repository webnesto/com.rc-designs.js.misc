/**
 * @fileoverview
 * Mixin for use in creating Abstract class definitions
 * 
 * @author ernesto
 * @date 02/17/10
 */

/**
 * @namespace Holds all general utility methods/tools
 */
var utils = utils || {};

/**
 * @namespace Holds all methods exclusively intended for mixing in to class definitions. 
 */
utils.mixins = utils.mixins || {};

/**
 * Mix in object for use in defining a class as Abstract (i.e. should not/can-not be instantiated, 
 * and should only be extended). To use, mixin this object and call isAbstract method in class constructor
 * ("initialize" method in standard PrototypeJS Class structure).  Classes that extend this abstract class will
 * then need to mixin utils.mixins.concrete.
 * 
 * Example Code:
 *   var FooAbstract = Class.create(
 *     utils.mixins.abstractItem,
 *     {
 *       initialize: function(){
 *         this.isAbstract();
 *       }
 *     }
 *   );
 *   
 *   var FooConcrete = Class.create(
 *     FooAbstract,
 *     utils.mixins.concrete,
 *     {
 *       initialize: function($super){
 *         $super();
 *       }
 *     }
 *   );
 * 
 * @see utils.mixins.concrete
 * @requires debug
 */
utils.mixins.abstractItem = {
	/**
	 * Utility method for validating a class as Abstract or not
	 * 
	 * @function
	 * @returns true
	 */
	isAbstract: function(){
		// #ifdef debug
		var _className = (this.NAME) ? this.NAME() : "[Class Name not Specified]";
		debug.error(_className + ' is Abstract and may not be instantiated!');
		// #endif
		return true;
	}
} 

