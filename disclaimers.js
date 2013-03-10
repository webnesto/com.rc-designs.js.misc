/**
 * @fileoverview
 * 
 * @author ernesto
 */
var utils = utils || {};

utils.disclaimers = Class.create({	
	initialize: function(tagName, tagAttribute, targetDiv, elementsToCheck, dataSourceMethod){
		var _this = this
			, _tagName = tagName // e.g. "DISCLAIMER"
			, _codeAttribute = tagAttribute // e.g. "name"
			, _targetDiv = targetDiv
			, _elementsToCheck = elementsToCheck
			, _dataSourceMethod = dataSourceMethod
			, _discLinkTpl = new Template('<a href="#disc_#{num}" class="disclink">[#{num}]</a>')
			, _discItemTpl = new Template('<a name="disc_#{num}"></a><span class="disc_number">[#{num}]</span><span class="disc_text" disc_code="#{code}">#{description}</span>')
			, _codeArray = []
			, _discHash = {}
			, _loopCheck
		;
		
		function _getNumber(name){
			if(_codeArray.indexOf(name) > -1){
				return _codeArray.indexOf(name)+1;
			} else {
				_codeArray.push(name);
				return _codeArray.length;
			}
		}
		
		function _getDetails(codeArray){
			var _responseObj = _dataSourceMethod(codeArray);
			
			for(discCode in _responseObj){
				_discHash[discCode] = _responseObj[discCode];
			}
			
			//if(_loopCheck < 5){
				_loopCheck++;
			//}
			_updateList();
		}
		
		function _updateList(){
			var _needDetails = [];
			_codeArray.each(function(discCode){
				if(!_discHash[discCode]){
					_needDetails.push(discCode);
				}
			});
			if((_needDetails.length > 0) && (_loopCheck < 3)){
				_getDetails(_needDetails);
			} else {//got everything we need or looped too many times trying to get it.  Let's output it.
				var _htmlString = ''; //'<ul class="discList">'
				_codeArray.each(function(discCode){
					var _templateObj = {
						num: _getNumber(discCode),
						code: discCode,
						description: _discHash[discCode] || "No disclaimer description found"
					}
					_htmlString += _discItemTpl.evaluate(_templateObj);
				});
				//_htmlString += '';//"</ul>";
				if(_targetDiv) $(_targetDiv).update(_htmlString);
			}
		}
		
		function _updateLink(discTag, linkText){
			var _prev = discTag.previous();
			if (_prev && _prev.hasClassName("disclink")) {
				discTag.previous().replace(linkText);

			}else{
				discTag.insert({before:linkText});
			}
		}
		
		function _update(){
			_loopCheck = 0;
			
			_updateList();
			if(_targetDiv) _targetDiv.fire(_this.DISCLAIMER_LOADED);
			

			if(!_elementsToCheck || (_elementsToCheck.length == 0)){ //no dom nodes passed... we'll check the whole document
				document.fire(_this.DISCLAMIER_PARSED);			
			} else {
				_elementsToCheck.each(function(domNode){
					domNode.fire(_this.DISCLAMIER_PARSED);
				})
			}
			
		}
		
		this.DISCLAMIER_PARSED = "utils:disclaimers:parsed";
		this.DISCLAIMER_LOADED = "utils:disclaimers:loaded";
		
		this.update = function(){
			_codeArray = []; //clear out stored codes (gonna rebuild from currently visible tags)
			_discNodes = []; 
			
			if(!_elementsToCheck || (_elementsToCheck.length == 0)){ //no dom nodes passed... we'll check the whole document
				_discNodes = $$(_tagName);
			
			} else {
				_elementsToCheck.each(function(domNode){
					if($(domNode).visible){ //check to see if the node is visible... NOTE: only works if the node itself has an inline style set
						_discNodes = _discNodes.concat($(domNode).select(_tagName));
					}
				})
				
			}
			
			_discNodes.each(function(discTag){
				var _code = discTag.readAttribute(_codeAttribute)
					, _templateObj = {
					num : _getNumber(_code),
					code: _code
				}
				_updateLink(discTag, _discLinkTpl.evaluate(_templateObj))
			});
			
			setTimeout(_update, 13);
			//_targetDiv.fire(this.DISCLAIMER_LOADED);
			//setTimeout("alert('disc loaded')", 14);
			
		}
		
		this.targetDiv = function(){
			return _targetDiv;
		}
		
		this.setDiscLinkTpl = function(str){
			_discLinkTpl = new Template(str);
		}
		
		this.setDiscItemTpl = function(str){
			_discItemTpl = new Template(str);
		}
		
	}
	
});


