$(function() {
	
	//tab change
    tabChangeShow();




});


function tabChangeShow(){
    tabsNum=$(".nav-tabs a").length;
    classNum=$(".nav-tabs a").attr("href").length;
    $(".nav-tabs a").click(function(){
        tabValue = $(this).attr("href");
        //console.log(tabValue);

        for(i=1; i<tabsNum+1; i++){
            if(i != tabValue.slice(classNum-1)){
                $(tabValue.slice(0,classNum-1)+i).removeClass("in active");
                $(".nav-tabs a").eq(i-1).parent("li").removeClass("active");
            }
        }

        $(tabValue).addClass("in active");
        $(this).parent("li").addClass("active");
        
        return false;
    });
}