$(function(){
//人員
//移到右邊
$("#add").click(function(){
//獲取選中的選項，刪除並追加給對方
$("#select1 option:selected").appendTo("#select2");
});
//移到左邊
$("#remove").click(function(){
$("#select2 option:selected").appendTo("#select1");
});
//全部移到右邊
$("#add_all").click(function(){
//獲取全部的選項，刪除並追加給對放
$("#select1 option").appendTo("#select2");
});
//全部移到左邊
$("#remove_all").click(function(){
$("#select2 option").appendTo("#select1");
});
//按兩下選項
$("#select1").dblclick(function(){//綁定按兩下事件
//獲取全部的選項，刪除並追加給對方
$("option:selected",this).appendTo("#select2");//追加給對方
});
//按兩下選項
$("#select2").dblclick(function(){
$("option:selected",this).appendTo("#select1");
});

//部門

//移到右邊
$("#add1").click(function(){
//獲取選中的選項，刪除並追加給對方
$("#select3 option:selected").appendTo("#select4");
});
//移到左邊
$("#remove1").click(function(){
$("#select4 option:selected").appendTo("#select3");
});
//全部移到右邊
$("#add_all1").click(function(){
//獲取全部的選項，刪除並追加給對放
$("#select3 option").appendTo("#select4");
});
//全部移到左邊
$("#remove_all1").click(function(){
$("#select4 option").appendTo("#select3");
});
//按兩下選項
$("#select3").dblclick(function(){//綁定按兩下事件
//獲取全部的選項，刪除並追加給對方
$("option:selected",this).appendTo("#select4");//追加給對方
});
//按兩下選項
$("#select4").dblclick(function(){
$("option:selected",this).appendTo("#select3");
});

//程式

//移到右邊
$("#add2").click(function(){
//獲取選中的選項，刪除並追加給對方
$("#select5 option:selected").appendTo("#select6");
});
//移到左邊
$("#remove2").click(function(){
$("#select6 option:selected").appendTo("#select5");
});
//全部移到右邊
$("#add_all2").click(function(){
//獲取全部的選項，刪除並追加給對放
$("#select5 option").appendTo("#select6");
});
//全部移到左邊
$("#remove_all2").click(function(){
$("#select6 option").appendTo("#select5");
});
//按兩下選項
$("#select5").dblclick(function(){//綁定按兩下事件
//獲取全部的選項，刪除並追加給對方
$("option:selected",this).appendTo("#select6");//追加給對方
});
//按兩下選項
$("#select6").dblclick(function(){
$("option:selected",this).appendTo("#select5");
});

})