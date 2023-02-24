//선택자
const quizType = document.querySelector(".quiz__type"); //퀴즈종류
const quizNumber = document.querySelector(".quiz__question .number"); //퀴즈번호
const quizAsk = document.querySelector(".quiz__question .ask"); //퀴즈 질문
const quizConfirm = document.querySelector(".quiz__answer .confirm"); //정답확인버튼
const quizResult = document.querySelector(".quiz__answer .result"); // 정답 결과
const quizView = document.querySelector(" .quiz__view"); //강아지 //뷰어로 바꾸어서 정답과 오답박스를 출력한다.
const quizSelects = document.querySelector(".quiz__selects"); //객관식 보기
const quizChoice = quizSelects.querySelectorAll(".choice"); //객관식 보기 선택자를 quizSelects  집중시켜서 낭비가 없도록 합니다.
const quizSelect = document.querySelectorAll(".select"); //선택한 번호
// 요소다중선택이 필요한경우 querySelectorAll을 사용해서 한다.

//문제정보
const quizInfo = [
  {
    answerType: "웹디자인 기능사 2022년 1회",
    answerNum: "1",
    answerAsk:
      "월드 와이드 웹(WWW)서비스를 이용하기 위해 개발된 프로그램으로 인터넷에 연결된 컴퓨터를 탐색하고 원하는 정보를 읽어 들여 그 내용을 화면에 표시해 주는 클라이언트 프로그램은?",
    answerChoice: ["배너", "포털 사이트", "웹 브라우저", "홈페이지"],
    answerResult: "3",
    answerEx:
      "월드 와이드 웹(WWW)서비스를 이용하기 위해 개발된 프로그램으로 인터넷에 연결된 컴퓨터를 탐색하고 원하는 정보를 읽어 들여 그 내용을 화면에 표시해 주는 클라이언트 프로그램은 웹 브라우저 입니다.",
  },
];

//문제 출력 함수: 관리하기 쉽게 하나로 묶어서 사용한다.
function updateQuiz() {
  //문제 출력
  quizType.textContent = quizInfo[0].answerType;
  quizNumber.textContent = quizInfo[0].answerNum + ". ";
  quizAsk.textContent = quizInfo[0].answerAsk;
  quizResult.textContent = quizInfo[0].answerEx;

  //보기 출력

  for (let i = 0; i < quizSelect.length; i++) {
    quizChoice[i].textContent = quizInfo[0].answerChoice[i];
  }

  // quizChoice.forEach((el, i) => {
  //     quizChoice[i].textContent = quizInfo[0].answerChoice[i];
  // })
}
updateQuiz();

//해설 숨기기
quizResult.style.display = "none";

//정답 확인

function answerQuiz() {
  //사용자가 선택한 정답과 == 문제 정답
  //사용자가 클릭한 input --> checked라는 속성을 확인해야 한다.

  for (let i = 0; i < quizSelect.length; i++) {
    if (quizSelect[i].checked == true) {
      //quizSelect[i].checked == true 보기에 체크가 된 상태

      // 체크된 번호 == 문제번호
      if (quizSelect[i].value == quizInfo[0].answerResult) {
        alert("정답");
        quizView.classList.add("like");
      } else {
        alert("오답");
        quizView.classList.add("dislike");
        quizResult.style.display = "block";
        quizConfirm.style.display = "none";
      }
    }
  }
}
