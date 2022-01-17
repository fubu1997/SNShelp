//변수모음
let 상품명 = document.querySelector(".상품명");
const instarOrder = document.querySelectorAll("#instarOrder option");
//테이블 데이터
const instarService = {
  num: ["1", "2", "3"],
  quality: ["저", "중", "고"],
  price: ["10,000원", "20,000원"],
  serviceName: ["Instargram Korean likes + Impressions + Reach"],
  serviceDescription: [`드롭현상 발생가능( ~ 현재까지 드롭현상 없음)`],
};

const instarServiceName1 = "Instargram Korean likes + Impressions + Reach";
const instarServiceDescription1 = `드롭현상 발생가능( ~ 현재까지 드롭현상 없음)`;

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

//  테이블표 보여주기
$("#instarOrder").change(function () {
  $(".tableServiceName").text(instarService.serviceName[0]);
  $(".tableServiceDescription").text(instarService.serviceDescription[0]);
  $("#instarOrderInput").val("");
  $("#instarOrderInput").text("주문수량");
  $("#instarOrderPriceInput").val("");
  $("#instarOrderPriceInput").text("금액");
});

if($("#instarOrder option:selected").val() = 'instar1') {
  console.log('gg')
}

// if ((상품명.innerHTML = instarOrder[1].innerHTML)) {
//   $("#instarOrderInput").on(
//     "propertychange change keyup paste input",
//     function () {
//       $(".상품명").text($("#instarOrder").val());
//       let instarOrderInputVal = $("#instarOrderInput").val();
//       $(".수량").text(`${instarOrderInputVal}개`);
//       const instarOrderPriceInputVal = $("#instarOrderPriceInput").val(
//         instarOrderInputVal * 10
//       );
//       $(".가격").text(`${instarOrderPriceInputVal.val()}원`);
//     }
//   );
// }
// if ((상품명.innerHTML = instarOrder[2].innerHTML)) {
//   $("#instarOrderInput").on(
//     "propertychange change keyup paste input",
//     function () {
//       $(".상품명").text($("#instarOrder").val());
//       let instarOrderInputVal = $("#instarOrderInput").val();
//       $(".수량").text(`${instarOrderInputVal}개`);
//       const instarOrderPriceInputVal = $("#instarOrderPriceInput").val(
//         instarOrderInputVal * 20
//       );
//       $(".가격").text(`${instarOrderPriceInputVal.val()}원`);
//     }
//   );
// }
