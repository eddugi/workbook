function checkAnswer() {
  // 입력된 값 가져오기
  const question = document.getElementById("question").value;
  const choices = document.getElementById("choices").value.split(",");
  const answer = document.getElementById("answer").value;

  // 정답 체크
  const correctAnswer = choices[answer - 1];
  let message;
  if (correctAnswer) {
    message = "정답입니다!";
  } else {
    message = "오답입니다!";
  }

  // 결과 출력
  const result = document.getElementById("result");
  result.textContent = message;
}
