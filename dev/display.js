function showMsgBox(content_text) {
	var msgbox = document.createElement("div");
	msgbox.id = "msgbox";
	
	/*var title = document.createElement("h1");
	title.id = "msgbox_title";
	var title_node = document.createTextNode(title);
	title.appendChild(title_node);*/
	
	var content = document.createElement("p");
	content.id = "msgbox_content";
	var content_node = document.createTextNode(content_text);
	content.appendChild(content_node);
	
	var closebtn = document.createElement("button");
	closebtn.id = "msgbox_closebtn";
	var closebtn_node = document.createTextNode("-");
	closebtn.appendChild(closebtn_node);
	
	var infobtn = document.createElement("button");
	infobtn.id = "msgbox_infobtn";
	var infobtn_node = document.createTextNode("i");
	infobtn.appendChild(infobtn_node);
	
	msgbox.appendChild(closebtn);
	msgbox.appendChild(content);
	msgbox.appendChild(infobtn);
	
	document.body.appendChild(msgbox);
}