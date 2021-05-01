/*
querySelector = 찾은 요소의 첫번째 값만.
querySelctorAll = 찾은 요소의 모든 값.

local storage = 정보를 나의 유저 컴퓨터에 저장하는 방법.
inspector application local storage에 저장되어있음.
restore javascript info
localStorage.setItem("kelly",true)
then you check storage
you can find key : kelly , value : true;
localStorage.getItem("kelly") = true
*/

/*
handleSubmit이 콜백함수입니다. addEventListener는 'submit'이라는 event type에 handleSubmit이라는 콜백함수를 등록한겁니다!
*/

const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();
    //event.preventDefault - 이벤트가 실행되는것을 막음.
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN); 
  form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    //she is not
  }else {
    paintGreeting(currentUser);
    //she is
  }
}

function init() {
  loadName();
}

init();