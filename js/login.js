

$(function(){
	
	$("#phoneL").focus(function(){
		
		$(this).css("border","1px solid #7fbfe7").attr("placeholder","");
		$(".phone_kuang>span").show();
		$("#tishiL").hide();
	})
	$("#phoneL").blur(function(){
		
		$(this).css("border","1px solide #7fbfe7").attr("placeholder","手机号码");
		$(".phone_kuang>span").hide();
	
	})
	
	
	$("#yanzhnegmaL").focus(function(){
		
		$(this).css("border","1px solid #7fbfe7").attr("placeholder","");
		$(".yanzheng_kuang>span").show();
		$("#tishiL").hide();
	})
	$("#yanzhnegmaL").blur(function(){
		
		$(this).css("border","1px solide #7fbfe7").attr("placeholder","短信验证码");
		$(".yanzheng_kuang>span").hide();
		
		
	})
	
	
	
	
	$("#dengluBtn").click(function(){
		
		let phoneStr = $("#phoneL").val();
		let yanzhengStr = $("#yanzhnegmaL").val();
		//先验证用户名是不是空
		if(phoneStr==""){
			$("#tishiL").show();
			$("#tishiL #shoujihaoyanzhengL").text("请输入用户名");
		}else{
			//验证密码是不是空
			if(yanzhengStr==""){
				$("#tishiL").show();
				$("#tishiL #shoujihaoyanzhengL").text("请输入密码");
			}else{
				//账户名,密码都不为空,开始发送请求
				/*
	 
				 * 用户登录： http://datainfo.duapp.com/shopdata/userinfo.php
					参数	返回值
					status:login	登陆成功：返回json对象{code:'',userID:'',password:'', userimg_url:'', sex:''}
					userID用户名	用户名不存在：0
					password:密码	用户名密码不符：2
				 * */
				
				$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"login","userID":phoneStr,"password":yanzhengStr},function(data){
					console.log(data)
					if(data == 0){
						$("#tishiL").show();
						$("#tishiL #shoujihaoyanzhengL").text("用户名不存在");
					}else if(data == 2){
						$("#tishiL").show();
						$("#tishiL #shoujihaoyanzhengL").text("用户名密码不符");
					}else{
						location.href="../index.html";
					}
					
				})
			}
		}
	})
})
