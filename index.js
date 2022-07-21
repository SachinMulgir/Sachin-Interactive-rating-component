$(".thanks-card").css("display","none");

$(".rating-buttons").on("click",function(){
  $(this).css("background-color","#959eac");
  var x=$(this).text();
  $(".thanks-rating").text("You selected "+x+" out of 5");
  $(".thanks-card").css("display","block");
  $(".rating-card").css("display","none");

});
