/**
 * @author ernesto
 */
var utils = utils || {};

utils.validators = utils.validators || {};

utils.validators.zipcode = function(zipValue){
   var re = /^\d{5}([\-]\d{4})?$/;
   return (re.test(zipValue) && zipValue != "00000");
}
