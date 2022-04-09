//JavaScript Document
$(function(){
	const $header_right = $(".header_right");
	const $policy_btn = $(".policy_btn");
	const $rule_btn = $(".rule_btn");
	const $mask = $(".mask");
	const $login_modal = $(".login_modal");
	const $register_member_modal = $(".register_member_modal");
	const $video_modal = $(".video_modal");
	const $mobile_menu = $("#mobile_menu");
	const $trip_more_btn = $(".trip_more_btn");
	const $fixed_btn_box = $(".fixed_btn_box");
	const $go_top_btn = $(".go_top_btn");

	//Mobile Menu
	function open(){
		$header_right.slideToggle('4600',"easeInOutBack");
		$mask.fadeToggle(500);
	}
	function clear_style(){
		if($(window).innerWidth() > 1024){
			$(".header_right").attr("style","");
		}
	}
	$mobile_menu.on("click",function(){
		$(this).toggleClass("open");
		open();
	});
	$(window).on("resize",function(){
		clear_style();
	});

	//Modal
	function menu_toggle(){
		$mobile_menu.removeClass("open");
		$mask.show();		
	}
	if($(window).innerWidth() > 1250){
		$(".login_in_btn,.member_login_btn,.forget_psw,.register_btn,.agree_btn,.add_member,.disagree_btn,photo_video,img.multiple_day_video_photo,.video_close_model,.upload_pay_btn").on("click",function(){
			menu_toggle();
		});
	}
	if($(window).innerWidth() <= 1250){
		$(".login_in_btn,.member_login_btn,.forget_psw,.register_btn,.agree_btn,.add_member,.disagree_btn,photo_video,img.multiple_day_video_photo,.video_close_model,.upload_pay_btn").on("click",function(){
			$header_right.slideUp('4600',"easeInOutBack");
			menu_toggle();
		});
	}
	$(".login_in_btn").on("click",function(){
		$login_modal.show();
	});
	$(".member_login_btn").on("click",function(){
		$(".add_member_modal,.register_member_modal").hide();
		$(".photo_verification_modal").show();		
	});
	$(".forget_psw").on("click",function(){
		$login_modal.hide();
		$(".forget_psw_modal").show();
	});
	$(".modal_close_icon").on("click",function(){	
		$(".login_modal,.forget_psw_modal,.register_member_modal,.add_member_modal,.upload_pay_modal").hide();
		$mask.hide();
	});
	$(".register_btn").on("click",function(){
		$mask.show();
		$register_member_modal.show();
	});
	$(".agree_btn").on("click",function(){
		$(".register_member_modal").hide();
		$(".add_member_modal").show();
	});
	$(".add_member").on("click",function(){
		$register_member_modal.show();
	});
	$(".disagree_btn").on("click",function(){
		$(".login_modal,.register_member_modal").hide();
		$mask.hide();
	})
    $(".photo_video,img.multiple_day_video_photo").on("click", function(){
		$mask.show();
		$video_modal.show();
	});
    $(".video_close_model").on("click", function(){
		$video_modal.hide();
		$mask.hide();
	});
	$(".upload_pay_btn").on("click",function(){
		$mask.show();
		$(".upload_pay_modal").show();
		return false;
	});

	//Tab
	$(".travel_schedule_btn").on("click",function(){
		let $travel_theme = $(this).attr("id");
		switch($travel_theme){
			case "multi_day_trip":
				$trip_more_btn.attr("href","multiple_day_trip.html");
				break;
			case "island_trip":
				$trip_more_btn.attr("href","island_trip.html");
				break;
			case "car_trip":
				$trip_more_btn.attr("href","car_trip.html");
				break;
			case "foreign_trip":
				$trip_more_btn.attr("href","foreign_trip.html");
				break;
		}
	});
	$(".two_day_tabs > li:not(.two_day_tabs li:last()),.multiple_day_travel_list_tabs > li,.tour_bus_choose_box > li").on("click",function(){
		let $now_tab = $(this).find("a").attr("href");
		$(".tab_content[class!='tab_content_1']").hide();
		$(this).addClass("tab_current").siblings().removeClass("tab_current");
		$($now_tab).fadeIn(300);
		return false;
	});
	$(".month_choose > li").on("click",function(){
		let $month_tab = $(this).find("a").attr("href");
		$(".month_content[class!='month_content_1']").hide();
		$(this).addClass("tab_current").siblings().removeClass("tab_current");
		$($month_tab).fadeIn(300);
		return false;
	});
	$(".two_day_tabs li:last").on("click",function(){
		$(".two_day_tabs").find("li").removeClass("tab_current");
		$(this).addClass("tab_current");
		window.location.replace("https://docs.google.com/forms/d/1-usgHugOctshpg8lj9xrSMe9mCax97DGKXF-Yh1Dmsg/edit?hl=zh-tw");
	});
	$(".rule_tabs > li").on("click",function(){
		let $now_tab = $(this).find("a").attr("href");
		$(".tab_content[class!='tab_content_1']").hide();
		$(this).addClass("rule_current").siblings().removeClass("rule_current");
		$($now_tab).fadeIn(300);
		if($policy_btn.hasClass("rule_current")){
			$policy_btn.find("img").attr("src","images/arrow_icon_orange"+".png");
		}else{
			$policy_btn.find("img").attr("src","images/arrow_icon_blue"+".png");
		}
		if($rule_btn.hasClass("rule_current")){
			$rule_btn.find("img").attr("src","images/arrow_icon_orange"+".png");
		}else{
			$rule_btn.find("img").attr("src","images/arrow_icon_blue"+".png");
		}
		return false;
	});
	
    //Calendar Tab 
    $(document).on("click",".calendar_list ul.month_choose li", function(){
        //console.log("month_choose > li");
        var hrefTab = $(this).find("div").attr("class");
        var hrefTabArr = hrefTab.split('_');
        var travelStepCode = $inputTab.val();
        //const $dayDetailTab = $(this).closest("ul").siblings("#month_choose_tab_" + hrefTabArr[2]);
        //console.log("month_content_" + hrefTabArr[2]);
        $(".month_content[class!='month_content_" + hrefTabArr[2] + "']").hide();
        //console.log($dayDetailTab.attr("style"));
        $(".month_content_" + hrefTabArr[2]).show();
        //console.log($dayDetailTab.attr("style"));
        $(this).addClass("tab_current selected").siblings().removeClass("tab_current selected");
        $inputTab = $(".month_content_" + hrefTabArr[2]).find("div.month_travel_list.selected input");
        //console.log(travelStepCode);
        updateTripStatisticInfo(travelStepCode);
    });

    //Travel Attend No
    $(document).on("click",".calendar_list .month_travel_list", function(){
        var travelStepCode = $(this).find("input").val();
        //console.log("month_travel_list");
        $(this).addClass("selected").siblings().removeClass("selected");
        //console.log(travelStepCode);
        updateTripStatisticInfo(travelStepCode);
    });

	//Travel
	$(".tabs_brief_btn").on("click",function(){
		$(this).toggleClass("show");
		if($(".timeline_travel").is(":visible")){
			$(this).text("精簡模式");
		}else{
			$(this).text("圖文模式");
		}
		$(".timeline_travel,.travel_table").toggle();
	});

	//Slider
	$(".index_slider,.video_slider").slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		dots: true,
		autoplay: true
	});
	$(".news_slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  infinite: true,
				  dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		]
	});

	//Schedule Calendar
	$(".month_choose").find("li").on("click",function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	$(".month_travel_list").on("click",function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	});

	//Go Top
	$(window).on("scroll",function(){
		if($(this).scrollTop() > $(".banner_box_height").offset().top){
			$fixed_btn_box.fadeIn(500);
		}else{
			$fixed_btn_box.fadeOut(500);
		}
	});
	if($(window).innerWidth() <= 1250){
		$(window).on("scroll",function(){
			if($(this).scrollTop() >= $(".mobile_footer_box").offset().top / 1.15){
				$go_top_btn.addClass("lightblue");
			}else{
				$go_top_btn.removeClass("lightblue");
			}
		});
	}
	$(".desktop_go_top_btn,.go_top_btn").on("click",function(){
		$("html,body").stop().animate({scrollTop:$(".header_box").offset().top},800,"easeOutCubic");
		return false;
	});
});