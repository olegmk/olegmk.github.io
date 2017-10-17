$(document).ready(function(){
	
	$("#btnadd").click(function(){
		if ($("#texttask").val() == "") return;
		$("#task").append("<li>" + $("#texttask").val() + "</li>");
	//	$("#task").append(divtext());
		$("#texttask").val("");
	})

	$("#task").on("click", "li", function() {
        $(this).toggleClass("done");
     });

    /*$("#task").on("click", "li", function() {
        $(this).addClass("done");
    });*/

	
	$("#btndone").click(function(){
		$("#task").toggleClass("done");
	});

	/*$("#btndone").click(function(){
		$("#task").addClass("done");
	});*/

	/*$("#btnundone").click(function(){
		$("#task").addClass("undone");
	});*/

	$("#delete").click(function(){
		$("li").hide("slow");
	});	

	

	/*function divtext(){
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow").siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");

	});
	};*/



});