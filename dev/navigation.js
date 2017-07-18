function gotoHref(target) {
	location.href = target;
}

function paramsArray() {
	return location.search.substr(1).split('&');
}

function getParam(param) {
	var params = paramsArray();
	var iprm, value = null;
	
	for (var i = 0; i < params.length; i++) {
		iprm = params[i].split('=');
		
		if (param == iprm[0]) {
			value = iprm[1];
			break;
		}
	}
	
	return value;
}
