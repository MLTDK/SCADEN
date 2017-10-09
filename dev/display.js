function showMsgBox(contentText) {
	var msgbox = document.createElement("div");
	msgbox.id = "msgbox";
	
	/*var title = document.createElement("h1");
	title.id = "msgbox_title";
	var title_node = document.createTextNode(title);
	title.appendChild(title_node);*/
	
	var content = document.createElement("p");
	content.id = "msgbox_content";
	var contentNode = document.createTextNode(contentText);
	content.appendChild(contentNode);
	
	var closebtn = document.createElement("button");
	closebtn.id = "msgbox_closebtn";
	var closebtnNode = document.createTextNode("-");
	closebtn.appendChild(closebtnNode);
	
	var infobtn = document.createElement("button");
	infobtn.id = "msgbox_infobtn";
	var infobtnNode = document.createTextNode("i");
	infobtn.appendChild(infobtnNode);
	
	msgbox.appendChild(closebtn);
	msgbox.appendChild(content);
	msgbox.appendChild(infobtn);
	
	closebtn.addEventListener("click", function(e) {
		document.body.removeChild(msgbox);
	});
	
	document.body.appendChild(msgbox);
}
