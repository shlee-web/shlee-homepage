$(".dark-btn").click(function(){
  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");
});

$(".spin-btn").click(function(){
  $(".box").toggleClass("spin");

});

$(".reveal-btn").click(function(){
  //$(".swordfish").addClass("reveal");
  //$(".swordfish").css("display", "block");
    $(".swordfish").show();
    $(".reveal-btn").hide();
});
$(".draggable").draggable({
    snap:true,
    containment: ".container",
    scroll: false
});