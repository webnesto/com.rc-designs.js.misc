/**
 * @author ernesto
 */

/**
 * @namespace Holds all general utility methods/tools
 */
var utils = utils || {}
utils.actionOnOutOfAll = function(nodes, closeAction){
	
		var _overClass = "ALLOVERACTIONCLASS_" + Math.floor(Math.random()*10000);
		var _allElements = nodes;
	
		function _over(){
			this.addClassName(_overClass);
		}
		function _out(){
			this.removeClassName(_overClass);
			_stateCheck(null, this);
		}
	
		function _anyOver(){
			return _allElements.any(function(elem){
				return elem.hasClassName(_overClass)
			});
		}
	
		function _stateCheck(event, item, onTimeout){
			if (!onTimeout){
				setTimeout(function(){
					_stateCheck(null, item, true)
				},2);
			} else {
				if (!_anyOver()) {
					closeAction(item);
				}
			}
		}
		
		
		return {
			setEventListeners: function(){
				_allElements.each(function(domNode){
					domNode.observe("mouseover", _over);
					domNode.observe("mouseout", _out);
				});
			},

			clearListeners: function(){
				_allElements.each(function(domNode){
					domNode.stopObserving("mouseover", _over);
					domNode.stopObserving("mouseout", _out);
				});
			}
		}
	}
