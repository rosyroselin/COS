$(document).ready(function() {
$('[data-toggle="tooltip"]').tooltip(); 

//Sticky Menu
const menu = document.querySelector(".menu");
const btn = menu.querySelector(".nav-tgl-btn");
btn.addEventListener("click", evt => {
if (menu.className.indexOf("active") === -1) {
menu.classList.add("active");
$(".listall").fadeIn(1000);
} else {
menu.classList.remove("active");
$(".listall").fadeOut();
}
});
	
//GO TOP JS
	$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#goTop').fadeIn(200);    // Fade in the arrow
    } else {
        $('#goTop').fadeOut(200);   // Else fade out the arrow
    }
});
$('#goTop').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
    // var table = $('.table-1').DataTable( {
        // responsive: true,
		// 'columnDefs': [
		  // {
			  // "targets": 0, // your case first column
			  // "className": "text-center",
			  // "width": "37px"
		 // },
		 // {
			  // "targets": 2,
			  // "className": "text-center",
		 // }
		 // ],
    // });
   // new $.fn.dataTable.FixedHeader( table );
	
	
	//Tabbed JS
    var numItems = $('li.fancyTab').length;
			  if (numItems == 12){
					$("li.fancyTab").width('8.3%');
				}
			  if (numItems == 11){
					$("li.fancyTab").width('9%');
				}
			  if (numItems == 10){
					$("li.fancyTab").width('10%');
				}
			  if (numItems == 9){
					$("li.fancyTab").width('11.1%');
				}
			  if (numItems == 8){
					$("li.fancyTab").width('12.5%');
				}
			  if (numItems == 7){
					$("li.fancyTab").width('14.2%');
				}
			  if (numItems == 6){
					$("li.fancyTab").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.fancyTab").width('20%');
				}
			  if (numItems == 4){
					$("li.fancyTab").width('25%');
				}
			  if (numItems == 3){
					$("li.fancyTab").width('33.3%');
				}
			  if (numItems == 2){
					$("li.fancyTab").width('50%');
				}
		});

		$(window).on('load', function() {

		  $('.fancyTabs').each(function() {

			var highestBox = 0;
			$('.fancyTab a', this).each(function() {

			  if ($(this).height() > highestBox)
				highestBox = $(this).height();
			});

			$('.fancyTab a', this).height(highestBox);

		  });
		  
});
$( function() {
    $( "#datepicker" ).datepicker();
  } );
var script = {
	showSubSections: function(ele){
	$(ele).next().toggle('slow');
	}
}