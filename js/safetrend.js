window.onload=function(){
$('.event').click(function(){
    // alert(123);
    $('.eventlist').css('display','block');
   });

   $('.tonone').click(function(){
      $('.eventlist').css('display','none');
   });
   var selected = "t1";
   $('.top-menu ul li').click(function(e){
        var index=$(this).index()+1;
        selected="t"+index;
        alert(selected);
        
  });
   $('.top-menu ul li a').click(function(e){
        var index=$(this).index();
        // alert(index);
        e.preventDefault();
        $('.top-menu ul li a').css('color','#e4dfdf');
        $('.top-menu ul li a').css('font-weight','');

        $(this).css('color','white');
        $(this).css('font-weight','bold');
        
  });


}
// window.onload=function(){
// 	$('.top-menu ul li').click(function(){
//         var index=$(this).index();
//         alert(index);
// 	});
// }

//当窗口大小变化时图表自适应屏幕变化
function resize(){
	// windowWidth=document.body.clientWidth;
windowWidth=document.body.clientWidth;
windowHeight=document.body.clientHeight;

// console.log(windowHeight);
// console.log(windowWidth);
	if(max){
	  juhechange();
      juhechart.resize();
      juhebg();  
	}else{

     option.series[0].force.repulsion=windowWidth/10;
    juhechart.setOption(option);
	}
	if(juhechart)juhechart.resize();
      juhebg();

	if(worldfightchart)worldfightchart.resize();
}
window.onresize=function(){
	resize();
}
var max=false;
var maxdiv;
var maxgraph;
var windowWidth=document.body.clientWidth;
var windowHeight=document.body.clientHeight;
if(windowHeight<600){
   	 option.series[0].force.repulsion=120;
   	}else{
     option.series[0].force.repulsion=windowWidth/10+100;
   	}
   	
   	option.series[0].label.normal.show=false;
   	juhechart.setOption(option);
// console.log(windowHeight);
// console.log(windowWidth);
//点击按钮放大缩小
function zoom(div){
	// alert(1);
   if(!max){
   	//放大
   toLarge(div);
   if(div=='juhe'){
	   	// alert(4);
	   juhechange();
   }else if(div=='eventrader'){
   raderoption.backgroundColor='#161627';
  eventraderchart.setOption(raderoption);
   }
   

   max=true;
   }else{
	   	//缩小
	   	toSmall(div);
	   	if(div=='juhe'){
		   	if(windowHeight<600){
		   	 option.series[0].force.repulsion=120;
		   	}else{
		     option.series[0].force.repulsion=windowWidth/10+100;
		   	}
	   	
	   	option.series[0].label.normal.show=false;
	   	juhechart.setOption(option);
   }

   	max=false;
   }
   switch(div){
   	case"juhe":juhechart.resize(); juhebg();changeButton('juhebutton');break;
   	case"worldheat":worldheatchart.resize();;changeButton('worldheatbutton');$('#worldheat').css({background:'url(images/shixu.png),url(images/shixugrid.png)',backgroundSize: '100% 100%',backgroundColor:'black'});break;
   	case"eventrader":eventraderchart.resize();changeButton('eventraderbutton');$('#eventrader').css({background:'url(images/shixu.png),url(images/shixugrid.png)',backgroundSize: '100% 100%',backgroundColor:'black'});break;
    case"attackpie":attackpiechart.resize();changeButton('attackpiebutton');$('#attackpie').css({background:'url(images/shixu.png),url(images/shixugrid.png)',backgroundSize: '100% 100%',backgroundColor:'black'});break;
   }
   maxdiv=div;
   maxgraph=div+'chart';
  
   //当放大时让图标重新加载居中展示
   
      
   
}

function toLarge(div){
	$('#'+div).css('position','absolute');
	$('#'+div).css('z-index',100000000);
	if(div=='juhe'){
	$("#"+div).css("background-image","url(images/background.png)");
     }
	// $("#"+div).css("background-color","black");
	$("#"+div).css("background-size","100%,100%");
	// $("#"+div+'button').css('margin-left','95vw');
	$("#"+div+'button').css({position:'absolute',right: '5vw', top:'14%',zIndex: 100000001});
	$("#"+div).css("left",0);
	$("#"+div).css("top",'10%');

}
//每次调用resize时都要调用，因为图标自己不带背景
function juhebg(){
	$('#juhe').css("background-image","url(images/background.png)");
    $('#juhe').css("background-size","100%,100%");
    // $('#juhe').css("z-index","100000000");

}
//聚合图表根据页面大小发生变化
function juhechange(){
	if(windowHeight>600){
   		// alert(3);
   	option.series[0].force.repulsion=windowHeight+windowHeight/2;
   	// console.log(option.series[0].force.rsepulsion);
   	}else{
    option.series[0].force.repulsion=700;
   	
    }
   option.series[0].label.normal.show=true;
   	option.series[0].label.normal.position='top';
   	juhechart.setOption(option);
}
function toSmall(div){
   $('#'+div).css('position','relative');
	$('#'+div).css('z-index',1);
	if(div=='juhe'){
	$("#"+div).css("background-image","url(images/background.png)");
	$("#"+div+'button').css({position:'absolute',zIndex: 2,right:'77vw'});
	}else if(div=='worldheat'){
		// alert('hh');
	$("#"+div+'button').css({position:'absolute',zIndex: 0,right:'1vw'});

	// $("#"+div).css({background:'url(images/shixu.png),url(images/shixugrid.png)',backgroundSize: '100% 100%'});
	}else if(div=='eventrader'){
	$("#"+div+'button').css({position:'absolute',zIndex: 0,right:'',top:''});

	}else if(div=='attackpie'){
  $("#"+div+'button').css({position:'absolute',zIndex: 0,right:'',top:''});

  }
	$("#"+div).css("background-size","100%,100%");
	$("#"+div).css("width",'100%');
	$("#"+div).css("height",'100%');
	$("#"+div).css("top",'0');

}
function changeButton(id){
	if(max){
     	$("#"+id).attr('src','images/iconsmall.png');
	}else{
		$("#"+id).attr('src','images/icon.png');
	}
}
