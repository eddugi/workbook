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
