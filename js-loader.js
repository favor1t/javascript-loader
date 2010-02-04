
/*
	* JavaScript Loader
	* :: Quick and easy way to load multiple JavaScript files via a single reqquest
	* Code: http://javascript-loader.googlecode.com/
	* Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
	* Version: 0.2 (1/30/2010)
	* Licensed under the GNU General Public License v3
	* http://www.gnu.org/copyleft/gpl.html
	* Tested in: Safari 4, Firefox 3, IE7 and Mobile Safari 2.2.1
*/

var script = (function(){
    var src=document.getElementsByTagName('script');
    return src[src.length-1].getAttribute("src");
	})();
var q = script.indexOf('?');
if (q != -1) {
	path = script.substring(0, script.lastIndexOf("/")+1);
	filename = script.substring(path.length,q);
	files = script.substring(q+1, script.length).split("|");
	for(file in files) {
	    document.write("<script type='text/javascript'src='"+path+files[file]+".js'></script>");
		}
	}
var JSLoader = {
	load: function(){
		for (i in arguments) {
		    document.write("<script type='text/javascript'src='"+arguments[i]+".js'></script>");			
			}
		}	
	}


