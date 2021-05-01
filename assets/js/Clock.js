const clockContainer = document.querySelector(".js-clock"),
      ClockTitle = clockContainer.querySelector("h1");

/*
const date = new date();
date.getDate() //지금 날짜
date.getHours() //지금 시간
date.getMinutes() //지금 분
date.getSeconds() //지금 초
date.getDay() //오늘 요일
*/

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  ClockTitle.innerText 
  = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds}`;
    // Ternary Operator(삼항연산자) or mini if
    // ? = ~이라면? , : = else 
}

function init(){
  getTime();
  setInterval(getTime,1000);
}
init();

/*setInterval(fn, 1000);
첫번째 인자는 함수이고 두번째는 실행할 시간 간격
반복되는 간격을 Checking 해주는 것.
milliseconds 단위로 기록됨.
*/
