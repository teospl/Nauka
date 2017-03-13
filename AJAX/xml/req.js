function createReq(){
	var req=null;
	if(window.XMLHttpRequest){
		req = new XMLHttpRequest();
	}else{
		req = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return req;
}

function isReady(req){
	if(req.readyState==4 && req.status==200){
		return true;
	}else{
		return false;
	}
}