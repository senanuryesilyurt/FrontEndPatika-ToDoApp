window.addEventListener('load', () => {pageLoad()})

const TASK = document.querySelector("#task");
const toDoList = document.querySelector("#list")
toDoList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

const buttonDOM = document.querySelector("#addButton");
buttonDOM.onclick = function () { validation(TASK.value) }

function pageLoad() {
  let counter = 0;
  let key

  for (let i = 1; i < localStorage.length; i++) {
    counter++;
    key = "task" + counter;

    createToDoItem(localStorage.getItem(key));
  }
}

function validation(value) {
  if (typeof(value)!=null) 
  {
    createToDoItem(value);
    saveTaskInLocalStorage(value)
    $("#liveToastSuccess").toast("show");
  } 
  else {
    $("#liveToastError").toast("show");
  }
  value = "";
}

function createToDoItem(task) {
  let item = document.createElement('li')
  item.innerHTML = `${task}`
  toDoList.append(item)
  createCloseButton()
 // clickCloseButton()
 
}

function saveTaskInLocalStorage(task) {
  let key,counter = 0;

  counter = localStorage.getItem("counter");
  counter++;
  key = "task" + counter;
  localStorage.setItem(key, task);
  localStorage.setItem("counter", counter);
}

function createCloseButton() {
  let list = document.getElementsByTagName('LI')
  let span = document.createElement('SPAN');
  let txt = document.createTextNode("\u00D7");

  for(let i=0; i<list.length; i++){
    span.id="closeButtonId"
    span.className = "close"; 
    span.appendChild(txt);
    list[i].appendChild(span);
    span.onclick = function () {console.log(list[i].remove())}
  }
  
}

function removeItem(key) {
  // let counter = localStorage.getItem("counter");
  // localStorage.removeItem(key.value);
  // localStorage.removeItem(key);
  // counter--;
  // localStorage.setItem("counter");
  // pageLoad();
}

function clickCloseButton(value) {
  console.log(value)
  let closeButton = document.querySelector("#closeButtonId");
  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () { removeItem() }
  }
}

