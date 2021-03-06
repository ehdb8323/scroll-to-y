
$(document).ready(function(){


var i = $('article').length * 950;      
    
$('.project').css({height : i - 200})




 $(window).scroll(function(){ 

     
var h = $(document).scrollTop();
var t = $('.project').offset().top;
var ss = $('.s2').offset().top;
  
  console.log("h"+ h + "i" + i )

if ( h>= ss && h < t){

$('.under').css({opacity:1})
$('#work').removeClass('on');    
$('.back-word').css({display:'none'})
$('.project').css({background:'white'})
$('footer').css({display:'none'})


}else if( h >= t && h < i){ 
    $('#work').addClass('on'); 
    $('footer').css({display:'block'})


$(window).on('scroll',function(){
var scroll = $(this).scrollTop();

$('#work').stop().animate({left: t - scroll,opacity:1},10);    
})

var bw = Math.floor($(window).scrollTop() / 10);

    
$('.back-word').css({display:'block',left:bw})
$('.project').css({background:'black'})

    
} else{ 
$('#work').removeClass('on');    
$('.back-word').css({display:'none'})
$('.project').css({background:'white'})
$('.under').css({opacity:0})
$('footer').css({display:'none'})
}
     
})//scroll



})//end