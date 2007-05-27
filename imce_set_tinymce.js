// $Id$

//TODO: need to check opener.opener.hookImceFinish in imce_browse.js

//variable container
var imceTiny = {};

//hookImceUrl
var tinyImceUrl;

//hookImceFinish
function tinyImceFinish(file, win) {

  imceTiny.field.value = file.url; // set URL
  
  if (imceTiny.win.document.forms[0].elements['width']) { //set width
    imceTiny.win.document.forms[0].elements['width'].value = file.width;
  }
  
  if (imceTiny.win.document.forms[0].elements['height']) { //set height
    imceTiny.win.document.forms[0].elements['height'].value = file.height;
  }

  imceTiny.pop.blur();
  imceTiny.win.focus();
  imceTiny.field.focus();
}

// file browser function of tinyMCE
function imceFileBrowser(field_name, url, type, win) {

  var browserUrl = imceBrowserURL || '/?q=imce/browse';
  
  imceTiny.win = win;
  imceTiny.field = win.document.forms[0].elements[field_name];
  tinyImceUrl = url;

  if (typeof imceTiny.pop == 'undefined' || imceTiny.pop.closed) {
    imceTiny.pop = window.open(browserUrl, 'tiny', 'width='+ 640 +', height='+ 480 +', resizable=1');
  }
  else {
    imceTiny.pop.imce.fileHighlight(url);
  }

  imceTiny.pop.focus();
}
