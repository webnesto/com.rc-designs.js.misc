/**
 * @author ernesto
 */

var utils = utils || {};

utils.imageLoader = Class.create({
	initialize: function(imagepath, targetimage){
		this.targetimage = targetimage;
		this.tmpImage = new Image();
		$(this.tmpImage).observe("load",function(){
			this.targetimage.src = this.tmpImage.src;
		}.bind(this)); 
		this.tmpImage.src = imagepath;
	}
})