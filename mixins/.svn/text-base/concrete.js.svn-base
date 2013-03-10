/**
 * @fileoverview
 * Mixin for use in concrete implementation of abstract class
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
 * Mix in object for use in defining a class as Concrete that extends an Abstract class.
 * This mixin is only needed for use with classes extending a class which has mixed in utils.mixins.abstractItem
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
 * @see utils.mixins.abstractItem
 * @requires debug
 */
utils.mixins.concrete = {
	/**
	 * Overrides previously defined isAbstract in utils.mixins.abstractItem ensuring that class reports as Concrete,
	 * or that is not Abstract.
	 * 
	 * @function
	 * @returns false
	 */
	isAbstract: function(){
		// #ifdef debug
		var _className = (this.NAME) ? this.NAME() : "[Class Name not Specified]";
		debug.log(_className + ' is Concrete.');
		// #endif
		return false;
	}
}
