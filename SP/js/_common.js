
function dateTimeFormate(date) {
    var d = new Date(date);
    var dformat = [
        d.getFullYear(), d.getMonth() + 1,
        d.getDate()].join('/') + ' ' +
        [d.getHours(),
        d.getMinutes(),
            //d.getSeconds()
        ].join(':');
    return dformat;
}


function dateFormate(date) {
    var d = new Date(date);
    var dformat = [
        d.getFullYear(), d.getMonth() + 1,
        d.getDate()].join('/');
    return dformat;
}

function tirm(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

function reloadFreezeForm() {
   
    //右邊表格的高載入左邊
    var t1 = $(".table-header-xy").find("table").find("tr").outerHeight();
    //console.log("右邊header: " + t1);
    $(".table-header-corner").find("table").find("tr").outerHeight(t1);

    var t2 = $(".table-body-xy").find("table").find("tr").length;
    var sum = 0;//總高

    for (var i = 0; i < (t2); i++) {
        var trHeight = $(".table-body-xy").find("table").find("tr").eq(i).find("td").outerHeight();
        if (trHeight <= 0) { continue; }
        $(".table-body-left").find("table").find("tr").eq(i).outerHeight(trHeight);
        $(".table-body-xy").find("table").find("tr").eq(i).outerHeight(trHeight);
        sum += trHeight;//計算總高度
    };
    //header table空出scrollbar寬度
    if (sum > 350) {
        $(".table-header-xy").css({ "width": "calc(100% - 1em)" });
    } else {
        $(".table-header-xy").css({ "width": "100%" });
    };
    //只凍結表頭
    if ($(".xy-outer").hasClass("headerfixed")) {
        if (sum > 500) {
            $(".table-header-xy").css({ "width": "calc(100% - 1em)" });
        } else {
            $(".table-header-xy").css({ "width": "100%" });
        };
    }

    //滾動卷軸
    $(".table-body-xy").scroll(function () {
        var scrollLeftbar = $(this).scrollLeft();
        $(this).siblings(".table-header-xy").find('table').css({ "left": -scrollLeftbar });
        var scrollTopbar = $(this).scrollTop();
        $(this).siblings(".table-body-left").find('table').css({ "top": -scrollTopbar });
    });

    //點擊dropdown-menu以外的位置便取消內距
    $("body").bind("click", function (e) {
        var target = $(e.target);
        if (target.closest(".dropdown-menu").length == 0) {
            $(".table-body-xy").css("padding-bottom", "0");
        };
    });

    //凍結窗格寬度 以最後一層優先判斷 如過最上層存在 以最上層的內容優先
    var leftWid, inputLeftWid;
    if ($('.table-tab1-1').width() > 0) {
        inputLeftWid = $('.table-tab1-1').width();
    } else if ($('.table-tab1-2').width() > 0) {
        inputLeftWid = $('.table-tab1-2').width();
    } else if ($('.table-tab1-3').width() > 0) {
        inputLeftWid = $('.table-tab1-3').width();
    } else if ($('.table-tab1-4').width() > 0) {
        inputLeftWid = $('.table-tab1-4').width();
    } else if ($('.table-tab1').width() > 0) {
        leftWid = $('.table-tab1').width();
    } else if ($('.table-tab2').width() > 0) {
        leftWid = $('.table-tab2').width();
    } else if ($('.table-tab3').width() > 0) {
        leftWid = $('.table-tab3').width();
    } else if ($('.table-tab4').width() > 0) {
        leftWid = $('.table-tab4').width();
    } else if ($('.table-tab5').width() > 0) {
        leftWid = $('.table-tab5').width();
    } else if ($('.table-tab6').width() > 0) {
        leftWid = $('.table-tab6').width();
    } else if ($('.table-header-corner').width() > 0) {
        leftWid = $('.table-header-corner').width();
    }

    if (inputLeftWid > 0) {
        $(".xy-inner-input").css({ "margin-left": inputLeftWid });
        $(".table-body-left-input").css({ "width": inputLeftWid });
        return;
    }
    $(".xy-inner").css({ "margin-left": leftWid });
    $(".table-body-left").css({ "width": leftWid });
   
}

function reloadFreezeDialog() {
    //凍結窗格寬度
    var leftWid;
    if ($('.table-header-corner-dialog').width() > 0) {
        leftWid = $('.table-header-corner-dialog').width();
    } 
    $(".xy-inner-dialog").css({ "margin-left": leftWid });
    $(".table-body-left-dialog").css({ "width": leftWid });

    //右邊表格的高載入左邊
    var t1 = $(".table-header-xy").find("table").find("tr").outerHeight();
    //console.log("右邊header: " + t1);
    $(".table-header-corner").find("table").find("tr").outerHeight(t1);

    var t2 = $(".table-body-xy-dialog").find("table").find("tr").length;
    var sum = 0;//總高

    for (var i = 0; i < (t2); i++) {
        var trHeight = $(".table-body-xy-dialog").find("table").find("tr").eq(i).find("td").outerHeight();
        if (trHeight <= 0) { continue; }
        $(".table-body-left-dialog").find("table").find("tr").eq(i).outerHeight(trHeight);
        $(".table-body-xy-dialog").find("table").find("tr").eq(i).outerHeight(trHeight);
        sum += trHeight;//計算總高度
    };
    //header table空出scrollbar寬度
    if (sum > 350) {
        $(".table-header-xy").css({ "width": "calc(100% - 1em)" });
    } else {
        $(".table-header-xy").css({ "width": "100%" });
    };
    //只凍結表頭
    if ($(".xy-outer").hasClass("headerfixed")) {
        if (sum > 500) {
            $(".table-header-xy").css({ "width": "calc(100% - 1em)" });
        } else {
            $(".table-header-xy").css({ "width": "100%" });
        };
    }


    //滾動卷軸
    $(".table-body-xy").scroll(function () {
        var scrollLeftbar = $(this).scrollLeft();
        $(this).siblings(".table-header-xy").find('table').css({ "left": -scrollLeftbar });
        var scrollTopbar = $(this).scrollTop();
        $(this).siblings(".table-body-left").find('table').css({ "top": -scrollTopbar });
    });

    //點擊dropdown-menu以外的位置便取消內距
    $("body").bind("click", function (e) {
        var target = $(e.target);
        if (target.closest(".dropdown-menu").length == 0) {
            $(".table-body-xy").css("padding-bottom", "0");
        };
    });
}

//InspectionLevel	1	I級水準			檢驗水準等級
//InspectionLevel	2	II級水準		檢驗水準等級
//InspectionLevel	3	III級水準		檢驗水準等級
//InspectionRisk	1	低風險			檢驗風險
//InspectionRisk	2	中風險			檢驗風險
//InspectionRisk	3	高風險			檢驗風險
//FactoryAreaId	    1	台北	TP		維護廠區
//FactoryAreaId	    2	崑山	KS		維護廠區
//FactoryAreaId	    3	蘇州	SJ		維護廠區
//FactoryAreaId	    4	深圳	SZ		維護廠區
//InspectionItemType	1	外觀			檢驗項目分類
//InspectionItemType	2	特性			檢驗項目分類
//InspectionItemType	3	信賴性			檢驗項目分類
//InspectionItemType	4	尺寸			檢驗項目分類
//InspectionGrade	1	主缺			檢驗項目等級
//InspectionGrade	2	次缺			檢驗項目等級
//InspectionGrade	3	參考			檢驗項目等級
//StandardType	    1	計數值			檢驗標準
//StandardType	    2	報告			檢驗標準
//StandardType	    3	標準值			檢驗標準
//IsDelete	        N	有效			有效/ 作廢
//IsDelete	        Y	作廢			有效/ 作廢
//TemplateStatus	0	待確認			模版狀態
//TemplateStatus	1	發佈			模版狀態
//TemplateStatus	2	作廢			模版狀態
//InheritType	    0	非繼承			繼承類型
//InheritType	    1	比照			繼承類型
//InheritType	    2	調整			繼承類型
//InheritType	    3	刪除			繼承類型
//FactoryType	    1	供應商			廠商類別
//FactoryType	    2	協力廠			廠商類別
//FactoryType	    3	供應商& 協力廠		廠商類別
//FactoryLevel	    1	重點廠商			廠商等級
//FactoryLevel	    2	主要廠商			廠商等級
//FactoryLevel	    3	一般廠商			廠商等級
//FactoryLevel	    4	代理廠商			廠商等級
//FactoryLevel	    5	小廠商			    廠商等級
//QualityStatus	    1	合格			    合格狀態
//QualityStatus	    2	不合格			    合格狀態
//QualityStatus	    3	新廠商			    合格狀態
//InvestigationStatus	1	調查中			調查狀態
//InvestigationStatus	2	待審核			調查狀態
//InvestigationStatus	3	調查完成		調查狀態
//InvestigationStatus	4	停止調查		調查狀態
//InvestigationStatus	5	未調查			調查狀態
//InvestigateResult	    1	通過			簽核結果
//InvestigateResult	    2	退件			簽核結果
//InvestigateResult	    3	未簽核			簽核結果
//InvestigateResult	    4	作廢			簽核結果
//DocumentAvailable	    1	供應商			適用範圍
//DocumentAvailable	    2	協力廠			適用範圍
//DocumentAvailable	    3	供應商& 協力廠	適用範圍
//Status	        1	尚未開始		稽核狀態
//Status	        2	稽核中			稽核狀態
//Status	        3	稽核完成		稽核狀態
//RatingAvaliable	1	採購			評比單位
//RatingAvaliable	2	品保			評比單位
//RatingAvaliable	3	採購& 品保		評比單位
//RatingType	    1	採購帶入		評分方式
//RatingType	    2	採購輸入		評分方式
//RatingType	    3	品保輸入		評分方式
//RatingType	    4	生管輸入		評分方式
//RatingType	    5	系統計算帶入	評分方式
//DataSource	    1	例行			資料來源
//DataSource	    2	C			    資料來源
//DataSource	    3	重點			資料來源
//AuditType	        1	到廠稽核		稽核方式
//AuditType	        2	回傳文件		稽核方式
//RestrictCode	    1	機種限制		限制原因
//RestrictCode	    2	異常			限制原因
//RestrictCode	    3	其他			限制原因
//InspectionStatus	1	量測中			檢驗狀態
//InspectionStatus	2	待複判			檢驗狀態
//InspectionStatus	3	待審核			檢驗狀態
//InspectionStatus	4	作廢			檢驗狀態
//InspectionStatus	5	已完成			檢驗狀態
//ReviewCode1	    Y	合格			複審與檢驗結果
//ReviewCode1	    S	特採			複審與檢驗結果
//ReviewCode1	    N	不合格			複審與檢驗結果
//ReviewCode2	    P	通過			複判與審核結果
//ReviewCode2	    R	退件			複判與審核結果
//InspectionCycle	1	I級水準			檢驗循環
//InspectionCycle	2	II級水準			檢驗循環
//InspectionCycle	3	III級水準			檢驗循環
//InspectionCycle	4	免驗			檢驗循環
//ReportResult	    Y	合格			報告檢驗結果
//ReportResult	    N	不合格			報告檢驗結果
//ToDoMemoStatus	1	待補			待辦補充狀態
//ToDoMemoStatus	2	退件			待辦補充狀態
//SystemIQCResult	Y	合格			系統檢驗結果
//SystemIQCResult	N	不合格			系統檢驗結果
//DocumentType	    1	承認	    Y		文件類型
//DocumentType	    2	稽核	    N		文件類型
//DocumentType	    3	調查	    N		文件類型
//DocumentType	    4	改善報告	N		文件類型
//DocumentType	    5	其他	    N		文件類型
//ReviewCodeAll	    P	通過		1	複判審核結果
//ReviewCodeAll	    R	退件		2	複判審核結果
//ReviewCodeAll	    Y	合格		3	複判審核結果
//ReviewCodeAll	    S	特採		4	複判審核結果
//ReviewCodeAll	    N	不合格		5	複判審核結果
//SpecialStatus	    1	待補件			待判狀態
//SpecialStatus	    2	待複判			待判狀態
//SpecialStatus	    3	待審核			待判狀態

