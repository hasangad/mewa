var num = 0 ;

function check_first_click(Class_is){ 



	if(num == 0) { num = 1 ;
	
	 // $(".task_inprogress").hide();$(".task_no_started").hide();$(".task_success").hide(); $(".task_late").hide();
	 
	  $(Class_is).hide();$(Class_is).removeClass('viewed');
	   }  else {  num = 0 ;  $(Class_is).show();  $(Class_is).addClass('viewed');
 }



//alert(num);

}



var num_chart = 0 ;

function check_first_click_charts(){ 

	if(num_chart == 0) { num_chart = 1 ;  $(".chart_box").hide(); } 



//alert(num);

}





function sum_tasks(num_is){

		

	var sum = 0;

    $('.'+num_is+' .chart ul li span').each(function() {

		//alert($(this).html());

        sum += Number($(this).html());

    });

	//alert(sum);

	$('.'+num_is+' .num').html(sum);

	

}



sum_tasks(1);

sum_tasks(2);

sum_tasks(3);

sum_tasks(4);

sum_tasks(5);

sum_tasks(6);

sum_tasks(7);

sum_tasks(8);

sum_tasks(9);

sum_tasks(10);

sum_tasks(11);

sum_tasks(12);

sum_tasks(13);

sum_tasks(14);

sum_tasks(15);

sum_tasks(16);



function sum_tasks_by_task() {

	

 $(".chart_box").each(function(){

	var sum = 0;

 

	 $(this).find('ul li.viewed span').each(function() {

		 //alert("YES");

  sum += +$(this).text()||0;

});



$(this).find(".num").text(sum);



    });



 }


$(".table tr").click(function(){
	
	//alert("YES");
	
	$(this).toggleClass('tr_active');
	
});
	

$(".category li").click(function(){

    //$(this).toggle();

	var className = $(this).attr('data_class');

	if( className == 'all_cats'){ $(".chart_box").toggle();

	$(".links li").removeClass("active_link");
	
	$(this).toggleClass("active_link_all");


	} else {

check_first_click_charts();

		$(this).toggleClass("active_link");

	$("."+className).toggle(); }



	//alert(className);

});



$("#task_late").click(function(){


	$(this).toggleClass("active_link");
    //$(".chart ul li").toggleClass('viewed');
    //$(".task_late").removeClass('viewed');

    //$(".task_late").toggle();
	
	check_first_click(".task_late");
	
	sum_tasks_by_task();

});



$("#task_inprogress").click(function(){

	check_first_click();

	$(this).toggleClass("active_link");

    $(".task_inprogress").toggleClass('viewed');

    $(".task_inprogress").toggle();

	sum_tasks_by_task();

});





$("#task_no_started").click(function(){

	check_first_click()

	$(this).toggleClass("active_link");

    $(".task_no_started").toggleClass('viewed');

    $(".task_no_started").toggle();

	sum_tasks_by_task();

});



$("#task_success").click(function(){

	check_first_click();

	$(this).toggleClass("active_link");

    $(".task_success").toggleClass('viewed');

    $(".task_success").toggle();

	sum_tasks_by_task();

});





/*$(".type_list option").click(function(){

	  var clickedOption = $(this).val();

	//alert(clickedOption);

	$(".type_list_choice").val(clickedOption);

});*/





$(".list_list li a span").click(function(){

	//check_first_click();

$(this).closest('.list_list').find('li').removeClass("active_link");

	$(this).closest('li').addClass("active_link");

	  var clickedOption = $(this).html();

	//alert(clickedOption);

	//$(".type_list_choice").val(clickedOption);

	$(this).closest(".list_list").find(".form-control").val(clickedOption);

	//$(".list_list").find(".type_list_choice ").hide();

	

});





/*$(".com_list option").click(function(){

	  var clickedOption = $(this).val();

	//alert(clickedOption);

	$(".com_list_choice").val(clickedOption);

});





$(".cat_list option").click(function(){

	  var clickedOption = $(this).val();

	//alert(clickedOption);

	$(".cat_list_choice").val(clickedOption);

});*/





$(".collaps_me").click(function(e) {


	$(".main_menu").addClass('mini_me');

	$(".main_content").addClass('main_menu_full');

	$(".navbar-brand img").hide();
	$(".main_menu li a span").hide();

$('.navbar-brand').addClass("navbar-brand-collaps");
	$(this).hide();

	$('.expand_me').show();

});



$(".expand_me").click(function(e) {
$('.navbar-brand').removeClass("navbar-brand-collaps");
	$(".navbar-brand img").show();
	$('.collaps_me').show();

	$(this).hide();

	$(".main_menu").removeClass('mini_me');

	$(".main_content").removeClass('main_menu_full');

	$(".main_menu li a span").show();

});







