$(function(){
	
	$(".subArt").click(function(){
		// console.log($('.artImg input').files)
		let d = new Date();
		var vals = {
			'artTit': $(".artTit").val(),
			'artAuthor': $(".artAuthor").val(), 
			'artDate': (d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate()),
			'artPic': 'images/upload/test.png',
			'artDes': $(".artDes").val(),
			'artCon':$('#editor .ql-editor').html(),
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