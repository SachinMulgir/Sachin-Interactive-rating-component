$(".thanks-card").css("display","none");

$(".rating-buttons").on("click",function(){
  $(this).css("background-color","#959eac");
  var x=$(this).text();
  $(".thanks-rating").text("You selected "+x+" out of 5");
});

$(".submit-button").on("click",function(){
  $(".rating-card").css("display","none");
  $(".thanks-card").css("display","block");

});
