/**
 * @author joseph
 */
var utils = utils || {};

utils.validators = utils.validators || {};

utils.validators.email = function(emailAdd){
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAdd)){
		return true;
	}			
	return false;
}
