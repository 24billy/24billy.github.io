
$(function(){
	$(".SideOpen").find("ul").hide().slideUp();
	
	$(".SideOpen").click( function(){
	    $(this).find("ul").slideDown().end().siblings().find("ul").slideUp();
	});
	$(".SubMenu li").click(function(){
	    $(this).find("a").addClass("SubMenuClick").end().siblings().find("a").removeClass("SubMenuClick");
	});
	$(".SideClose a").click(function () {
	    $(".SubMenu li a").removeClass("SubMenuClick");
	    $(".SideOpen ul").slideUp();
	});
	$(".SideOpen a").click(function () {
	    $(".SubMenu li a").removeClass("SubMenuClick");
	});
	$(".SideBarConten li a").hover(function () {
	    $(this).addClass("btn02");
		$(".SubMenu li a").removeClass("btn02");
		},function(){
			$(this).removeClass("btn02");
	})
});
