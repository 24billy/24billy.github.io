//Go Top 
$(document).ready(function () {
    $("#go-top").hide()
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $("#go-top").fadeIn();
            } else {
                $("#go-top").fadeOut();
            }
        });
        $("#go-top a").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
});
