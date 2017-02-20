$(function(){
    /** TODO:
     * Issue with iOS webapp opening in saffai vs. staying in webapp.
     * See :http://stackoverflow.com/questions/2898740/iphone-safari-web-app-opens-links-in-new-window
     * Did work but not for imageMaps. - keep trying
    */
	/*
    if (("standalone" in window.navigator) && window.navigator.standalone) {
        // For iOS Apps
        $('a').on('click', function(e){
            e.preventDefault();
            var new_location = $(this).attr('href');
            if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined){
                window.location = new_location;
            }
        });
    }*/
});

$(function(){
	$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
		_title: function(title) {
			var $title = this.options.title || '&nbsp;';
			if( ("title_html" in this.options) && this.options.title_html == true ){
				title.html($title);
			} else {
				title.text($title);
			}
		}
	}));
	
	$(".js_controlledNav").on("click", function(e){
		e.stopPropagation();
		e.preventDefault();
		//	console.log("I am in here ... ");
		window.location.href = $(this).data("url");
	});

		/*	2015-01-08 RoK:  centralize a way to do a form submit on radio button selector type element click event  */
	$(".js_controlledFormSubmit").on("click", function(e){
		e.stopPropagation();
		e.preventDefault();
		
		$(this).closest("form").submit();
	});


	/*	2015-03-31 RoK:  this class seemed to be on tags but never handled ???  I assume we just wanted to force an impotent state.  */
	$(".js_disabled").on("click", function(e){
		e.stopPropagation();
		e.preventDefault();
		return false;
	});



/*	2015-01-08 RoK:  centralize a way to do a form submit on radio button selector type element click event */ 
	$(".js_controlledSelectRadioFormSubmit").on("click", function(e){
		e.stopPropagation();
		e.preventDefault();
		//	ensure the input gets checked regardless of where in the clickable-area we clicked
		$(this).find('input[type=radio]').attr('checked', true);
		
		$(this).closest("form").submit();
	});
	
	$('.js_navigate').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();

		window.location.href = $(this).data('link');
	});

	$("#changeLanguage, .changeLanguage").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();

		var redirect	= location.href;
		var url			= $(this).attr("href");
		var curLang		= $(this).data("lang");

		window.location.href = url + "?lang=" + curLang+ "&redirect=" + encodeURIComponent(redirect);

	});
});
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* BEGIN:	from Legacy:  common/client.js    remove when no longer used - it at all possible  */ 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

// Common Client Java Script - site wide
////////////////////////////////////////////////////////////
// 	Function to prevent multiple Form submission on double-click
////////////////////////////////////////////////////////////
/*
	Submit Once form validation-   
	 	Dynamic Drive (www.dynamicdrive.com)
	For full source code, usage terms, and 100's more DHTML scripts, visit http://dynamicdrive.com
	
	Description: If you have forms on your site, you know they are extremely prone to abuse by users. Apart from 
				 incomplete or bogus entries, the most common offense is duplicate submissions by the same individual,
				 caused by pressing the "Submit" button over and over and over again. Well, this DHTML script has 
				 a cure for the problem, by allowing you to disable the submit (and reset) button once it is 
				 pressed once.
				 Note that the disabling effect is applied only to IE 4+ and NS 6+ browsers. All other browsers 
				 will still be able to sneak by and submit the form (degrades well). Also, the disabled buttons can 
				 easily be resurrected by reloading the page.
	
*/
	function submitonce(theform){
		//if IE 4+ or NS 6+
		if (document.all||document.getElementById){
			//screen thru every element in the form, and hunt down "submit" and "reset"
			for (i=0;i<theform.length;i++){
				var tempobj=theform.elements[i]
				if(tempobj.type.toLowerCase()=="submit"||tempobj.type.toLowerCase()=="reset")
					//disable em
					tempobj.disabled=true
				}
			}
	}




////////////////////////////////////////////////////////////
// Functions to handel highlite on buttons
////////////////////////////////////////////////////////////
function goLite(id){
	elem = document.getElementById(id);
	elem.className = 'btn btnOn';
}

function goDim(id){
	elem = document.getElementById(id);
	elem.className = 'btn';	
}

////////////////////////////////////////////////////////////
// Generic Window Opener
////////////////////////////////////////////////////////////
function MM_openBrWindow(theURL, winName, width, height, center) {
  xposition = 0;
  yposition = 0;

  if ((parseInt(navigator.appVersion) >= 4 ) && (center)) {
    xposition = (screen.width - width) / 2;
    yposition = (screen.height - height) / 2;
  }
  features = "width=" + width + ","
    + "height=" + height + ","
    + "location=0,"
    + "menubar=0,"
    + "resizable=0,"
    + "scrollbars=1,"
    + "status=0,"
    + "titlebar=0,"
    + "toolbar=0,"
    + "hotkeys=0,"
    + "screenx=" + xposition + ","  //NN Only
    + "screeny=" + yposition + ","  //NN Only
    + "left=" + xposition + ","     //IE Only
    + "top=" + yposition;           //IE Only

  window.open(theURL, winName, features);
}


//////////////////////////////////////////////////////////////////////////////////////////////
// 	2009-02-19: 	
//		The following was merged into this file from a second common JS file. `javascript.js`
//		which was included in 30 files.  There should only be one place where these are stored.
//
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// File: javascript.js
//
// Description:
//		Centralized location for common JavaScript functionality
//
// Information:
//		Date		- 2005-05-23
//		Author		- Rick O'Shaughnessy
//		Version	- 1.0
//
// History:
//		- v1.0 initial development
//
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//
//  Function: openWindow
//		opens a popup window and brings it to the top for focus
//
//		Parameters:
//			url 		- STRING/INT, the URL to load
//			myName		- STRING, name for the popup window
//			w 			- INT, width of new window
//			h	 		- INT, height of new window
//
//		Returns:
//			NOTHING
//
////////////////////////////////////////////////////////////
function openWindow(url,myName ,w,h){
	//	
	popwindow=window.open(url,myName,"width="+w+",height="+h+",scrollbars")
	// 	For Debugging Use this one:
	//		popwindow=window.open(url,myName,"width="+w+",height="+h+",location,resizable,scrollbars,status")
	popwindow.focus();
}

////////////////////////////////////////////////////////////
//
//  Function: reloadI_Frame
//		refreshes an i-Frame
//
//		Parameters:
//			url 		- STRING/INT, the URL to load
//			myName		- STRING, name of the I-Frame to be refreshed
//
//		Returns:
//			NOTHING
//
////////////////////////////////////////////////////////////
function reloadI_Frame(url,myName){
	//		alert("\nIn HERE>>> " + "\nURL:\t\t"+url  + "\nframeID:\t\t"+myName  + "\n" );
	top.frames[myName].location = url;
}

// FROM Macromedia for rollovers ...
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

// Dreamweaver Image Rollover Code
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
// END Dreamweaver Image Rollover Code

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* END:		from Legacy:                                                                       */ 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

$.each(pageScripts, function(idx, pageScript){
	$(pageScript());
});

