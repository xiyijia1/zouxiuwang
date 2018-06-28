
$(function(){
	//进入该页面第一次读数据,把他写入页面
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
		console.log($.cookie("username"))
		console.log(data)
		if(data==0 || data==2){
			$(".meiyoushangpin").show();
			$(".wratab_div").hide();
		}else{
			$(".meiyoushangpin").hide();
			$(".wratab_div").show();
			var neirongUp_con = document.getElementById("neirongUp_con")
			var str="";
			for(let i = 0;i<data.length;i++){
				str+=`<div class="meitiao">
									<div class="firstS" style="width: 100px;text-align: center;position: relative;">
										<input type="checkbox" class="single" name="shangpin" value="" checked="checked"/>
									</div>
									<div class="secondS" style="width: 465px;">
										<dl>
											<dt>
												<img src="${data[i].goodsListImg}" alt="" />
											</dt>
											
											<dd>
												<p>${data[i].className}</p>
												<p><a href="">${data[i].goodsName}</a></p>
												<p style="color: #5b5b5b;"> 颜色 : 无   尺码 : 均码</p>
											</dd>
											
										</dl>
									</div>
									<div class="thirdS" style="width: 90px;">
										<p class="yuan">￥3433</p>
										<p class="yuanP">￥<span  class="xian">${data[i].price}</span></p>
									</div>
									<div class="fourS" style="width: 136px;">
										<input type="button" class="jianS" value="-" goodsId="${data[i].goodsID}"/>
										<input type="text" value="${data[i].number}" class="spinnerExample">
										<input type="button" class="addS" value="+" goodsId="${data[i].goodsID}"/>
									</div>
									<div class="fiveS" style="width: 138px;">
										<p class="yi">移至收藏夹</p>
										<p class="shan" goodsId="${data[i].goodsID}">删除</p>
									</div>
									
								</div>`
			}
			neirongUp_con.innerHTML = str;
			
			
			
			//页面加载完就先计算一下数量
			countSum();
			//全选
			$(".select_all").click(function(){
				$(".single").prop("checked",$(this).prop("checked"));
				countSum();
				if($(".single").length == $(".single:checked").length){
					$(".select_all").prop("checked",true)
				}else{
					$(".select_all").prop("checked",false)
				}
			})
			
			//每个前面的复选框
			$(".single").click(function(){
				if($(".single").length == $(".single:checked").length){
					$(".select_all").prop("checked",true)
				}else{
					$(".select_all").prop("checked",false)
				}
				countSum();
				$("#quanxuanDown").prop("checked",$("#quanxuan").prop("checked"))
			})
			
			//可以输入数量,每次输入完成,要更新一下数量
			$(".spinnerExample").focusout(function(){
				countSum();
			})
			
			//"+""-"
			$(".addS").click(function(){
				$(this).siblings(".spinnerExample").val(parseInt($(this).siblings(".spinnerExample").val())+1);
				var num = $(this).siblings(".spinnerExample").val();
				var id = $(this).attr("goodsID")
				countSum();
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:num},function(data){
					console.log(data)
				})
				
			})
			//"-"	
			$(".jianS").click(function(){
				var id = $(this).attr("goodsID")
				//如果是0,直接从数据库删除,即传的数据为number为0
				
				if(parseInt($(this).siblings(".spinnerExample").val())<=0){
					$(this).parent().parent().remove();
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:0},function(data){
						
					})
				}else{
					//如果不是0,就执行减一个,然后将数据传给服务器
					$(this).siblings(".spinnerExample").val(parseInt($(this).siblings(".spinnerExample").val())-1);
					var num = $(this).siblings(".spinnerExample").val();
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:num},function(data){

					})
				}
				countSum();
				
			})
			//每一行的删除按钮
			$(".shan").click(function(){
				var id = $(this).attr("goodsID")
				$(this).parent().parent().remove();
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:0},function(data){
					
				})
			})
			
		}
		
		
		//这是一个计算总数的方法,显示在zongshu里
		function countSum(){
			var sum = 0;
			var zongjiaN = 0;
			$(".spinnerExample ").each(function(){
				if($(this).parent().siblings(".firstS").children(".single").prop("checked")){
					sum+=parseInt($(this).val());
					var danjia = parseInt($(this).parent().siblings(".thirdS").children(".yuanP").children(".xian").text())
					var shuliang = parseInt($(this).val());
					var danzong = danjia*shuliang;
					zongjiaN+=danzong;
				}
			})
			$("#zongshu").text(sum)
			$("#zongjia").text(zongjiaN)
		}
	})	
})
