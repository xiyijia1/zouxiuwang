
window.onload = function(){
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
		var zongshu = 0;
		for(let k = 0;k<data.length;k++){
			zongshu+=parseInt(data[k].number)
		}
		$("#num").text(zongshu)
	})	
}

$(function(){
	//加载购物篮的数量
	
	//获得二级菜单
    var erji_left = document.getElementsByClassName("erji_left")
	$.ajax({
		type:"get",
		url:"../jsonData/erjicandan.json",
		async:true,
		success:function(data){
			for(let i=0;i<data.length;i++){
				var strEr = "";
				for(let j=0;j<data[i].length;j++){
					strEr+=`<dl>
										<dt>
											${data[i][j].title}
										</dt>
										<dd>`
					for(let k = 0 ;k<data[i][j].con.length;k++){
						strEr+=`<a href="list.html">${data[i][j].con[k]}</a> <span>|</span>`
					}
					strEr+="</dd></dl>"									
				}
				
				erji_left[i].innerHTML = strEr
			}
		}
	});
	var erji_right = document.getElementsByClassName("erji_right");
	$.ajax({
		type:"get",
		url:"../jsonData/erjiremai.json",
		async:true,
		success:function(data){
			for(let i=0;i<data.length;i++){
				var strErRe = "<dl><dt>热门品牌</dt><dd>";
				for(let j=0;j<data[i].length;j++){
					strErRe+=`<a href="">${data[i][j]}</a>`									
				}
			strErRe+="</dd></dl>"
			erji_right[i].innerHTML = strErRe
			}
		}
	});
	//根据得到的商品id来取数据
	var goodsid = location.search.split("=")[1];
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
//		console.log(data)
		//位置上显示商品名称
		$("#mingzi").text(data[0].goodsName)
		//直接展示图
		$("#imgPic").attr("src",data[0].goodsListImg);
		$("#bigPic").attr("src",data[0].goodsListImg);
		//小图
		var strXiaoTu = "";
		var smallPic = document.getElementById("smallPic")
		for(let i = 0;i<JSON.parse(data[0].goodsBenUrl).length;i++){
			strXiaoTu+=`<dd class="dc">
								<a href="">
									<img src="${JSON.parse(data[0].goodsBenUrl)[i]}" alt="" />
								</a>
							</dd>`
		}
		smallPic.innerHTML = strXiaoTu;
		//切换图片
		let index = 0;
		$(".dc").hover(function(){
			index = $(this).index();
			var lujing = $(this).children().children().attr("src")
			$("#imgPic").attr("src",lujing)
			$("#bigPic").attr("src",lujing)
			$(this).attr("class","dc hover").siblings().attr("class","dc")
		},function(){
			
		})
		
		//商品信息
		$("#pt_name").text(data[0].goodsName);
		$("#pinpaiName").text(data[0].className);
		$("#bianhao").text("商品编号 : "+data[0].goodsID);
		$("#spwPrice").text(data[0].price);
		var cur = data[0];
		//添加购物车
		$("#fangrugouwudai").click(function(){
			var num =parseInt(document.getElementById("inputCount").value) 
			//购物车更新  
			//1.取购物车中的数据,判断是否有要添加的这个数据,如果没有的话,直接添加,如果有的话,先将里面该商品的num取出来,加上新输入的数据,然后添加
			
			//data=0添加失败  data=1添加成功,添加成功后要查看购物车数据来更新购物篮里面的数据
			$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
				for(let j=0;j<data.length;j++){
					if(data[j].goodsID == cur.goodsID){
						num+=parseInt(data[j].number);
					}
				}
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:cur.goodsID,number:num},function(data){
					if(data==0){
						alert("添加失败");
					}
					if(data == 1){
						//查看购物车,刷新当前页面上的各种显示
						$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
							var zongshu = 0;
							for(let k = 0;k<data.length;k++){
								zongshu+=parseInt(data[k].number)
							}
							$("#num").text(zongshu)
						})
					}
				})
			
			})
			
			return false
		})
	})
	
	//放大镜
	$("#imgPicDiv").mouseover(function(){
		$("#showimg").show();
		$("#bigPicDiv").show();
	})
	$("#imgPicDiv").mouseout(function(){
		$("#showimg").hide();
		$("#bigPicDiv").hide();
	})
	var big_map = document.getElementsByClassName("big_map")[0];
	var imgPicDiv = document.getElementById("imgPicDiv");
	var imgPic = document.getElementById("imgPic");;
	var showimg = document.getElementById("showimg");
	var bigPicDiv = document.getElementById("bigPicDiv");
	var bigPic = document.getElementById("bigPic");
	$("#imgPicDiv").mousemove(function(e){
		var evt = e || evt;
		var x = evt.pageX - big_map.offsetLeft;
		var y = evt.pageY - big_map.offsetTop;
		
		var _left  = x-showimg.offsetWidth/2;
		var _top = y-showimg.offsetHeight/2;
		if(_left<0){
			_left = 0;
		}
		if(_left>imgPicDiv.offsetWidth-showimg.offsetWidth){
			_left = imgPicDiv.offsetWidth-showimg.offsetWidth
		}
		if(_top<0){
			_top = 0;
		}
		if(_top>imgPicDiv.offsetHeight-showimg.offsetHeight){
			_top=imgPicDiv.offsetHeight-showimg.offsetHeight
		}
		
		showimg.style.left = _left+"px";
		showimg.style.top = _top+"px";
				
		bigPic.style.left = -_left/showimg.offsetWidth*imgPic.offsetWidth+"px";
		bigPic.style.top = -_top/showimg.offsetHeight*imgPic.offsetHeight+"px"
	})
	
	
	
	//尺码选择
	$(".cmxs ul li a").click(function(){
		$(this).parent().attr("class","selected").siblings().attr("class","");
		return false;
	})
	
	//"+""-"
	$("#jia").click(function(){
		$(this).siblings("#inputCount").val(parseInt($(this).siblings("#inputCount").val())+1);

	})
	$("#jian").click(function(){
		if(parseInt($(this).siblings("#inputCount").val())<=1){

		}else{
			$(this).siblings("#inputCount").val(parseInt($(this).siblings("#inputCount").val())-1);
		}
	})
	
	//回到顶部
	$(".huidao").click(function(){
		$("html,body").animate({"scrollTop":0},1000)
		return false
	})
	
	
})
