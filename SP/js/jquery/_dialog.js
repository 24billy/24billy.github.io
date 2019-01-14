$(function() {
	/*彈跳視窗-小01*/
	$("#dialog01").dialog({
		modal: true,
		width:500,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false,
		dialogClass: "dlg-no-close",
        buttons: { 
            "確定": function() { $(this).dialog("close"); }, 
            "取消": function() { $(this).dialog("close"); }
        }
    });
	/*彈跳視窗-小02*/
    $("#dialog02").dialog({ 
	    modal: true,
		width:800,
		height:600,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false
    });
	/*彈跳視窗-大01*/
	$("#dialog03").dialog({
		modal: true,
		width:1000,
		height:650,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false,
		dialogClass: "dlg-no-close",
        buttons: { 
            "確定": function() { $(this).dialog("close"); }, 
            "取消": function() { $(this).dialog("close"); }
        }
    });
	/*彈跳視窗-大02*/
	$("#dialog04").dialog({
		modal: true,
		width:1000,
		height:700,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false,
    });
	/*彈跳視窗-中03*/
	$("#dialog05").dialog({
		modal: true,
		width:1000,
		height:650,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false,
		dialogClass: "dlg-no-close",
        buttons: { 
            "確定": function() { $(this).dialog("close"); }, 
            "取消": function() { $(this).dialog("close"); }
        }
    });
	/*彈跳視窗-中01*/
	$("#dialog06").dialog({
		modal: true,
		width:800,
		height:700,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false,
		dialogClass: "dlg-no-close",
        buttons: { 
            "確定": function() { $(this).dialog("close"); }, 
            "取消": function() { $(this).dialog("close"); }
        }
    });
	/*彈跳視窗-中02*/
	$("#dialog07").dialog({
		modal: true,
		width:1000,
		height:650,
        autoOpen: false, 
        show: "blind", 
        hide: "explode",
		draggable: false,
		resizable: false,
		dialogClass: "dlg-no-close",
        buttons: { 
            "確定": function() { $(this).dialog("close"); }, 
            "取消": function() { $(this).dialog("close"); }
        }
    });
    $("#AddDevice").click(function() { 
        $("#dialog01").dialog("open"); 
        return false; 
    }); 
    $("#allocate,#CopyElse").click(function() { 
        $("#dialog02").dialog("open"); 
        return false; 
    });
    $("#SearchDept").click(function() { 
        $("#dialog03").dialog("open"); 
        return false; 
    }); 
    $("#DeviceAssign").click(function() { 
        $("#dialog04").dialog("open"); 
        return false; 
    }); 
    $("#edit").click(function() { 
        $("#dialog05").dialog("open"); 
        return false; 
    }); 
    $("#add").click(function() { 
        $("#dialog07").dialog("open"); 
        return false; 
    }); 
    $("#abnormal").click(function() { 
        $("#dialog06").dialog("open"); 
        return false; 
    });
});
