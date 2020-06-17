
//scrolling start
$top_to_btm=200;
$('.top_to i').click(function(){
	$('html,body').animate({
		scrollTop: 0
	},1500);
});

$(window).scroll(function(){
	$scrolling=$(this).scrollTop();
	if($scrolling>= $top_to_btm){
		$('.top_to i').fadeIn();
	}
	else{
		$('.top_to i').fadeOut();
	}
});
//scrolling end

$(window).load(function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
})





