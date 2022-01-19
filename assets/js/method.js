// 복사버튼을 누루면 복사하기가 실행된다

const methodKakaoBtn = document.querySelector(".사용방법카톡 button");
const methodInstarBtn = document.querySelector(".사용방법인스타 button");
const methodKakaoId = document.querySelector(".사용방법카톡 span").textContent;
const methodInstarId =
  document.querySelector(".사용방법인스타 span").textContent;

methodKakaoBtn.addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = methodKakaoId;

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("복사되었습니다.");
});

methodInstarBtn.addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = methodKakaoId;

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("복사되었습니다.");
});

$("#서비스소개Btn").click(function () {
  $(".이용방법페이지").show();
  $(".아이디확인방법").hide();
});
$("#아이디확인방법Btn").click(function () {
  $(".이용방법페이지").hide();
  $(".아이디확인방법").show();
});
