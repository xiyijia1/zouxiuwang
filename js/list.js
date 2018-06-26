
$(function(){
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
	
	//当滚动条滚动的时候
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop>=51){
			$("nav").css({"position":"fixed","top":0})
			
			$("#sub_nav").css({"position":"fixed","background":"white","opacity":"0.9","border-bottom":"1px solid #d7d7d7"})
			
			$("#sub_nav #sub_nav_con ul li>a").css({"border":"1px solid white","border-bottom":"0"})
			
			$("#sub_nav #sub_nav_con ul li>a").mouseenter(function(){
				$(this).css({"border":"1px solid #d7d7d7","border-bottom":"0"})
			})
			.mouseleave(function(){
				$(this).css({"border":"1px solid white","border-bottom":"0"})
			})
		}else{
			$("nav").css({"position":"static"})
			
			$("#sub_nav").css({"position":"static","background":"#f7f7f7","opacity":"1","border-bottom":"0"})
			
			
			$("#sub_nav #sub_nav_con ul li>a").css({"border":"1px solid #f7f7f7","border-bottom":"none"})
			
			$("#sub_nav #sub_nav_con ul li>a").mouseenter(function(){
				$(this).css({"border":"1px solid #d7d7d7","border-bottom":"0"})
			})
			.mouseleave(function(){
				$(this).css({"border":"1px solid #7f7f7","border-bottom":"0"})
			})
			
		}
	}
	
	
	
	
	//回到顶部
	$(".huidao").click(function(){
		$("html,body").animate({"scrollTop":0},1000)
		return false
	})
	var listUl = document.getElementsByClassName("listUl")[0];
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		async:true,
		dataType:"jsonp",
		success:function(data){
	        var str = "";
	        for(let i = 0;i<data.length;i++){
	        	str+=`<li class="everyOne">
							<ol>
								<li class="prc">
									<a href="../html/xiangqing.html" class="prcA">
										<img src="${data[i].goodsListImg}"/>
										<div class="count">
											<p>
												限时${data[i].discount}折
												<span></span>
											</p>
										</div>
									</a>
									<div class="sold_size">
										<p class="sold_size_tip">可售尺码</p>
										<ul class="sold_sizeUl">
											<li class="size  box">
												<span class="line_through">UK4</span>
											</li>
											<li class="size">
												<span>UK10</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="tit">
									<span>${data[i].className}</span>
									<a href="../html/xiangqing.html">${data[i].goodsName}</a>
								</li>
								<li class="price">
									<span class="showPrice">${data[i].price}</span>
									<span class="prePrice">1170</span>
								</li>
							</ol>
						</li>`
	        }
	        listUl.innerHTML = str;
	        //每个li添加事件
	
			$(".everyOne").hover(function(){
				var hei = $(this).children().children(".prc").children(".sold_size").height();
				$(this).children().children(".prc").children(".sold_size").animate({"top":"-"+hei+"px"},100)
			},function(){
				var hei = $(this).children().children(".prc").children(".sold_size").height();
				$(this).children().children(".prc").children(".sold_size").animate({"top":0},100)
			})
			$(".everyOne").each(function(){
				if($(this).index()%4==3){
					$(this).css("margin-right",0)
				}
			})
		}
	});
})
