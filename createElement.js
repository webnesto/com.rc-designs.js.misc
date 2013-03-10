/**
 * @fileoverview
 * Convenience method for creating DOM element
 * 
 * TODO: Implement checks for control attributes that could cause trouble (i.e. "id")
 * 
 * @author ernesto
 * @date 02/17/10
 */

/** @namespace Holds all general utility methods/tools */
var utils = utils || {};

/**
 * Pass in an object to create a DOM element.  Object should be in the form:
 * 	{
 * 		tag: "TAGNAME", // REQUIRED
 * 		attributes : { // Optional
 * 			"style" : "display: none;",
 * 			"class" : "fooClass",
 * 			"href"	: "http://www.foo.com"
 * 		},
 * 		innerHTML : "Text for inside the tag.  <b> Can contain html, though not recommended</b>." //Optional
 * 	}
 * 
 * @function
 * @param {Object} oblit See above for expected object structure.
 * @returns {DOM Element}
 */
utils.createElement = function(oblit, documentScope){
	if(!oblit.tag) return false; //No tagname provided, returning.
	var _document = documentScope || document;
	
	// Create a new dom element of provided tagname.
	var _newNode = _document.createElement(oblit.tag);
	
	// Check to see if any attributes have been provided
	if(oblit.attributes){
		// Iterate attributes
		for(var attrib in oblit.attributes){
			// Ensure each attribute is not inherited by prototype chaining
			if(oblit.attributes.hasOwnProperty(attrib)){
				// Create a new attribute
				var _newAttrNode = _document.createAttribute(attrib);
				// Set attribute value
				_newAttrNode.nodeValue = oblit.attributes[attrib];
				// Add attribute to dom element
				_newNode.setAttributeNode(_newAttrNode);
			}
		}
	}
	
	// Check to see if an innerHTML string has been provided
	if(oblit.innerHTML){
		// Set innerHTML value of dom element
		_newNode.innerHTML = oblit.innerHTML;
	}
	
	// Return dom element
	return _newNode;
}

