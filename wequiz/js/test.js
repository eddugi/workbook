// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
// ------------------------

function spliceArray(array, deleted, plus) {
  const fromInput = Array.from(array);
  for (let i = 0; i < fromInput.length; i++) {
    fromInput[i] === deleted ? fromInput.splice(i, 1, plus) : "";
  }
  return fromInput;
}

const input = ["🍌", "🍓", "🍇", "🍓"];
console.log(spliceArray(input, "🍓", "🥝"));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
// ------------------------
function CountedValue(array, demand) {
  const formInput2 = Array.from(array);
  let count = 0;
  for (let i = 0; i < formInput2.length; i++) {
    formInput2[i] === demand ? count++ : "";
  }
  return count;
}
const input2 = ["🍌", "🥝", "🍇", "🥝"];
const demand = "🥝";
console.log(CountedValue(input2, demand));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
// ------------------------
function showingSameFruit(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    array2.indexOf(array1[i]) === -1 ? "" : result.push(array1[i]);
  }
  return result;
}
const input3_1 = ["🍌", "🥝", "🍇"];
const input3_2 = ["🍌", "🍓", "🍇", "🍓"];
console.log(showingSameFruit(input3_1, input3_2));
