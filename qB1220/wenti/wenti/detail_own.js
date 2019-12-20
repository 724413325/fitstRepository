/*
(function () {
	var btn=document.getElementById('shareBtn');
	var box =document.getElementById('shareBoxAbout');
	var t=0;
	btn.onclick=function  () {
		if (box.style.display=="block") {
			box.style.display="none";
		}else{
			box.style.display="block";
		}
	}
})();
*/
logolistFun=null;
var logolist = document.getElementById('logolist');
logolist_status=0;
opacity= 0;
slide_speed = 1;

var down_slide=function(){
	var logolist = document.getElementById('logolist');
	logolist_status =0;
	var marginTop = parseInt(logolist.style.marginTop);
	opacity-=0.1;
	if(opacity<0)
	{
		opacity = 0;
	}
	logolist.style.opacity = opacity;
	if(marginTop<0)
	{
		marginTop+=slide_speed;
		slide_speed-=2;
		if(marginTop > 0){  
			marginTop = 0;
		}
		logolist.style.marginTop = marginTop+'px';
		if(marginTop>=0)
		{
			clearInterval(logolistFun);
		}
	}
}
var e_fun = function()
{
	if(logolist_status==0)
	{
		clearInterval(logolistFun);
		logolist.style.display='inline-block';
		logolistFun=setInterval(function(){
			logolist_status =1;
			var marginTop = parseInt(logolist.style.marginTop);
			opacity+=0.1;
			if(opacity>1)
			{
				opacity = 1;
			}
			logolist.style.opacity = opacity;
			if(marginTop>-365)
			{
				marginTop-=slide_speed;
				slide_speed+=2;
				
				if(marginTop < -365){  
					marginTop = -365;
				}
				logolist.style.marginTop = marginTop+'px';
				if(marginTop<=-365)
				{
					clearInterval(logolistFun);
				}
			}
		}, 5);
	}
	else
	{
		clearInterval(logolistFun);
		logolistFun=setInterval(down_slide, 5);
	}
}
// document.getElementById('logobg').addEventListener("createTouch" in document ?  'touchstart' : 'click',e_fun,false);
if(document.getElementById("main_body")){ 
	document.getElementById('main_body').addEventListener('touchstart',function(){clearInterval(logolistFun);logolistFun=setInterval(down_slide, 5);},false);
}
$('.s_add_time').click(function(){
	var url = $(this).attr('url');
	var sVal = $(this).attr('val');
	var time = new Date().getTime();
	location.href = url+'&g='+ sVal +'&ts='+time;	
});


try{
document.getElementById('readmore').addEventListener('click',function(){
	document.getElementById('showAllReply').style.display = '';
	document.getElementById('readmore').style.display = 'none';
},false);
}catch(e){}

try{

var dom = document.getElementsByClassName('kw_box');
for (var i in dom) { (function() {
        var KwInput = dom[i];
        var clearBut = KwInput.parentNode.parentNode.getElementsByTagName('span')[0];
        var user_kw = KwInput.parentNode.parentNode.getElementsByClassName('user_kw')[0];
        clearBut.addEventListener('click',
        function(e) {
            KwInput.value = '';
            user_kw.value = 2;
            clearBut.style.display = 'none'
        },
        false);
        if (KwInput.value == '') {
            clearBut.style.display = 'none'
        } else {
            clearBut.style.display = ''
        };
        KwInput.addEventListener('keyup',
        function(e) {

            if (this.value == '') {
                clearBut.style.display = 'none';
                user_kw.value = 2;
            } else {
                clearBut.style.display = ''
            }
        },
        false)
    })()
}
}catch(e){}
var toplist = document.getElementById("toplist");
var toplistwrap = document.getElementById("toplistwrap");
var more = document.getElementById('more');
more.onclick=function(){
	if(toplist.style.display!='none')
	{
		toplist.slideUp(10,190);
		toplistwrap.slideUp(10,215); 
	}
	else
	{
		toplist.slideDown(10,190);
		toplistwrap.slideDown(10,215); 
		more.className += ' moreclick';
	}
}
document.getElementById('slideup').onclick = function() 
{
	toplist.slideUp(10,190);
	toplistwrap.slideUp(10,215); 
}

window.HTMLElement.prototype.slideDown=function(speed,height)
{
	var o = this;
	clearInterval(o.slideFun);
	var h = height;
	var i = 0;
	o.style.height = '0px';	
	o.style.display = 'block';
	o.style.overflow = 'hidden';
	o.slideFun = setInterval(function(){
		
		i = i + 30;
		if(i>h) i=h;
		o.style.height = i+'px';
		if(i>=h)
		{
			o.style.removeProperty('overflow');
			clearInterval(o.slideFun);
		}	
	},speed);
}

window.HTMLElement.prototype.slideUp=function(speed,height)
{
	var o = this;
	clearInterval(o.slideFun);
	var h = height;
	var i = h;
	o.style.overflow = 'hidden';
	o.slideFun = setInterval(function(){
		i -= 30;
		if(i<0) i=0;
		o.style.height = i+'px';
		if(i<=0)
		{
			o.style.display = 'none';
			o.style.removeProperty('overflow');
			more.className = more.className.replace(' moreclick','');
			clearInterval(o.slideFun);
		}	
	
	},speed);
}  


function addUCUrl(yp){
    var reply = $(".g-otherask-b");
    var replyH= new Array();
    for(var k=0;k<reply.length;k++) {
        replyH[k] = $(reply.get(k)).html();
    }
    for(var i=0;yp[i];i++) {
    	var reg=new RegExp(yp[i].name);
		var text =  "<a style='color:#5b5bd7;' target='_blank' onclick=\"_czc.push(['_trackEvent', 'uc_baike', 'ask_question', 'ask_question']);\" href='"+yp[i].url+"'>"+yp[i].name+"</a>";
        for(var j=0;j<reply.length;j++) {
			if(replyH[j].indexOf(yp[i].name)>0){
				replyH[j] = replyH[j].replace(reg,text);
				break;
			}	
        }
    }
    for(var l=0;l<reply.length;l++) {
        $(reply[l]).html(replyH[l]);
    }
}


/**
 * 设置COOKIE
 * @param exp 过期时间（单位：分）
 */
function set_cookie(name, str_val, exp){
    var today = new Date();
    var expireDay = new Date();
    var msPerMonth = 60*1000*exp;
    expireDay.setTime( today.getTime() + msPerMonth );
    document.cookie = name + "=" + str_val + ";expires=" + expireDay.toGMTString();
}

/**
 * 获取COOKIE
 */
function get_cookie(name){
    var search = name + "=";
    begin = document.cookie.indexOf(search);
    if (begin != -1) {
        begin += search.length;
        end = document.cookie.indexOf(";",begin);
    if (end == -1) end = document.cookie.length;
        return document.cookie.substring(begin,end);
    }
} 

/**横漂关闭**/
$(document).ready(function(){
	$('#bot_fixclose').live('touchend',function(e){
		$(this).parent().next().hide();
		$(this).parent().hide();
		$('.test_bbg').hide();
		$('#top_ad').hide(320);
		
		if (e && e.stopPropagation) {
				e.stopPropagation();
		}
		else {//IE
				window.event.cancelBubble = true;
		}
	});
});