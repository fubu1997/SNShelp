//변수모음
const instarOrder = document.querySelectorAll("#instarOrder option");
const instarOrderInput = document.querySelector("#instarOrderInput");
const instarOrderPriceInput = document.querySelector("#instarOrderPriceInput");
const instarID = document.querySelector(".instarID");

//인스타테이블 관련
const tableServiceNum = document.querySelector("#tableServiceNum");
const tableServiceQuality = document.querySelector("#tableServiceQuality");
const tableServicePrice = document.querySelector("#tableServicePrice");
const tableServiceName = document.querySelector(".tableServiceName");
const tableServiceDescription = document.querySelector(
  ".tableServiceDescription"
);
//유투브 관련
const youtubeTableServiceNum = document.querySelector(
  "#youtubeTableServiceNum"
);
const youtubeTableServiceQuality = document.querySelector(
  "#youtubeTableServiceQuality"
);
const youtubeTableServicePrice = document.querySelector(
  "#youtubeTableServicePrice"
);
const youtubeTableServiceName = document.querySelector(
  "#youtubeTableServiceName"
);
const youtubeTableServiceDescription = document.querySelector(
  "#youtubeTableServiceDescription"
);
const youtubeOrderBtn = document.querySelector("#youtubeOrderBtn");
const youtubeOrderInput = document.querySelector("#youtubeOrderInput");
const youtubeOrderPriceInput = document.querySelector(
  "#youtubeOrderPriceInput"
);

//틱톡 관련
const tiktokTableServiceNum = document.querySelector("#tiktokTableServiceNum");
const tiktokTableServiceQuality = document.querySelector(
  "#tiktokTableServiceQuality"
);
const tiktokTableServicePrice = document.querySelector(
  "#tiktokTableServicePrice"
);
const tiktokTableServiceName = document.querySelector(
  "#tiktokTableServiceName"
);
const tiktokTableServiceDescription = document.querySelector(
  "#tiktokTableServiceDescription"
);
const tiktokOrderBtn = document.querySelector("#tiktokOrderBtn");
const tiktokOrderInput = document.querySelector("#tiktokOrderInput");
const tiktokOrderPriceInput = document.querySelector("#tiktokOrderPriceInput");

//페이스북 관련
const facebookTableServiceNum = document.querySelector(
  "#facebookTableServiceNum"
);
const facebookTableServiceQuality = document.querySelector(
  "#facebookTableServiceQuality"
);
const facebookTableServicePrice = document.querySelector(
  "#facebookTableServicePrice"
);
const facebookTableServiceName = document.querySelector(
  "#facebookTableServiceName"
);
const facebookTableServiceDescription = document.querySelector(
  "#facebookTableServiceDescription"
);
const facebookOrderBtn = document.querySelector("#facebookOrderBtn");
const facebookOrderInput = document.querySelector("#facebookOrderInput");
const facebookOrderPriceInput = document.querySelector(
  "#facebookOrderPriceInput"
);

//트위터 관련
const twitterTableServiceNum = document.querySelector(
  "#twitterTableServiceNum"
);
const twitterTableServiceQuality = document.querySelector(
  "#twitterTableServiceQuality"
);
const twitterTableServicePrice = document.querySelector(
  "#twitterTableServicePrice"
);
const twitterTableServiceName = document.querySelector(
  "#twitterTableServiceName"
);
const twitterTableServiceDescription = document.querySelector(
  "#twitterTableServiceDescription"
);
const twitterOrderBtn = document.querySelector("#twitterOrderBtn");
const twitterOrderInput = document.querySelector("#twitterOrderInput");
const twitterOrderPriceInput = document.querySelector(
  "#twitterOrderPriceInput"
);

//핀터레스트 관련
const pinterestTableServiceNum = document.querySelector(
  "#pinterestTableServiceNum"
);
const pinterestTableServiceQuality = document.querySelector(
  "#pinterestTableServiceQuality"
);
const pinterestTableServicePrice = document.querySelector(
  "#pinterestTableServicePrice"
);
const pinterestTableServiceName = document.querySelector(
  "#pinterestTableServiceName"
);
const pinterestTableServiceDescription = document.querySelector(
  "#pinterestTableServiceDescription"
);
const pinterestOrderBtn = document.querySelector("#pinterestOrderBtn");
const pinterestOrderInput = document.querySelector("#pinterestOrderInput");
const pinterestOrderPriceInput = document.querySelector(
  "#pinterestOrderPriceInput"
);

//텔레그램 관련
const telegramTableServiceNum = document.querySelector(
  "#telegramTableServiceNum"
);
const telegramTableServiceQuality = document.querySelector(
  "#telegramTableServiceQuality"
);
const telegramTableServicePrice = document.querySelector(
  "#telegramTableServicePrice"
);
const telegramTableServiceName = document.querySelector(
  "#telegramTableServiceName"
);
const telegramTableServiceDescription = document.querySelector(
  "#telegramTableServiceDescription"
);
const telegramOrderBtn = document.querySelector("#telegramOrderBtn");
const telegramOrderInput = document.querySelector("#telegramOrderInput");
const telegramOrderPriceInput = document.querySelector(
  "#telegramOrderPriceInput"
);

//web 관련
const webTableServiceNum = document.querySelector("#webTableServiceNum");
const webTableServiceQuality = document.querySelector(
  "#webTableServiceQuality"
);
const webTableServicePrice = document.querySelector("#webTableServicePrice");
const webTableServiceName = document.querySelector("#webTableServiceName");
const webTableServiceDescription = document.querySelector(
  "#webTableServiceDescription"
);
const webOrderBtn = document.querySelector("#webOrderBtn");
const webOrderInput = document.querySelector("#webOrderInput");
const webOrderPriceInput = document.querySelector("#webOrderPriceInput");

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
          `${($("#instarOrderInput").val() * 25)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "4";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "25,000원";
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
          `${($("#instarOrderInput").val() * 25)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "5";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "25,000원";
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
          `${($("#instarOrderInput").val() * 30)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "6";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "30,000원";
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
  //정기권 추가 input 보여주기
  if (str.value == "instar12") {
    $("#newPostLabel").text(`새로운 포스트 갯수`);
    $("#autoPostLikeLabel").text(`포스트당 좋아요 갯수`);
    $(".autoPanel").show();
    $(".autoPanelDel").hide();
  } else if (str.value == "instar13") {
    $(".autoPanel").show();
    $(".autoPanelDel").hide();
    $("#newPostLabel").text("주문수량");
    $("#autoPostLikeLabel").text("일일 유입 팔로워수");
  } else if (str.value == "instar14") {
    $("#newPostLabel").text(`새로운 포스트 갯수`);
    $("#autoPostLikeLabel").text(`포스트당 댓글 갯수`);
    $(".autoPanel").show();
    $(".autoPanelDel").hide();
  } else {
    $(".autoPanel").hide();
    $(".autoPanelDel").show();
  }
  //인게이지먼트 정기권
  if (str.value == "instar12") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#newPost").val() * $("#autoPostLike").val() * 28)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "12";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "28,000원";
    tableServiceName.innerHTML = "인게이지먼트↑ 정기권";
    tableServiceDescription.innerHTML = `★좋아요 + 노출빈도 + 도달범위 + 프로필방문(실제유저)</br>
        ★새로 올라오는 포스트에 인게이지먼트 작업이 시작됩니다.</br></br>
        [★인기게시물 작업 순서 ]</br>
          1. 인게이지 먼트 ↑ 작업</br>
          2. 팔로워 유입 작업</br>
          3. 랜덤 댓글 작업</br></br>
        게시할 피드 개수와 피드당 좋아요 수 설정</br>
        [★인기게시물 안내사항 ]</br>
          - 인게이지먼트 수치가 높아야 인기게시물 순위가 오릅니다</br>
          - 인게이지먼트 수치는 좋아요, 노출빈도, 팔로워, 프로필방문 등 </br>여러가지 요소가 포함됩니다.</br>
          - 새 계정은 1달간 1일1포스팅 추천</br>
          - 새로운 사진, 동영상으로 작업</br></br>
        [★#해시태그 선택방법 ]</br>
          - 인게 작업할 키워드 검색 후 인기게시물 오른 해시태그에서 키워드 추출하세요</br>
          - 해시태그는 15개 권장, 기존 쓰던 해시태그 복사 붙여넣기 금지</br>
          - 해시태그 중 게시물 수 5000개이하 태그 2~4개정도 포함</br>
          - 해시태그는 본문 혹은 댓글에 1회 넣어주면 끝`;
  }
  //팔로워 유입 정기권
  if (str.value == "instar13") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#newPost").val() * 120)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "13";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "120,000원";
    tableServiceName.innerHTML = "팔로워 유입 정기권";
    tableServiceDescription.innerHTML = `★실제 유저 팔로워가 지속 유입됩니다.</br>
          ★24시간 단위로 설정된 유저수가 유입됩니다.</br></br>
          [★인기게시물 작업 순서 ]</br>
            1. 인게이지 먼트 ↑ 작업</br>
            2. 팔로워 유입 작업</br>
            3. 랜덤 댓글 작업</br></br>
          게시할 피드 개수와 피드당 좋아요 수 설정</br>
          [★인기게시물 안내사항 ]</br>
            - 인게이지먼트 수치가 높아야 인기게시물 순위가 오릅니다</br>
            - 인게이지먼트 수치는 좋아요, 노출빈도, 팔로워, 프로필방문 등 </br>여러가지 요소가 포함됩니다.</br>
            - 새 계정은 1달간 1일1포스팅 추천</br>
            - 새로운 사진, 동영상으로 작업</br></br>
          [★#해시태그 선택방법 ]</br>
            - 인게 작업할 키워드 검색 후 인기게시물 오른 해시태그에서 키워드 추출하세요</br>
            - 해시태그는 15개 권장, 기존 쓰던 해시태그 복사 붙여넣기 금지</br>
            - 해시태그 중 게시물 수 5000개이하 태그 2~4개정도 포함</br>
            - 해시태그는 본문 혹은 댓글에 1회 넣어주면 끝`;
  }
  //랜덤댓글 정기권
  if (str.value == "instar14") {
    $("#instarOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#instarOrderPriceInput").text("");
        $("#instarOrderPriceInput").val(
          `${($("#newPost").val() * $("#autoPostLike").val() * 250)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tableServiceNum.innerHTML = "14";
    tableServiceQuality.innerHTML = "UHQ";
    tableServicePrice.innerHTML = "250,000원";
    tableServiceName.innerHTML = "팔로워 유입 정기권";
    tableServiceDescription.innerHTML = `★올라오는 포스트 내용에 맞추어 랜덤댓글 등록.</br>
            ★포스트 등록시 자동으로 랜덤댓글이 등록됩니다.</br>
            ★포스트 내용과 관련된 댓글이 등록됩니다.(퀄리티 좋음).</br></br>
            [★인기게시물 작업 순서 ]</br>
              1. 인게이지 먼트 ↑ 작업</br>
              2. 팔로워 유입 작업</br>
              3. 랜덤 댓글 작업</br></br>
            게시할 피드 개수와 피드당 좋아요 수 설정</br>
            [★인기게시물 안내사항 ]</br>
              - 인게이지먼트 수치가 높아야 인기게시물 순위가 오릅니다</br>
              - 인게이지먼트 수치는 좋아요, 노출빈도, 팔로워, 프로필방문 등 </br>여러가지 요소가 포함됩니다.</br>
              - 새 계정은 1달간 1일1포스팅 추천</br>
              - 새로운 사진, 동영상으로 작업</br></br>
            [★#해시태그 선택방법 ]</br>
              - 인게 작업할 키워드 검색 후 인기게시물 오른 해시태그에서 키워드 추출하세요</br>
              - 해시태그는 15개 권장, 기존 쓰던 해시태그 복사 붙여넣기 금지</br>
              - 해시태그 중 게시물 수 5000개이하 태그 2~4개정도 포함</br>
              - 해시태그는 본문 혹은 댓글에 1회 넣어주면 끝`;
  }
  orderBtn.addEventListener("click", function () {
    tableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    tableServiceDescription.innerText = ` 종목 : 인스타그램
    상품명 :${str.options[str.selectedIndex].text}
    New Post : ${$("#newPost").val()}개
    Quantity : ${$("#autoPostLike").val()}개
    가격 : ${instarOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(tableServiceDescription);
  });
}
function youtubeOrderFunc(str) {
  //구독자 늘리기(HQ)
  if (str.value == "youtube1") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 7)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "1";
    youtubeTableServiceQuality.innerHTML = "HQ";
    youtubeTableServicePrice.innerHTML = "7,000원";
    youtubeTableServiceName.innerHTML =
      "	♛ YouTube Subscribers [HQ - Max 15K] [No Refill]";
    youtubeTableServiceDescription.innerHTML = `유튜브 구독자(봇)</br>
    작업시간 : 3시간 이내</br>
    작업속도 : 500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  //구독자 늘리기(UHQ)
  if (str.value == "youtube2") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 55)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "2";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "55,000원";
    youtubeTableServiceName.innerHTML =
      "	♛ YouTube Subscribers [Real - Max 10K] [30 Days Refill]";
    youtubeTableServiceDescription.innerHTML = `유튜브 구독자(실제유저)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 200+명 / 일</br>
    30일 리필 보증 </br>
    현재까지 드롭현상 없음`;
  }
  //유튜브 조회수(HQ)
  if (str.value == "youtube3") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "3";
    youtubeTableServiceQuality.innerHTML = "HQ";
    youtubeTableServicePrice.innerHTML = "5,000원";
    youtubeTableServiceName.innerHTML =
      "🔥⭐️ YouTube Unique Views [RAV™ - Real & Active Views] + Engagements";
    youtubeTableServiceDescription.innerHTML = `유튜브 조회수(HQ)</br>
    작업시간 : 3시간 이내</br>
    작업속도 : 500+명 / 일</br>
    현재까지 드롭현상 없음`;
  }
  //유튜브 조회수(UHQ)
  if (str.value == "youtube4") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 8)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "4";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "8,000원";
    youtubeTableServiceName.innerHTML =
      "🔥⭐️ YouTube Unique Views [RAV-MTS™ - High Monetization Views] + Engagements";
    youtubeTableServiceDescription.innerHTML = `유튜브 조회수(UHQ)</br>
    작업시간 : 2시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    실제유저 조회수 작업</br>
    현재까지 드롭현상 없음`;
  }
  //유튜브 라이브 조회수(HQ)
  if (str.value == "youtube5") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 4)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "5";
    youtubeTableServiceQuality.innerHTML = "HQ";
    youtubeTableServicePrice.innerHTML = "4,000원";
    youtubeTableServiceName.innerHTML =
      "♛🔥 YouTube Live Views [RAV™ - Real & Active Views]";
    youtubeTableServiceDescription.innerHTML = `유튜브 라이브 조회수(HQ)</br>
    작업시간 : 즉시</br>
    실제유저 조회수 작업</br>
    현재까지 드롭현상 없음`;
  }
  //유튜브 라이브 조회수(UHQ)
  if (str.value == "youtube6") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 6)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "6";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "6,000원";
    youtubeTableServiceName.innerHTML =
      "	♛🔥 YouTube Pre-Premiere Waitings [RAV™ - Real & Active Views]";
    youtubeTableServiceDescription.innerHTML = `유튜브 라이브 조회수(UHQ)</br>
      작업시간 : 즉시</br>
      실제유저 조회수 작업</br>
      현재까지 드롭현상 없음`;
  }
  //유튜브 좋아요(HQ)
  if (str.value == "youtube7") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 3)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "7";
    youtubeTableServiceQuality.innerHTML = "HQ";
    youtubeTableServicePrice.innerHTML = "3,000원";
    youtubeTableServiceName.innerHTML = "🔥 YouTube Likes [HQ - Max 100K]";
    youtubeTableServiceDescription.innerHTML = `유튜브 좋아요(HQ)</br>
        작업시간 : 60분 이내</br>
        작업속도 : 10,000+like / 일</br>
        현재까지 드롭현상 없음`;
  }
  //유튜브 좋아요(UHQ)
  if (str.value == "youtube8") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 8)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "8";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "8,000원";
    youtubeTableServiceName.innerHTML = "🔥⚡ YouTube Likes [Real - Max 100K]";
    youtubeTableServiceDescription.innerHTML = `유튜브 좋아요(UHQ)</br>
          작업시간 : 60분 이내</br>
          작업속도 : 5,000+like / 일</br>
          40일 오토리필</br>
          현재까지 드롭현상 없음`;
  }
  //유튜브 Shorts 조회수
  if (str.value == "youtube9") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 4)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "9";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "4,000원";
    youtubeTableServiceName.innerHTML =
      " YouTube Shorts Views (100/500k) [Non-Drop] R30";
    youtubeTableServiceDescription.innerHTML = `유튜브 Shorts 조회수(UHQ)</br>
            작업시간 : 60분 이내</br>
            작업속도 : 3,000+like / 일</br>
            현재까지 드롭현상 없음`;
  }
  //유튜브 커스텀 댓글
  if (str.value == "youtube10") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 13)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "10";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "13,000원";
    youtubeTableServiceName.innerHTML = "Youtube Custom Comments (10/5k)";
    youtubeTableServiceDescription.innerHTML = `유튜브 커스텀 댓글(UHQ)</br>
              작업시간 : 2일 이내</br>
              작업속도 : 100+ / 일</br>
              현재까지 드롭현상 없음`;
  }
  //유튜브 랜덤 댓글
  if (str.value == "youtube11") {
    $("#youtubeOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#youtubeOrderInput").text("");
        $("#youtubeOrderPriceInput").val(
          `${($("#youtubeOrderInput").val() * 13)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    youtubeTableServiceNum.innerHTML = "11";
    youtubeTableServiceQuality.innerHTML = "UHQ";
    youtubeTableServicePrice.innerHTML = "13,000원";
    youtubeTableServiceName.innerHTML = "Youtube Random Comments (10/5k)";
    youtubeTableServiceDescription.innerHTML = `유튜브 랜덤 댓글(UHQ)</br>
                작업시간 : 2일 이내</br>
                작업속도 : 100+ / 일</br>
                현재까지 드롭현상 없음`;
  }
  youtubeOrderBtn.addEventListener("click", function () {
    youtubeTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    youtubeTableServiceDescription.innerText = ` 종목 : 인스타그램
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${youtubeOrderInput.value}개
    가격 : ${youtubeOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(youtubeTableServiceDescription);
  });
}
function tiktokOrderFunc(str) {
  //구독자 늘리기(HQ)
  if (str.value == "tiktok1") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "1";
    tiktokTableServiceQuality.innerHTML = "HQ";
    tiktokTableServicePrice.innerHTML = "2,000원";
    tiktokTableServiceName.innerHTML = "♛ TikTok Followers [HQ - S1]";
    tiktokTableServiceDescription.innerHTML = `틱톡 팔로워(HQ)</br>
    작업시간 : 3시간 이내</br>
    작업속도 : 500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok2") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 9)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "2";
    tiktokTableServiceQuality.innerHTML = "UHQ";
    tiktokTableServicePrice.innerHTML = "9,000원";
    tiktokTableServiceName.innerHTML = "♛ TikTok Followers [Real - Max 200K]";
    tiktokTableServiceDescription.innerHTML = `틱톡 팔로워(UHQ)</br>
    작업시간 : 3시간 이내</br>
    작업속도 : 2,000+명 / 일</br>
    30일 리필 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok3") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 3.5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "3";
    tiktokTableServiceQuality.innerHTML = "HQ";
    tiktokTableServicePrice.innerHTML = "3,500원";
    tiktokTableServiceName.innerHTML = "🔥♛ TikTok Likes [HQ - S1]";
    tiktokTableServiceDescription.innerHTML = `틱톡 좋아요(HQ)</br>
    작업시간 : 60분 이내</br>
    작업속도 : 즉시 / 일</br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok4") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 4)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "4";
    tiktokTableServiceQuality.innerHTML = "UHQ";
    tiktokTableServicePrice.innerHTML = "4,000원";
    tiktokTableServiceName.innerHTML = "	🔥♛ TikTok Likes [Real]";
    tiktokTableServiceDescription.innerHTML = `틱톡 좋아요(UHQ)</br>
    작업시간 : 60분 이내</br>
    작업속도 : 즉시 / 일</br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok5") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 1)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "5";
    tiktokTableServiceQuality.innerHTML = "HQ";
    tiktokTableServicePrice.innerHTML = "1000원";
    tiktokTableServiceName.innerHTML = "🔥♛ TikTok Views [S4]";
    tiktokTableServiceDescription.innerHTML = `틱톡 조회수(HQ)</br>
    작업시간 : 60분 이내</br>
    작업속도 : 즉시 / 일</br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok6") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 1.5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "6";
    tiktokTableServiceQuality.innerHTML = "UHQ";
    tiktokTableServicePrice.innerHTML = "1500원";
    tiktokTableServiceName.innerHTML = "🔥♛ TikTok Views [S2]";
    tiktokTableServiceDescription.innerHTML = `틱톡 조회수(UHQ)</br>
    작업시간 : 60분 이내</br>
    작업속도 : 즉시 / 일</br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok7") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 18)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "7";
    tiktokTableServiceQuality.innerHTML = "UHQ";
    tiktokTableServicePrice.innerHTML = "18,000원";
    tiktokTableServiceName.innerHTML =
      "♛ TikTok Custom Comments [Real - Max 100K]";
    tiktokTableServiceDescription.innerHTML = `틱톡 커스텀 댓글(UHQ)</br>
    작업시간 : 60분 이내</br>
    작업속도 : 즉시 / 일</br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "tiktok8") {
    $("#tiktokOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#tiktokOrderInput").text("");
        $("#tiktokOrderPriceInput").val(
          `${($("#tiktokOrderInput").val() * 18)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    tiktokTableServiceNum.innerHTML = "8";
    tiktokTableServiceQuality.innerHTML = "UHQ";
    tiktokTableServicePrice.innerHTML = "18,000원";
    tiktokTableServiceName.innerHTML =
      "♛ TikTok Random Comments [Real - Max 100K]";
    tiktokTableServiceDescription.innerHTML = `틱톡 랜덤 댓글(UHQ)</br>
    작업시간 : 60분 이내</br>
    작업속도 : 즉시 / 일</br>
    현재까지 드롭현상 없음`;
  }
  tiktokOrderBtn.addEventListener("click", function () {
    tiktokTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    tiktokTableServiceDescription.innerText = ` 종목 : Tiktok
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${tiktokOrderInput.value}개
    가격 : ${tiktokOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(tiktokTableServiceDescription);
  });
}
function facebookOrderFunc(str) {
  if (str.value == "facebook1") {
    $("#facebookOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#facebookOrderInput").text("");
        $("#facebookOrderPriceInput").val(
          `${($("#facebookOrderInput").val() * 70)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    facebookTableServiceNum.innerHTML = "1";
    facebookTableServiceQuality.innerHTML = "HQ";
    facebookTableServicePrice.innerHTML = "70,000원";
    facebookTableServiceName.innerHTML =
      "Facebook Page Likes (WORLD WIDE) Advertiser Access";
    facebookTableServiceDescription.innerHTML = `페이지 좋아요(HQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "facebook2") {
    $("#facebookOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#facebookOrderInput").text("");
        $("#facebookOrderPriceInput").val(
          `${($("#facebookOrderInput").val() * 120)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    facebookTableServiceNum.innerHTML = "2";
    facebookTableServiceQuality.innerHTML = "UHQ";
    facebookTableServicePrice.innerHTML = "120,000원";
    facebookTableServiceName.innerHTML =
      "Facebook Page Likes (SOUTH|EAST ASIA) Advertiser Access";
    facebookTableServiceDescription.innerHTML = `페이지 좋아요(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "facebook3") {
    $("#facebookOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#facebookOrderInput").text("");
        $("#facebookOrderPriceInput").val(
          `${($("#facebookOrderInput").val() * 4)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    facebookTableServiceNum.innerHTML = "3";
    facebookTableServiceQuality.innerHTML = "HQ";
    facebookTableServicePrice.innerHTML = "4,000원";
    facebookTableServiceName.innerHTML =
      "Facebook Super Instant Real Hearts/Love";
    facebookTableServiceDescription.innerHTML = `포스트 좋아요(HQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "facebook4") {
    $("#facebookOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#facebookOrderInput").text("");
        $("#facebookOrderPriceInput").val(
          `${($("#facebookOrderInput").val() * 7)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    facebookTableServiceNum.innerHTML = "4";
    facebookTableServiceQuality.innerHTML = "UHQ";
    facebookTableServicePrice.innerHTML = "7,000원";
    facebookTableServiceName.innerHTML =
      "FP6 Facebook - Posts likes (50/100) [R30] [5k/day]";
    facebookTableServiceDescription.innerHTML = `포스트 좋아요(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "facebook5") {
    $("#facebookOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#facebookOrderInput").text("");
        $("#facebookOrderPriceInput").val(
          `${($("#facebookOrderInput").val() * 5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    facebookTableServiceNum.innerHTML = "5";
    facebookTableServiceQuality.innerHTML = "UHQ";
    facebookTableServicePrice.innerHTML = "5,000원";
    facebookTableServiceName.innerHTML =
      "F5 Facebook Page Likes (100/100k) [500-1k/day] R30";
    facebookTableServiceDescription.innerHTML = `팬페이지 좋아요(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "facebook6") {
    $("#facebookOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#facebookOrderInput").text("");
        $("#facebookOrderPriceInput").val(
          `${($("#facebookOrderInput").val() * 7)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    facebookTableServiceNum.innerHTML = "6";
    facebookTableServiceQuality.innerHTML = "UHQ";
    facebookTableServicePrice.innerHTML = "7,000원";
    facebookTableServiceName.innerHTML =
      "Facebook Video Views {6 minute} (500/1M) [100k-200k/day]";
    facebookTableServiceDescription.innerHTML = `비디오 조회수(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }

  facebookOrderBtn.addEventListener("click", function () {
    facebookTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    facebookTableServiceDescription.innerText = ` 종목 : Facebook
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${facebookOrderInput.value}개
    가격 : ${facebookOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(facebookTableServiceDescription);
  });
}
function twitterOrderFunc(str) {
  if (str.value == "twitter1") {
    $("#twitterOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#twitterOrderInput").text("");
        $("#twitterOrderPriceInput").val(
          `${($("#twitterOrderInput").val() * 5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    twitterTableServiceNum.innerHTML = "1";
    twitterTableServiceQuality.innerHTML = "HQ";
    twitterTableServicePrice.innerHTML = "5,000원";
    twitterTableServiceName.innerHTML =
      "S4 Twitter Followers (20/1k) {1k/day} [R30]";
    twitterTableServiceDescription.innerHTML = `팔로워(HQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "twitter2") {
    $("#twitterOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#twitterOrderInput").text("");
        $("#twitterOrderPriceInput").val(
          `${($("#twitterOrderInput").val() * 30)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    twitterTableServiceNum.innerHTML = "2";
    twitterTableServiceQuality.innerHTML = "UHQ";
    twitterTableServicePrice.innerHTML = "30,000원";
    twitterTableServiceName.innerHTML =
      "S5 Twitter Followers (100/5k) {5k/day}";
    twitterTableServiceDescription.innerHTML = `팔로워(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    30일 리필 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "twitter3") {
    $("#twitterOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#twitterOrderInput").text("");
        $("#twitterOrderPriceInput").val(
          `${($("#twitterOrderInput").val() * 15)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    twitterTableServiceNum.innerHTML = "3";
    twitterTableServiceQuality.innerHTML = "HQ";
    twitterTableServicePrice.innerHTML = "15,000원";
    twitterTableServiceName.innerHTML = "S9 Twitter Retweets (100/5k) {5k/day}";
    twitterTableServiceDescription.innerHTML = `리트윗(HQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    30일 리필 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "twitter4") {
    $("#twitterOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#twitterOrderInput").text("");
        $("#twitterOrderPriceInput").val(
          `${($("#twitterOrderInput").val() * 20)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    twitterTableServiceNum.innerHTML = "4";
    twitterTableServiceQuality.innerHTML = "UHQ";
    twitterTableServicePrice.innerHTML = "20,000원";
    twitterTableServiceName.innerHTML = "S7 Twitter Retweets (100/600)";
    twitterTableServiceDescription.innerHTML = `리트윗(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    30일 리필 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "twitter5") {
    $("#twitterOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#twitterOrderInput").text("");
        $("#twitterOrderPriceInput").val(
          `${($("#twitterOrderInput").val() * 30)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    twitterTableServiceNum.innerHTML = "5";
    twitterTableServiceQuality.innerHTML = "UHQ";
    twitterTableServicePrice.innerHTML = "30,000원";
    twitterTableServiceName.innerHTML =
      "S5 Twitter Likes [REAL] (100/600) [0-1h Start] NR";
    twitterTableServiceDescription.innerHTML = `포스터 좋아요(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    30일 리필 </br>
    현재까지 드롭현상 없음`;
  }

  twitterOrderBtn.addEventListener("click", function () {
    twitterTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    twitterTableServiceDescription.innerText = ` 종목 : Twitter
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${twitterOrderInput.value}개
    가격 : ${twitterOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(twitterTableServiceDescription);
  });
}
function pinterestOrderFunc(str) {
  if (str.value == "pinterest1") {
    $("#pinterestOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#pinterestOrderInput").text("");
        $("#pinterestOrderPriceInput").val(
          `${($("#pinterestOrderInput").val() * 4)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    pinterestTableServiceNum.innerHTML = "1";
    pinterestTableServiceQuality.innerHTML = "UHQ";
    pinterestTableServicePrice.innerHTML = "4,000원";
    pinterestTableServiceName.innerHTML = "Pinterest Likes";
    pinterestTableServiceDescription.innerHTML = `좋아요(UHQ)</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 1000+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }

  pinterestOrderBtn.addEventListener("click", function () {
    pinterestTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    pinterestTableServiceDescription.innerText = ` 종목 : Pinterest
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${pinterestOrderInput.value}개
    가격 : ${pinterestOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(pinterestTableServiceDescription);
  });
}
function telegramOrderFunc(str) {
  if (str.value == "telegram1") {
    $("#telegramOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#telegramOrderInput").text("");
        $("#telegramOrderPriceInput").val(
          `${($("#telegramOrderInput").val() * 3)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    telegramTableServiceNum.innerHTML = "1";
    telegramTableServiceQuality.innerHTML = "UHQ";
    telegramTableServicePrice.innerHTML = "3,000원";
    telegramTableServiceName.innerHTML =
      "TM2 Telegram Channel/Group Members (1000/5K) NR [0-6h 200+/d]";
    telegramTableServiceDescription.innerHTML = `텔레그램 채널/그룹 멤버수</br>
    작업시간 : 24시간 이내</br>
    작업속도 : 500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }
  if (str.value == "telegram2") {
    $("#telegramOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#telegramOrderInput").text("");
        $("#telegramOrderPriceInput").val(
          `${($("#telegramOrderInput").val() * 2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    telegramTableServiceNum.innerHTML = "2";
    telegramTableServiceQuality.innerHTML = "UHQ";
    telegramTableServicePrice.innerHTML = "2,000원";
    telegramTableServiceName.innerHTML =
      "Telegram Post Views [500K] [Last 20] [200K/Day] [Super Fast]";
    telegramTableServiceDescription.innerHTML = `텔레그램 포스트 조회수</br>
    작업시간 : 즉시</br>
    작업속도 : 2500+명 / 일</br>
    리필없음 </br>
    현재까지 드롭현상 없음`;
  }

  telegramOrderBtn.addEventListener("click", function () {
    telegramTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    telegramTableServiceDescription.innerText = ` 종목 : Telegram
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${telegramOrderInput.value}개
    가격 : ${telegramOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(telegramTableServiceDescription);
  });
}
function webOrderFunc(str) {
  if (str.value == "web1") {
    $("#webOrderContainer").on(
      "propertychange change keyup paste input",
      function () {
        $("#webOrderInput").text("");
        $("#webOrderPriceInput").val(
          `${($("#webOrderInput").val() * 1)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
        );
      }
    );
    webTableServiceNum.innerHTML = "1";
    webTableServiceQuality.innerHTML = "UHQ";
    webTableServicePrice.innerHTML = "1000원";
    webTableServiceName.innerHTML = "korea Traffic from website";
    webTableServiceDescription.innerHTML = `웹사이트 트래픽</br>
    작업시간 : 즉시</br>
    작업속도 : 10,000+ / 일</br>
    리필없음 </br>`;
  }

  webOrderBtn.addEventListener("click", function () {
    webTableServiceName.innerText = `아래 멘트를 KakaoTalk 또는 DM 으로 전송해주세요
      결제 : 카카오톡 송금 or 무통장입금
      카카오톡 : snsmarketer2022 / 인스타 : snsmarketer2022
      농협 : 351-1212-4301-33 이경해`;
    webTableServiceDescription.innerText = ` 종목 : Web
    상품명 :${str.options[str.selectedIndex].text}
    수량 : ${webOrderInput.value}개
    가격 : ${webOrderPriceInput.value}
    타겟 : ${instarID.value}`;
    copy(webTableServiceDescription);
  });
}

const instarURL = `https://www.instagram.com/`;

function moveTarget() {
  if (instarID.value.indexOf(instarURL) != -1) {
    window.open(`${instarID.value}`);
  } else {
    window.open(`https://www.instagram.com/${instarID.value}`);
  }
}

function copy(a) {
  const textarea = document.createElement("textarea"); // teatarea 요소 생성
  document.body.appendChild(textarea); // body에 요소 추가
  textarea.value = a.innerText; // value에 복사할 내용 넣기
  textarea.select(); // textarea 요소 선택
  document.execCommand("copy"); // copy 실행
  document.body.removeChild(textarea); // textarea 요소 삭제
  $(".confirmation").hide().html(`복사완료`).fadeIn(0).delay(800).fadeOut(0);
}
