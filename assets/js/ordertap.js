//1. IMG를 누루면 그에 맞는 서비스목록창을 보여준다.
$(".instarIMG").click(function () {
  $("#instarOrderContainer").toggle();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").hide();
});

$(".youtubeIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").toggle();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").hide();
});

$(".tiktokIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").toggle();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").hide();
});

$(".facebookIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").toggle();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").hide();
});

$(".twitterIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").toggle();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").hide();
});

$(".pinterestIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").toggle();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").hide();
});

$(".telegramIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").toggle();
  $("#webOrderContainer").hide();
});

$(".webIMG").click(function () {
  $("#instarOrderContainer").hide();
  $("#youtubeOrderContainer").hide();
  $("#tiktokOrderContainer").hide();
  $("#facebookOrderContainer").hide();
  $("#twitterOrderContainer").hide();
  $("#pinterestOrderContainer").hide();
  $("#telegramOrderContainer").hide();
  $("#webOrderContainer").toggle();
});

//2. 인스타서비스에서 서비스목록을 누르면 그에 맞는 가격이 뜬다.
$("#instarOrder").change(function () {
  $(".상품명").text($("#instarOrder").val());
  console.log($("#instarOrder").val());
});
