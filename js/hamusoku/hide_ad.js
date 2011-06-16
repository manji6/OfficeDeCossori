/**
 * ハム速用
 */

$(function(){


	//余計な広告を取り除く
	var aAdDomain = ["amiami.jp","ecx.images-amazon.com","imgad","yimg.jp","livedoor.blogimg.jp","livedoor.2.blogimg.jp","pics.dmm.com\/af\/"];
	var aIframeAdDomain = ["aqua.dmm.co.jp\/dmmad\/"];

	// 左カラムのIMGタグが広告枠
	$("img","#sub").filter(function(){

		if($(this).attr("src").match(new RegExp("("+aAdDomain.join('|')+")")) !== null){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		$(this).css("display","none");
	});

	$("iframe","#sub").filter(function(){
	
		if($(this).attr("src").match(new RegExp("("+aIframeAdDomain.join('|')+")")) !== null){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		$(this).css("display","none");
	});

});

