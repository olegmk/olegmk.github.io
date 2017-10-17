$(document).ready(function(){
	
	$("#btnadd").click(function(){
		if ($("#text").val() == "") return;
		$("#task").append("<li>" + $("#text").val() + "</li>");
		$("#text").val("");
	})

	/*$("#task").on("click", "li", function() {
        $(this).toggleClass("done");
     });*/*

     $("#task").on("click", "li", function() {
        $(this).addClass("done");
     });

	
	$("#btndone").click(function(){
		$("#task").toggleClass("done")
	});

	$("#reset").click(function(){
		$("li").hide("slow");
	});	



});