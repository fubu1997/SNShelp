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
