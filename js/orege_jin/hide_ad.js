/**
 * 俺的ゲーム速報@JIN専用
 *
 */

$(function(){


	//余計な広告を取り除く(aタグのリンク先ドメイン指定
	var aAdDomain = [
		"acnt.biz",
		"www.amazon.co.jp",
		"www.eii.xii.jp",
		"www.accesstrade.net"
	];


	// 左カラム内iframe内コンテンツのチェック
	$("iframe","#side_left").hide();

	// 左カラムの画像をチェック
	$("#container #side_left img , body div.center img").filter(function(){
		
		var sTargetUrl = $(this).parents("a").attr("href");
		if(sTargetUrl){
			if(sTargetUrl.match(new RegExp("("+aAdDomain.join('|')+")")) !== null){
				return true;
			}else{
				return false;
			}
		}
		return false;
	}).each(function(){
		$(this).attr("src","");
	});

});

