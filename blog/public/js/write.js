$(function(){
	$(".subArt").click(function(){
		
		var vals = {
			'artTit': $(".artTit").val(),
			'artAuthor': $(".artAuthor").val(), 
			'artDate': (new Date()),
			'artPic': 'images/upload/test.png',
			'artDes': $(".artDes").val(),
			'artCon':$('#editor .ql-editor p').html(),
			'artTags': [],
			'artCount': 0
		};
		
		$.post('write', vals, function(data){
			if(data == 'ok'){
				alert('发布成功！');
				window.location.href= '/';	
			}else{
				alert('发布失败！');
			}
		})
		
	})
	$('.logo').click(function(){
		window.location.href = '/';
	})

	$('.loginOut').click(function(){
		window.location.href = '/login';
	})
})