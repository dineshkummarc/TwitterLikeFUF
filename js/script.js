/*--------------------------------------------------------------------------------------------
|	@desc:		Create Twitter Like Follow And Unfollow With Jquery
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		18 OCT 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
$(document).ready(function(){
//to change the text
  $('.following').hover(function(){
      $(this).text("Unfollow");
    },function(){
       $(this).text("Following");
    });
   //for toggle the class following/follow When click
  	$('.following').click(function(){
    $(this).toggleClass('following follow').unbind("hover");
    if($(this).is('.follow')){
      	$(this).text("Follow");
    }
    else{
    	//binding mouse hover functionality
      	$(this).bind({
            mouseleave:function(){$(this).text("Following");},
            mouseenter:function(){$(this).text("Unfollow");}      
        });
    }
  });
});