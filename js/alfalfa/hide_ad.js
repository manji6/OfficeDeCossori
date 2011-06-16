/**
 * アルファルファモザイク用
 */

$(function(){


	//余計な広告を取り除く
	var aAdDomain = ["amiami.jp","ecx.images-amazon.com","imgad","yimg.jp","livedoor.blogimg.jp"];

	// 左カラムのIMGタグが広告枠
	$("img","#left").filter(function(){

		if($(this).attr("src").match(new RegExp("("+aAdDomain.join('|')+")")) !== null){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		$(this).css("display","none");
	});

});

