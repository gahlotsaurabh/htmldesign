$(".display-me-on-load").ready(function() {
	$(".add-right-padding").animate({
		"padding-right": "20rem", // we don't need to adjust anything else as bootstrap will take care of it
	}, {
		duration: 1500,
		easing: 'easeOutQuad',
	});
	$(".display-me-on-load").animate({
		width: "10%",
	 	fontSize: "2rem",
	 	marginTop: "10px",
	}, {
		duration: 1500,
  });
});