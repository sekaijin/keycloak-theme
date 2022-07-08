toggle = function(el) {
	
	const displayBlock = ['block','none'];
	if(isNaN(el.i)) {
		el.i=0;		
	}
	
	document.getElementById('kc-form-wrapper').style.display=displayBlock[el.i++ % 2];
	
	return false;
}