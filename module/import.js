import { Add as importAdd  } from './export.js';
//as 를 통해서 외부에서 동일한 함수가 있으면 바꿔줄수 있다.
//import.js 에서 함수 사용 하도록 import
function init(){
    const addResult = importAdd(4,5);
    //외부에서 불러온 함수결과 값 addResult에 저장
    console.log(addResult);
}
init();