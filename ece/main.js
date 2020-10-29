//****************************************************
//This function handles bug in IE CSS support so that the drop-down menus work with the :hover pseudo-class
//****************************************************
sfHover = function() { 
var sfEls = document.getElementById("nav").getElementsByTagName("li");
var e=document.getElementsByTagName("select");
 for (var i=0; i<sfEls.length; i++) { 
 	sfEls[i].onmouseover=function() { 
		//Fixes bug in IE5/IE6 where drop-down menus show behind select tags
		for(var i=0;i<e.length;i++){e[i].style.visibility = "hidden";}
		//
		this.className+=" sfhover";
		 } 
		sfEls[i].onmouseout=function() { 
		//Fixes bug in IE5/IE6 where drop-down menus show behind select tags	
		for(var i=0;i<e.length;i++){e[i].style.visibility = "visible";}
		//
			this.className=this.className.replace(new RegExp(" sfhover\\b"), ""); } } } 
if (window.attachEvent) window.attachEvent("onload", sfHover);