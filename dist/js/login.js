"use strict";$(function(){$("#phoneL").focus(function(){$(this).css("border","1px solid #7fbfe7").attr("placeholder",""),$(".phone_kuang>span").show(),$("#tishiL").hide()}),$("#phoneL").blur(function(){$(this).css("border","1px solide #7fbfe7").attr("placeholder","手机号码"),$(".phone_kuang>span").hide()}),$("#yanzhnegmaL").focus(function(){$(this).css("border","1px solid #7fbfe7").attr("placeholder",""),$(".yanzheng_kuang>span").show(),$("#tishiL").hide()}),$("#yanzhnegmaL").blur(function(){$(this).css("border","1px solide #7fbfe7").attr("placeholder","短信验证码"),$(".yanzheng_kuang>span").hide()}),$("#dengluBtn").click(function(){var n=$("#phoneL").val(),h=$("#yanzhnegmaL").val();""==n?($("#tishiL").show(),$("#tishiL #shoujihaoyanzhengL").text("请输入用户名")):""==h?($("#tishiL").show(),$("#tishiL #shoujihaoyanzhengL").text("请输入密码")):$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:n,password:h},function(h){console.log(h),0==h?($("#tishiL").show(),$("#tishiL #shoujihaoyanzhengL").text("用户名不存在")):2==h?($("#tishiL").show(),$("#tishiL #shoujihaoyanzhengL").text("用户名密码不符")):($.cookie("username",n,{expires:7,path:"/"}),location.href="../index.html")})})});
//# sourceMappingURL=login.js.map
