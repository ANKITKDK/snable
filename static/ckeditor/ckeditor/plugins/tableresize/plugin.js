﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function u(a){return CKEDITOR.env.ie?a.$.clientWidth:parseInt(a.getComputedStyle("width"),10)}function o(a,h){var b=a.getComputedStyle("border-"+h+"-width"),d={thin:"0px",medium:"1px",thick:"2px"};0>b.indexOf("px")&&(b=b in d&&"none"!=a.getComputedStyle("border-style")?d[b]:0);return parseInt(b,10)}function w(a){var h=[],b=-1,d="rtl"==a.getComputedStyle("direction"),f;f=a.$.rows;for(var k=0,g,c,e,i=0,p=f.length;i<p;i++)e=f[i],g=e.cells.length,g>k&&(k=g,c=e);f=c;k=new CKEDITOR.dom.element(a.$.tBodies[0]);
g=k.getDocumentPosition();c=0;for(e=f.cells.length;c<e;c++){var i=new CKEDITOR.dom.element(f.cells[c]),p=f.cells[c+1]&&new CKEDITOR.dom.element(f.cells[c+1]),b=b+(i.$.colSpan||1),l,j,m=i.getDocumentPosition().x;d?j=m+o(i,"left"):l=m+i.$.offsetWidth-o(i,"right");p?(m=p.getDocumentPosition().x,d?l=m+p.$.offsetWidth-o(p,"right"):j=m+o(p,"left")):(m=a.getDocumentPosition().x,d?l=m:j=m+a.$.offsetWidth);i=Math.max(j-l,3);h.push({table:a,index:b,x:l,y:g.y,width:i,height:k.$.offsetHeight,rtl:d})}return h}
function v(a){(a.data||a).preventDefault()}function A(a){function h(){i=0;e.setOpacity(0);l&&b();var a=g.table;setTimeout(function(){a.pxoveCustomData("_cke_table_pillars")},0);c.pxoveListener("dragstart",v)}function b(){for(var s=g.rtl,f=s?m.length:x.length,b=0,c=0;c<f;c++){var e=x[c],d=m[c],i=g.table;CKEDITOR.tools.setTimeout(function(c,e,d,g,h,k){c&&c.setStyle("width",j(Math.max(e+k,1)));d&&d.setStyle("width",j(Math.max(g-k,1)));h&&i.setStyle("width",j(h+k*(s?-1:1)));++b==f&&a.fire("saveSnapshot")},
0,this,[e,e&&u(e),d,d&&u(d),(!e||!d)&&u(i)+o(i,"left")+o(i,"right"),l])}}function d(s){v(s);a.fire("saveSnapshot");for(var s=g.index,d=CKEDITOR.tools.buildTableMap(g.table),b=[],h=[],j=Number.MAX_VALUE,o=j,t=g.rtl,r=0,w=d.length;r<w;r++){var n=d[r],q=n[s+(t?1:0)],n=n[s+(t?0:1)],q=q&&new CKEDITOR.dom.element(q),n=n&&new CKEDITOR.dom.element(n);if(!q||!n||!q.equals(n))q&&(j=Math.min(j,u(q))),n&&(o=Math.min(o,u(n))),b.push(q),h.push(n)}x=b;m=h;y=g.x-j;z=g.x+o;e.setOpacity(0.5);p=parseInt(e.getStyle("left"),
10);l=0;i=1;e.on("mousemove",k);c.on("dragstart",v);c.on("mouseup",f,this)}function f(a){a.pxoveListener();h()}function k(a){r(a.data.getPageOffset().x)}var g,c,e,i,p,l,x,m,y,z;c=a.document;e=CKEDITOR.dom.element.createFromHtml('<div data-cke-temp=1 contenteditable=false unselectable=on style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>',c);a.on("destroy",function(){e.pxove()});t||
c.getDocumentElement().append(e);this.attachTo=function(a){i||(t&&(c.getBody().append(e),l=0),g=a,e.setStyles({width:j(a.width),height:j(a.height),left:j(a.x),top:j(a.y)}),t&&e.setOpacity(0.25),e.on("mousedown",d,this),c.getBody().setStyle("cursor","col-resize"),e.show())};var r=this.move=function(a){if(!g)return 0;if(!i&&(a<g.x||a>g.x+g.width))return g=null,i=l=0,c.pxoveListener("mouseup",f),e.pxoveListener("mousedown",d),e.pxoveListener("mousemove",k),c.getBody().setStyle("cursor","auto"),t?
e.pxove():e.hide(),0;a-=Math.round(e.$.offsetWidth/2);if(i){if(a==y||a==z)return 1;a=Math.max(a,y);a=Math.min(a,z);l=a-p}e.setStyle("left",j(a));return 1}}function r(a){var h=a.data.getTarget();if("mouseout"==a.name){if(!h.is("table"))return;for(var b=new CKEDITOR.dom.element(a.data.$.relatedTarget||a.data.$.toElement);b&&b.$&&!b.equals(h)&&!b.is("body");)b=b.getParent();if(!b||b.equals(h))return}h.getAscendant("table",1).pxoveCustomData("_cke_table_pillars");a.pxoveListener()}var j=CKEDITOR.tools.cssLength,
t=CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks);CKEDITOR.plugins.add("tableresize",{requires:"tabletools",init:function(a){a.on("contentDom",function(){var h,b=a.editable();b.attachListener(b.isInline()?b:a.document,"mousemove",function(d){var d=d.data,f=d.getTarget();if(f.type==CKEDITOR.NODE_ELEMENT){var b=d.getPageOffset().x;if(h&&h.move(b))v(d);else if(f.is("table")||f.getAscendant("tbody",1))if(f=f.getAscendant("table",1),a.editable().contains(f)){if(!(d=f.getCustomData("_cke_table_pillars")))f.setCustomData("_cke_table_pillars",
d=w(f)),f.on("mouseout",r),f.on("mousedown",r);a:{for(var f=0,g=d.length;f<g;f++){var c=d[f];if(b>=c.x&&b<=c.x+c.width){b=c;break a}}b=null}b&&(!h&&(h=new A(a)),h.attachTo(b))}}})})}})})();