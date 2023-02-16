// alert(json);
// console.log(json);

let music_quiz_data = {
  id: 1,
  type: "단답형",
  category: "music",
  quizTitle:
    "지식재산권 거래 플랫폼 아이피샵이 K-디아스포라 세계연대와 솔루션 공급을 위한 협약을 체결했다",
  quizView: [
    {
      quizImg: "",
      viewFirst: "첫번째 문제입니다",
      viewSecond: "두번째 문제입니다",
      viewThird: "세번째 문제입니다",
      viewFourth: "네번째 문제입니다",
      viewFifth: "다섯번째 문제입니다",
    },
  ],
  enable: 1,
  num: 200,
  publiskUser: "hyoseong",
  publiskData: "3 Feb 2023",
  level: "A+",
};

var obj = { name: "ggmouse", age: "15" };

for (variable in music_quiz_data) {
  console.log("key: " + variable + ", value: " + music_quiz_data[variable]);
}

var req = new XMLHttpRequest();

// 비동기 방식으로 Request를 오픈한다
req.open("GET", "/data/json/test.json", true);
// Request를 전송한다
req.send();

req.onreadystatechange = function () {
  // 서버 응답 완료 && 정상 응답
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status == 200) {
      console.log(req.responseText);

      // Deserializing (String → Object)
      responseObject = JSON.parse(req.responseText);

      // JSON → HTML String
      var newContent = "";
      newContent += '<div id="tours">';
      newContent += "<h1>Guided Tours</h1>";
      newContent += "<ul>";
      for (var i = 0; i < responseObject.tours.length; i++) {
        newContent +=
          '<li class="' + responseObject.tours[i].region + ' tour">';
        newContent += "<h2>" + responseObject.tours[i].location + "</h2>";
        newContent +=
          '<span class="details">' +
          responseObject.tours[i].details +
          "</span>";
        newContent += '<button class="book">Book Now</button>';
        newContent += "</li>";
      }
      newContent += "</ul></div>";

      document.getElementById("content").innerHTML = newContent;

      // document.getElementById('content').insertAdjacentHTML('beforeend', newContent);
    } else {
      console.log("[" + req.status + "]: " + req.statusText);
    }
  }
};
