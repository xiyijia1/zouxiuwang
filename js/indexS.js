$(function(){
	//banner
	$("#carousel_1").FtCarousel();

	
	
	//share
	$("#share a").mouseenter(function(){
		$(this).css({position:"relative"})
		.stop()
		.animate({left:"-15px"},100)
	})
	$("#share a").mouseleave(function(){
		$(this).css({position:"relative"})
		.stop()
		.animate({left:"0px"},100)
	})
	
	//zuixin
	$.ajax({
		type:"get",
		url:"jsonData/zuixin.json",
		async:true,
		success:function(data){
		//无需对数据进行处理，直接使用
			var str = "";
			for(var i =0;i<data.length;i++){
				for(var attr in data[i]){
					str+=`<li>
						<a href="">
							<img src="${attr}" class="picScral"/>
						</a>
						<p><img src="${data[i][attr]}"/></p>
					</li>`
				}
			}
			var zuixinUl = document.getElementById("zuixinUl");
			zuixinUl.innerHTML = str;
		}
	});
	
	
	//jianhuo
	$.ajax({
		type:"get",
		url:"jsonData/jianhuo.json",
		async:true,
		success:function(data){
		//无需对数据进行处理，直接使用
			let jianhuoUl = document.getElementsByClassName("jianhuoUl");
			for(let i =0;i<data.length;i++){
				let strjian = ""
				for(let j = 0;j<data[i].length;j++){
					strjian+=`<li>
					<a href="">
						<img src="${data[i][j]}" alt="" />
						
					</a>
				</li>`
				}
				jianhuoUl[i].innerHTML = strjian;
			}
		}
	});

	//rejian
	$.ajax({
		type:"get",
		url:"jsonData/rejian.json",
		async:true,
		success:function(data){
		//无需对数据进行处理，直接使用
			let str = "";
			for(var i =0;i<data.length;i++){
				for(var attr in data[i]){
					str+=`<li>
						<a href="">
							<img src="${attr}" class="picScral"/>
						</a>
						<p><img src="${data[i][attr]}"/></p>
					</li>`
				}
			}
			var rejianUl = document.getElementById("rejianUl");
			rejianUl.innerHTML = str;
		}
	});
	
	//好货
	$.ajax({
		type:"get",
		url:"jsonData/haohuo.json",
		async:true,
		success:function(data){
			let str = "";
			for(let i = 0;i<data.length;i++){
				str+=`<li>
					<a href="">
						<img src="${data[i]}" alt="" />
						<p></p>
					</a>	
				</li>`
			}
			var haohuoUl = document.getElementById("haohuoUl");
			haohuoUl.innerHTML = str;
		}
	});
	
	
	var erji_left = document.getElementsByClassName("erji_left")
	$.ajax({
		type:"get",
		url:"jsonData/erjicandan.json",
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
						strEr+=`<a href="html/list.html">${data[i][j].con[k]}</a> <span>|</span>`
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
		url:"jsonData/erjiremai.json",
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
})
