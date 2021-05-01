const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //event에 target이라는게 있는데 <button>을 계속 뜨게함.
  //console.dir로 parentNode를 찾아라!!
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  //cleanToDOs는 id가 1이 아닌 toDos를 하고싶을 때를 의미
  toDos = cleanToDos;
  saveToDos();
  //array의 filter()라는 function
  //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만가지고 새로운 array를 만듬
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
/*
localStorage에는 자바스크립트의 data를 저장할 수 없음.
=> object가 string이 되도록 만들려면 : JSON.stringfy
JSON : Javascript Object Notation
*/

let idNumbers = 1;

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = idNumbers;
  idNumbers += 1;
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
    //forEach()는 array에 담겨있는 것들을 각각에 한 번 씩 함수를 실행시켜 주는 것.
    //toDo라는 함수를 주고, forEach에서는 이 toDo라는 function을 호출할 것임.
  }
}

/* 이렇게 써도됨
//something이라는 함수를 주고, forEach에서는 이 something이라는 function을 호출할 것임.
function something(toDo){
        console.log(toDo.text); 
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something)
    }
}
*/

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

/*
1. delete one toDo => in the local storage
and save it!!! (also in HTML FILE)

*/
