$(function(){
	var url = window.location.href;
	var pageNum =  url.split('page=')[1] - 0;
	var lastNum = $(".page ul li:last").children("a").html() - 0;
	
	if(!pageNum){
		pageNum = 1;
	}
	for(var i = 0; i < $(".page li").length; i ++){
		var num = $(".page li").eq(i).children("a").html() - 0;
		if(pageNum == num){
			$(".page li").eq(i).children("a").addClass('h');
		}
	}
	
	$(".prev").click(function(){
		if(pageNum > 1){
			window.location.href = '/?page=' + (pageNum - 1);
		}
	})
	
	$(".next").click(function(){
		if(pageNum < lastNum){
			console.log(lastNum + 1)
			window.location.href = '/?page=' + (pageNum + 1);
		}
	})
	
	$('.loginNow').click(function(){
		window.location.href = '/login';
	})

	$('.registerNow').click(function(){
		window.location.href = '/register';
	})

	$('.writeNow').click(function(){
		window.location.href = '/write';
	})

	$(".loadPage").click(function(){
			var num1 = $('.pagenum').val() || 1;
		// console.log($('.pagenum').val());
			window.location.href = '/?page=' + num1;
	})	

// 	$(".mores").click(function(){
// 		$.post('/article',{data:$(".artTit").html()}, function(data){ 
// 			console.log(data);			
// 		});

// })

	
})