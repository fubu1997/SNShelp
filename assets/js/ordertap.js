//변수모음
const instarOrder = document.querySelectorAll("#instarOrder option");
const instarOrderInput = document.querySelector("#instarOrderInput");
const instarOrderPriceInput = document.querySelector("#instarOrderPriceInput");
const instarID = document.querySelector(".instarID");

//테이블 관련
const tableServiceNum = document.querySelector("#tableServiceNum");
const tableServiceQuality = document.querySelector("#tableServiceQuality");
const tableServicePrice = document.querySelector("#tableServicePrice");
const tableServiceName = document.querySelector(".tableServiceName");
const tableServiceDescription = document.querySelector(
  ".tableServiceDescription"
);

//유투브 테이블
const youtubeTableServiceNum = document.querySelector(
  ".youtubeTableServiceNum"
);
const youtubeTableServiceQuality = document.querySelector(
  ".youtubeTableServiceQuality"
);
const youtubeTableServicePrice = document.querySelector(
  ".youtubeTableServicePrice"
);
const youtubeTableServiceName = document.querySelector(
  ".youtubeTableServiceName"
);
const youtubeTableServiceDescription = document.querySelector(
  ".youtubeTableServiceDescription"
);
//주문하기 버튼
const orderBtn = document.querySelector("#orderBtn");
const 상품명 = document.querySelector(".상품명");
const 수량 = document.querySelector(".수량");
const 가격 = document.querySelector(".가격");
const 주소 = document.querySelector(".주소");
const 주문멘트 = document.querySelector("#주문멘트");

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
  $("#instarOrderInput").val("");
  $("#instarOrderInput").text("주문수량");
  $("#instarOrderPriceInput").val("");
  $("#instarOrderPriceInput").text("금액");
});

function instarOrderFunc(str) {
  //한국인팔로워(실계정)
  if (str.value == "instar1") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 120)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "1";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "120,000원";
    tableServiceName.innerHTML =
      "💎🇰🇷 Instagram Followers [ South Korea - UHQ ] [30 Days Auto-Refill]";
    tableServiceDescription.innerHTML = `한국인 팔로워(실계정)</br>
      작업시간 : 22시간 이내</br>
      작업속도 : 1,000+명 / 일</br>
      30일 오토리필 </br>
      현재까지 드롭현상 없음`;
  }
  //한국인 남자 팔로워(실계정)
  if (str.value == "instar2") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 130)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "2";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "130,000원";
    tableServiceName.innerHTML =
      "💎♂️ 🇰🇷 Instagram Followers [ South Korea - Male ] [30 Days Auto-Refill]";
    tableServiceDescription.innerHTML = `한국인 남자 팔로워(실계정)</br>
      작업시간 : 22시간 이내</br>
      작업속도 : 1,000+명 / 일</br>
      30일 오토리필 </br>
      현재까지 드롭현상 없음`;
  }
  //한국인 여자 팔로워(실계정)
  if (str.value == "instar3") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 130)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "3";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "130,000원";
    tableServiceName.innerHTML =
      "💎♀️ 🇰🇷 Instagram Followers [ South Korea - Female ] [30 Days Auto-Refill]";
    tableServiceDescription.innerHTML = `한국인 여자 팔로워(실계정)</br>
      작업시간 : 22시간 이내</br>
      작업속도 : 1,000+명 / 일</br>
      30일 오토리필 </br>
      현재까지 드롭현상 없음`;
  }
  //좋아요+노출빈도+도달범위+프로필방문(여성)
  if (str.value == "instar4") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 22)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "4";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "22,000원";
    tableServiceName.innerHTML =
      "💎♀️ 🇰🇷 Instagram Likes [ South Korea - Female ] [ Real & Active ]";
    tableServiceDescription.innerHTML = `좋아요+노출빈도+도달범위+프로필방문(여성)</br>
      작업시간 : 하루이내</br>
      작업속도 : 200like+/시간</br>
      현재까지 드롭현상 없음`;
  }
  //좋아요+노출빈도+도달범위+프로필방문(남성)
  if (str.value == "instar5") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 22)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "5";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "22,000원";
    tableServiceName.innerHTML =
      "💎♂️ 🇰🇷 Instagram Likes [ South Korea - Male ] [ Real & Active ]";
    tableServiceDescription.innerHTML = `좋아요+노출빈도+도달범위+프로필방문(여성)</br>
      작업시간 : 하루이내</br>
      작업속도 : 200like+/시간</br>
      현재까지 드롭현상 없음`;
  }
  //좋아요+노출빈도+도달범위+프로필방문(실제유저)
  if (str.value == "instar6") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 35)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "6";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "20,000원";
    tableServiceName.innerHTML =
      "💎🇰🇷 Instagram Likes [ South Korea ] [ Real & Active ]";
    tableServiceDescription.innerHTML = `좋아요+노출빈도+도달범위+프로필방문(실제유저)</br>
      작업시간 : 하루이내</br>
      작업속도 : 200like+/시간</br>
      현재까지 드롭현상 없음`;
  }
  //외국인 팔로워
  if (str.value == "instar7") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 20)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "7";
    tableServiceQuality.innerHTML = "HQ";
    tableServicePrice.innerHTML = "20,000원";
    tableServiceName.innerHTML =
      "🔥⭐️ Instagram Followers [HQ Mixed - Max 300K] [30 Days Refill]";
    tableServiceDescription.innerHTML = `외국인 팔로워</br>
      작업시간 : 하루이내</br>
      작업속도 : 10,000+/하루</br>
      30일 오토리필 </br>
      현재까지 드롭현상 없음`;
  }
  //커스텀 댓글(HQ)
  if (str.value == "instar8") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 100)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "8";
    tableServiceQuality.innerHTML = "HQ";
    tableServicePrice.innerHTML = "100,000원";
    tableServiceName.innerHTML =
      "💎🇰🇷 Instagram Custom Comments [ South Korea - HQ ]";
    tableServiceDescription.innerHTML = `커스텀 댓글(HQ)</br>
      작업시간 : 하루이내</br>
      작업속도 : 빠른시간 이내</br>
      현재까지 드롭현상 없음`;
  }
  //커스텀 댓글(UHQ)
  if (str.value == "instar9") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 200)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "9";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "200,000원";
    tableServiceName.innerHTML =
      "💎🇰🇷 Instagram Custom Comments [ South Korea - UHQ ]";
    tableServiceDescription.innerHTML = `커스텀 댓글(UHQ)</br>
      작업시간 : 하루이내</br>
      작업속도 : 빠른시간 이내</br>
      현재까지 드롭현상 없음`;
  }
  //이모지 댓글(HQ)
  if (str.value == "instar10") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 130)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "10";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "140,000원";
    tableServiceName.innerHTML =
      "	Instagram Korean Emoji Comments (1/1k) {Real} [Non Drop]";
    tableServiceDescription.innerHTML = `이모지 댓글</br>
      작업시간 : 하루이내</br>
      작업속도 : 빠른시간 이내</br>
      현재까지 드롭현상 없음`;
  }
  //랜덤 댓글(HQ)
  if (str.value == "instar11") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#instarOrderInput").val() * 250)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "11";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "250,000원";
    tableServiceName.innerHTML =
      "Instagram Real Korean Random Comments (5/10k) {Real} [Non Drop]";
    tableServiceDescription.innerHTML = `랜덤 댓글</br>
      작업시간 : 하루이내</br>
      작업속도 : 빠른시간 이내</br>
      현재까지 드롭현상 없음`;
  }
  orderBtn.addEventListener("click", function () {
    tableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    tableServiceDescription.innerText = ` 종목 : 인스타그램
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${instarOrderInput.value}개
    가격 : ${instarOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy();
  });
}

function youtubeOrderFunc(str) {
  //한국인팔로워(실계정)
  if (str.value == "youtube1") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 120)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
  }
}

function copy() {
  const textarea = document.createElement("textarea"); // teatarea 요소 생성
  document.body.appendChild(textarea); // body에 요소 추가
  textarea.value = tableServiceDescription.innerText; // value에 복사할 내용 넣기
  textarea.select(); // textarea 요소 선택
  document.execCommand("copy"); // copy 실행
  document.body.removeChild(textarea); // textarea 요소 삭제
  $(".confirmation").hide().html(`복사완료`).fadeIn(0).delay(800).fadeOut(0);
}
