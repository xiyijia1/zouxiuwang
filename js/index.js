


$(function(){
	//header
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
//	var shuru = document.getElementById("shuru")
//	shuru.onfocus = shuru.oninput =()=>{
//		var val = shuru.value;
//		console.log(val)
//		var oScript = document.createElement("script");
//		var oScript = document.createElement("script");
//		oScript.src = "http://search.xiu.com/ajax/autocomplete.htm?jsoncallback=save&q="+val+"&limit=10&mkt=xiu";
//		document.body.appendChild(oScript);
//		console.log()
//	}
//	
//	
//	function save(data){
////		console.log(data)
//		
//	}
	
	
	
	
	
	
	//subnav
	$("#sub_nav_con ul li").mouseenter(function(){
		$(this).children("a").attr({class:"hover"})
		$(this).children(".erji").show()
	})
	.mouseleave(function(){
		$(this).children("a").attr({class:""})
		$(this).children(".erji").hide()
	})
	
	
	//banner
	$("#carousel_1").FtCarousel();

	$("#carousel_2").FtCarousel({
		index: 1,
		auto: false
	});

	$("#carousel_3").FtCarousel({
		index: 0,
		auto: true,
		time: 3000,
		indicators: false,
		buttons: true
	});
	
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
	
})






