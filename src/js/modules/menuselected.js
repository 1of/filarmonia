var menuIsActive = function(){ 
//Add active link
$('li a').on('click', function(event){
	$('li a').removeClass('menu-active');
	$(this).addClass('menu-active');
  });

};
export default menuIsActive;