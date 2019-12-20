/**
 * Created by Administrator on 2019/12/19 0019.
 */
function change1(lun,y){
    lun.index=y;
    var Time=document.getElementsByClassName("ctime2");
    var time2=Time[0].getElementsByClassName("time_2");
    for(var i=0;i<time2.length;i++){
        time2[i].style.color="black";
        time2[i].style.borderTop="3px solid black";
    }
    lun.style.color="#FF5151";
    lun.style.borderTop="3px solid #FF5151";

    var CTime=document.getElementsByClassName("ctime1");
    var time1=CTime[0].getElementsByClassName("time_1");
    for(var k=0;k<time1.length;k++){
        time1[k].style.display="none";
    }
    time1[lun.index].style.display="block";
}

var Time=document.getElementsByClassName("ctime2");
var time2=Time[0].getElementsByClassName("time_2");
//循环给每个li绑定鼠标移上事件
for(var i=0;i<time2.length;i++){
    time2[i].index=i;//给元素绑定索引
    //b.绑定事件
    time2[i].onmouseover=function(){
        //c.处理函数
        change(this,this.index);
    }
}

var y=0;
setInterval(function(){

    var Time=document.getElementsByClassName("ctime2");
    var time2=Time[0].getElementsByClassName("time_2");
    if(y==time2.length){
        y=0;
    }
    for(var i=0;i<time2.length;i++){
        time2[i].style.color="black";
        time2[i].style.borderTop="3px solid black";
    }
    time2[y].style.color="#FF5151";
    time2[y].style.borderTop="3px solid #FF5151";

    var CTime=document.getElementsByClassName("ctime1");
    var time1=CTime[0].getElementsByClassName("time_1");
    for(var k=0;k<time1.length;k++){
        time1[k].style.display="none";
    }
    time1[y].style.display="block";
    y++;
},1000);