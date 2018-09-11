var menuIsActive = function(){ 
//show mobile menu when clicked
	$('.mobile-menu').on('click', function(event){
event.preventDefault();
  if ( $('#nav-panel').hasClass('display-toggle') ) {	
$('#nav-panel').removeClass('display-toggle');
   } else {
     $('#nav-panel').addClass('display-toggle');
     }
  });

};
export default menuIsActive;