/**
 * 痛いニュース
 **/
$(function(){


	//余計な広告を取り除く
	var aAdDomain = ["ecx.images-amazon.com","ec2.images-amazon.com","livedoor.blogimg.jp","livedoor.2.blogimg.jp"];

	// 左カラムの広告枠
	$("img","#leftbody").filter(function(){

		if($(this).attr("src").match(new RegExp("("+aAdDomain.join('|')+")")) !== null){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		$(this).css("display","none")
	});

	// 右カラムの広告枠
	$("img","#rightbody").filter(function(){

		if($(this).attr("src").match(new RegExp("("+aAdDomain.join('|')+")")) !== null){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		$(this).css("display","none");
	});

});

