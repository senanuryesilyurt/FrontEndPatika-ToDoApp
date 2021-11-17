pageLoad();

let buttonDOM = document.querySelector("#liveToastBtn");
buttonDOM.onclick = function addItem(event) {
    let key,counter = 0;

    event.preventDefault();
    const TASK = document.querySelector("#task");

    counter=localStorage.getItem("counter")
    counter++;
    key = "task" + counter;
    localStorage.setItem(key, TASK.value);
    localStorage.setItem("counter",counter)
 
    if (TASK.value) 
    {
        addTask(TASK.value);
        TASK.value = "";
        alert("Listeye eklendi.");
    } 
    else 
    {
        alert("Listeye boş ekleme yapamazsınız!");
    }
};

function addTask(task) {
  
  let list = document.querySelector("#list");
  let liDOM = document.createElement("li");

  liDOM.innerHTML = `${task}`;
  list.append(liDOM);
}
// icon ekle ve icona tıklandığında ;
//local storage ve listeden seçilen elemanı kaldır ve sayacı bir azalt
function removeTask(task) {}
//seçilen elemanı işaretle 
function completedTask() {}

function pageLoad() {
    let key, counter=0;
    
    for (let i=1 ; i < localStorage.length; i++) {
        counter++
        key="task" + counter
        addTask(localStorage.getItem(key));
    }
}
