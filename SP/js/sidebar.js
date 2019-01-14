$(document).ready(function () {
    //RWD控制
    tabnavtoggle();

	//dropdown control
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.dropdown-toggle');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);


	//submenu style
	var submenubtn = $(".submenu li a");

	submenubtn.click(function () {
		$(".submenu li").find("a").removeClass("active");
		$(this).addClass("active");
		//console.log($(this).parents().children(".dropdown-toggle"));
		$('.dropdown-toggle').click(function () {
			$(".submenu li").find("a").removeClass("active");
		})
	})

	//user dropdown control
	/*var userinfo = $(".m-plus-nav").find(".nav-dropdown-toogle");
	userinfo.click(function () {
		$(this).find("ul .user-dropdown").slideDown();
	})*/

    //收合側邊欄，主要內容展開
    $("#sidebar-toggle a").bind("click", function (e) {
        $("#container").toggleClass("active");
        $("#container-wrapper").toggleClass("active");
        $("#sidebar-wrapper").toggleClass("active", 200);
        $("#main-wrapper").toggleClass("active");//20180716新增
    });


});

$(window).resize(function () {
    //tabnavtoggle();
});


//RWD控制
function tabnavtoggle() {
    var screenWid = $(window).width();
    //console.log("screen: " + screenWid);

    if ($(".sidebar-block").hasClass("active")) {
        if (screenWid < 1025) {
            $(".sidebar-block").removeClass("active");
            $("#container-wrapper").removeClass("active");
        }
    }
    $("#sidebar-toggle").on("click", function () {
        if (screenWid < 1025) {
            if (!$("#sidebar-wrapper").hasClass("active")) {
                console.log("sidebar open now");
                $("#sidebar-toggle").find("a").find("i").removeClass("fa-bars").addClass("fa-times");
            } else {
                console.log("sidebar close now");
                $("#sidebar-toggle").find("a").find("i").removeClass("fa-times").addClass("fa-bars");
            }
        } else {
            $("#sidebar-toggle").find("a").find("i").removeClass("fa-times").addClass("fa-bars");
        }
    });

}