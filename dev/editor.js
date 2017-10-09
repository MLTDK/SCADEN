function Elem(name, text) {
	this.name = name;
	this.text = text;
	this.x = 10;
	this.y = 10;
}

var e = new Elem("Elem", "Elem");
console.log(e.name);
console.log(e.text);

function shadowElem(elem) {
	document.getElementById(elem).style = "text-shadow: 1px 1px black";
}

function outlineElem(elem) {
	if (confirm('Uggly function. Are you sure ?')) {document.getElementById(elem).style = "-webkit-text-stroke: 4px navy;";}
}

function fontElem(elem) {
	document.getElementById(elem).style = "font-family: 'SFutura', serif; font-size: 24px;";
}

function boldElem(elem) {
	document.getElementById(elem).style = "font-weight: bold;";
}

function italicElem(elem) {
	document.getElementById(elem).style = "font-style: italic;";
}

function underlineElem(elem) {
	document.getElementById(elem).style = "text-decoration: underline;";
}

function leftAlignElem(elem) {
	document.getElementById(elem).style = "text-align: left;";
}

function centerAlignElem(elem) {
	document.getElementById(elem).style = "text-align: center;";
}

function rightAlignElem(elem) {
	document.getElementById(elem).style = "text-align: right;";
}

function getElemOffset(elem) {
	var left = 0,
		top = 0;
	
	do {
		left += elem.offsetLeft;
		top += elem.offsetTop;
	} while (elem = elem.offsetParent)
	
	return {
		left: left,
		top: top
	}
}

function enableSelection() {
	var elem1 = document.getElementById("elem1"),
		elemStorage = {};
	var pageEdit = document.getElementById("page_edit");
	
	elem1.addEventListener("mousedown", function(e) {
		elem1.style.border = "1px solid yellow";
		
		elemStorage.target = e.target;
		elemStorage.offsetX = e.clientX - getElemOffset(elemStorage.target).left + getElemOffset(pageEdit).left;
		elemStorage.offsetY = e.clientY - getElemOffset(elemStorage.target).top + getElemOffset(pageEdit).top;
	});
	
	elem1.addEventListener("mouseup", function() {
		elemStorage = {};
	});
	
	pageEdit.addEventListener("mousemove", function(e) {
		var target = elemStorage.target;
		
		if (target) {
			target.style.left = e.clientX - elemStorage.offsetX + 'px';
			target.style.top = e.clientY - elemStorage.offsetY + 'px';
		}
	});
}

enableSelection();
