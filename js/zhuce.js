

$(function(){
	
	$("#phone").focus(function(){
		
		$(this).css("border","1px solid #7fbfe7").attr("placeholder","");
		$(".phone_kuang>span").show();
	})
	$("#phone").blur(function(){
		
		$(this).css("border","1px solide #7fbfe7").attr("placeholder","手机号码");
		$(".phone_kuang>span").hide();
		
		let phoneStr = $(this).val();
		var reg = /^1(3|5|7|8)\d{9}$/;
		
		if(reg.test(phoneStr)){
			$("#tishi").hide()
		}else{
			$("#tishi").show()
		}
	})
	
	
	$("#yanzhnegma").focus(function(){
		
		$(this).css("border","1px solid #7fbfe7").attr("placeholder","");
		$(".yanzheng_kuang>span").show();
	})
	$("#yanzhnegma").blur(function(){
		
		$(this).css("border","1px solide #7fbfe7").attr("placeholder","短信验证码");
		$(".yanzheng_kuang>span").hide();
		
		let yanzhengStr = $(this).val();
		var reg = /^\d{4}$/;
		
		if(reg.test(yanzhengStr)){
			$("#tishiY").hide()
		}else{
			$("#tishiY").show()

		}
	})
	
	
	
	$("#dengluBtn").click(function(){
		let phoneStr = $("#phone").val();
		let yanzhengStr = $("#yanzhnegma").val();
		var reg1 = /^1(3|5|7|8)\d{9}$/;
		var reg2 = /^\d{4}$/;
		
		if(reg1.test(phoneStr)){
			$("#tishi").hide()
			//如果手机号验证通过,开始验证验证码
			if(reg2.test(yanzhengStr)){
				$("#tishiY").hide()
				
				//如果验证码验证也通过,可以注册了
				//用户注册： http://datainfo.duapp.com/shopdata/userinfo.php
				//参数	返回值
				//status:register	用户名重名：0
				//userID:用户名	注册成功：1
				//password:密码	数据库报错：2
				$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"register","userID":phoneStr,"password":yanzhengStr},function(data){
					console.log(data)
					if(data==0){
						alert("该账号已注册过")
					}else if(data==1){
						location.href="login.html";
					}else{
						alert("数据库出错")
					}
					
				})
				
			}else{
				$("#tishiY").show()
			}
		}else{
			$("#tishi").show()
		}
		
		
		
	})
})
