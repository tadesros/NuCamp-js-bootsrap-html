$(function () {

	$(".carousel").carousel({ interval: 2000 });

	//Click Event for Carousel Button
	$("#carouselButton").click(function () {

		if ($("#carouselButton").children("i").hasClass("fa-pause")) {
			$(".carousel").carousel("pause");
			$("#carouselButton").children("i").removeClass("fa-pause");
			$("#carouselButton").children("i").addClass("fa-play");
		} else {
			$(".carousel").carousel("cycle");
			$("#carouselButton").children("i").removeClass("fa-play");
			$("#carouselButton").children("i").addClass("fa-pause");
		}
	});


    //!--Click Events--

	//Click Event for Reserve Campsite
	$("#reserveButton").click(function () {
		$("#reserveModal").modal();
	});
	//Click Event for Login Modal
	$("#loginButton").click(function () {
		$("#loginModal").modal();
	});

	
});
