"use strict";$(function(){$("#carousel_1").FtCarousel(),$("#share a").mouseenter(function(){$(this).css({position:"relative"}).stop().animate({left:"-15px"},100)}),$("#share a").mouseleave(function(){$(this).css({position:"relative"}).stop().animate({left:"0px"},100)}),$.ajax({type:"get",url:"jsonData/zuixin.json",async:!0,success:function(t){for(var n="",e=0;e<t.length;e++)for(var a in t[e])n+='<li>\n\t\t\t\t\t\t<a href="">\n\t\t\t\t\t\t\t<img src="'+a+'" class="picScral"/>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p><img src="'+t[e][a]+'"/></p>\n\t\t\t\t\t</li>';document.getElementById("zuixinUl").innerHTML=n}}),$.ajax({type:"get",url:"jsonData/jianhuo.json",async:!0,success:function(t){for(var n=document.getElementsByClassName("jianhuoUl"),e=0;e<t.length;e++){for(var a="",s=0;s<t[e].length;s++)a+='<li>\n\t\t\t\t\t<a href="">\n\t\t\t\t\t\t<img src="'+t[e][s]+'" alt="" />\n\t\t\t\t\t\t\n\t\t\t\t\t</a>\n\t\t\t\t</li>';n[e].innerHTML=a}}}),$.ajax({type:"get",url:"jsonData/rejian.json",async:!0,success:function(t){for(var n="",e=0;e<t.length;e++)for(var a in t[e])n+='<li>\n\t\t\t\t\t\t<a href="">\n\t\t\t\t\t\t\t<img src="'+a+'" class="picScral"/>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p><img src="'+t[e][a]+'"/></p>\n\t\t\t\t\t</li>';document.getElementById("rejianUl").innerHTML=n}}),$.ajax({type:"get",url:"jsonData/haohuo.json",async:!0,success:function(t){for(var n="",e=0;e<t.length;e++)n+='<li>\n\t\t\t\t\t<a href="">\n\t\t\t\t\t\t<img src="'+t[e]+'" alt="" />\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</a>\t\n\t\t\t\t</li>';document.getElementById("haohuoUl").innerHTML=n}});var r=document.getElementsByClassName("erji_left");$.ajax({type:"get",url:"jsonData/erjicandan.json",async:!0,success:function(t){for(var n=0;n<t.length;n++){for(var e="",a=0;a<t[n].length;a++){e+="<dl>\n\t\t\t\t\t\t\t\t\t\t<dt>\n\t\t\t\t\t\t\t\t\t\t\t"+t[n][a].title+"\n\t\t\t\t\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>";for(var s=0;s<t[n][a].con.length;s++)e+='<a href="html/list.html">'+t[n][a].con[s]+"</a> <span>|</span>";e+="</dd></dl>"}r[n].innerHTML=e}}});var s=document.getElementsByClassName("erji_right");$.ajax({type:"get",url:"jsonData/erjiremai.json",async:!0,success:function(t){for(var n=0;n<t.length;n++){for(var e="<dl><dt>热门品牌</dt><dd>",a=0;a<t[n].length;a++)e+='<a href="">'+t[n][a]+"</a>";e+="</dd></dl>",s[n].innerHTML=e}}})});
//# sourceMappingURL=indexS.js.map
