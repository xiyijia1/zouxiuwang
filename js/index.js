//window.onload = function(){
//	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
//		
//	})	
//}


$(function(){
	//header
	
	//用户名
	if($.cookie("username")!=undefined){
		$("#loginBtn a").text($.cookie("username"))
	}
	//我的购物车
	$("#shoppingBtn").mouseenter(function(){
		$(this).children("a").attr({class:"hover"})
		$(this).children("#my_bag").show()
	})
	.mouseleave(function(){
		$(this).children("a").attr({class:""})
		$(this).children("#my_bag").hide()
	})
	
	
	
	
	
	//我的走秀

	$("#myBtn").mouseenter(function(){
		$(this).children("a").attr({class:"hover"})
		$(this).children("#my_show").show()
	})
	.mouseleave(function(){
		$(this).children("a").attr({class:""})
		$(this).children("#my_show").hide()
	})
	
	//搜索框
	var shuru = document.getElementById("shuru")
	shuru.onfocus = shuru.oninput =()=>{
		$("#search_conUl").show();
		var val = shuru.value;
		var oScript = document.createElement("script");
		var oScript = document.createElement("script");
		oScript.className = "linshi"
		oScript.src = "http://search.xiu.com/ajax/autocomplete.htm?jsoncallback=save&q="+val+"&limit=10&mkt=xiu";
		document.body.appendChild(oScript);
	}
	shuru.onblur = function(){
		$(".linshi").remove();
		$("#search_conUl").hide();
	}
	
	
	//subnav
	$("#sub_nav_con ul li").mouseenter(function(){
		$(this).children("a").attr({class:"hover"})
		$(this).children(".erji").show()
	})
	.mouseleave(function(){
		$(this).children("a").attr({class:""})
		$(this).children(".erji").hide()
	})
	
	var timer = null;
	//footer
	//底部订阅部分
	$("#ding").click(function(){
		$(".stageDing").show();
		clearTimeout(timer);
		setTimeout(function(){
			$(".stageDing").hide();
		},2000)
		
		let addressStr = $("#email_address").val();
		var reg = /^\w+@\w+(\.\w+)+$/;
		//先正则校验,如果是邮箱格式,写cookie,如果不是,进行提示
		if(reg.test(addressStr)){
			//判断有没有设置过cookie,有的话读取,没有的话设一个空的对象保存
			if(getCookie("youxiang")!==undefined){
				var obj = JSON.parse(getCookie("youxiang"));
			}else{
				var obj = {};//用来保存邮箱
			}
			//如果写入到邮箱没有被写入过,该属性就为undefined,此时写入
			if(obj[addressStr]==undefined){
				obj[addressStr] = 1;
				$(".stageDing").text("订阅成功");
			}else{
				$(".stageDing").text("该邮箱已订阅过");
			}
			//写cookie
			var objToStr = JSON.stringify(obj);
			setCookie("youxiang",objToStr,7);
		}else{
			$(".stageDing").text("请输入正确的邮箱");
		}
	})
	
})
//jsonp跨域请求search数据
function save(data){
	if(data){
		let strSearch = "";
		for(let i = 0;i<data.length;i++){
			strSearch+=`<li>
								<span>${data[i].display} </span>
								<span class="hanerji">
									在
									<span class="search_con_er">
										${data[i].display}
									</span>
									类内搜索
								</span>
							</li>`
		}
		var search_conUl = document.getElementById("search_conUl")
		search_conUl.innerHTML = strSearch;
		for(let j =0;j<data.length;j++){
			if(parseInt(data[j].type)==0){
				$(".hanerji").eq(j).hide();
			}
		}
	}else{
		let strSearch = "";
		var search_conUl = document.getElementById("search_conUl")
		search_conUl.innerHTML = strSearch;
	}
		
}




