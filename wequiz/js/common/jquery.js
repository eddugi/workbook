$("h1").text("테스트");
$('<p id="test">My <em>new</em> text</p>').appendTo("body");

$("div.foo").on("click", function () {
  $(this).slideUp();
});

$(function () {
  $("button").on("click", function () {
    var price = $("<p>From $399.99</p>");
    $(this).closest(".vacation").append(price);
    $(this).remove();
  });
});

// XMLHttpRequest 객체의 생성
var req = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
req.open("GET", "data/json/musicquiz.json", true);
// Request를 전송한다
req.send();

req.onreadystatechange = function (e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (req.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if (req.status == 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
