$(document).ready(function(){
	
	//Click button Add
	$("#btnadd").click(function(){
		if ($("#text").val() == "") return;
		$("#task").append("<li>" + $("#text").val() + "</li>");
		$("#text").val("");
	})

	//Click only one row text line-through
	$("#task").on("click", "li", function() {
        $(this).toggleClass("done");
     });

	
	//Click button Done/Undone for all row line-through
	$("#btndone").click(function(){
		$("#task").toggleClass("done")
	});


});