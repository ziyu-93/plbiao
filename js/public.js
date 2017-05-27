$(function(){
	//首页APP二维码显示
	$('.headerEwm').hover(function(){
		$(this).children('.ewm').filter(':not(:animated)').fadeIn()	
	},function(){
		$(this).children('.ewm').fadeOut()	
	})
	
	
	//搜索框架
	$('.search-warp').hover(function(){
		$(this).children('.search-hot').filter(':not(:animated)').slideDown()	
	},function(){
		$(this).children('.search-hot').slideUp()	
	})
	
	
	//nav
	$('.nav	.right-nav	.itms').hover(function(){
		$(this).children('.m').filter(':not(:animated)').slideDown()	
	},function(){
		$(this).children('.m').slideUp()	
	})
	
	
	
	
	//腕表库
	$('.nav	.pro-nav').hover(function(){
		$(this).children('.m').filter(':not(:animated)').slideDown()	
	},function(){
		$(this).children('.m').slideUp()	
	})
	
	//二次腕表库
	$('.pro-nav	.m		.itms').hover(function(){
		$(this).children('.right').filter(':not(:animated)').fadeIn()	
	},function(){
		$(this).children('.right').fadeOut()	
	})
	
	//返回顶部
	 
	$(window).scroll(function(){ 
	if ($(window).scrollTop()>800){ 
		$(".fh-top").fadeIn(1000); 
	} 
	else
	{ 
		$(".fh-top").fadeOut(1000); 
	} 
	 
	//当点击跳转链接后，回到页面顶部位置 
	$(".fh-top").click(function(){ 
       	window.scrollTo(0,0);  
     
	
	}); 
	});
	
	//喜欢
	$(document).on('click','.btn-like',function(){
			$(this).toggleClass('active')
		
		}) 
		
	//筛选条件更多
	$(document).on('click','.btn-more	span',function(){
		$(this).parent().prev('.more-warp').slideToggle();
		$(this).addClass('active')
		
	})
	
	
	//打开关闭对比
	$(document).on('click','.duibi-warp	.btn',function(){
		$(this).parent('.duibi-warp').toggleClass('active')
		
	})
	
	//腕表库对比删除
	$(document).on('click','.duibi-warp	.itms .t a',function(){
		$(this).parents('.itms').detach();
		
	})
	
	
	
	//排行榜切换
	$(document).on('click','.phb-left-itms	.t',function(){
		$(this).toggleClass('active')
		$(this).parents('.phb-left-itms').find('.warp').slideToggle();
		
	})
	
	
	

})


	    function statInputNum(textArea,numItem) {
        var max = numItem.text(),
                curLength;
        textArea[0].setAttribute("maxlength", max);
        curLength = textArea.val().length;
        numItem.text(max - curLength);
        textArea.on('input propertychange', function () {
            var _value = $(this).val().replace(/\n/gi,"");
            numItem.text(max - _value.length);
        });
    }