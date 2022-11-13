import React from 'react';
/*import background from "./CometStudy_map.png";*/
import './App.css';

let count = 0;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
	return (
    /*
    <div>
      <img src={require('./CometStudy_map.png')} alt="not available"></img>

      <div>
        <div class="overlay" onClick={off}>
          <div id="text">Overlay Text</div>
        </div>
        <button onClick={on}>Turn on overlay effect</button>
      </div>

      
    </div>
    */
    

    <div>

      <section class = "group-list">
      <button onClick = {createCard}>Click</button>
      <div class = "card" id = "0" onClick = {on}>
        <div class = "title">Group 0</div>
        <div class = "text">Group Details</div>
          <p>Subjects: </p>
          <p>Courses: </p>
          <p>People: </p>
        <img></img>
      </div>
      
      </section>
      <div class="overlay">
          <div id="text">Overlay Text</div>
        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    </div>
  
  )
}

function on(count) {
  document.getElementsByClassName("overlay")[0].innerText = "The data for Group " + array[count];
}

/*
function off() {
  document.getElementsByClassName("overlay")[0].style.display = "none";
}
*/

function createCard() {

  count++;
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.setAttribute("id", count);
  const id = newCard.getAttribute("id");
  newCard.addEventListener("click", () => on(id));
  
  const newText = document.createElement("div");
  newText.className = "text";
  const newTitle = document.createElement("div"); 
  newTitle.className = "title";
  newTitle.innerHTML = "Group " + count;

  const newSubject = document.createElement("p");
  newSubject.innerHTML = "Subject";
  newText.appendChild(newSubject);

  newCard.appendChild(newTitle);
  newCard.appendChild(newText);

  const currentEl = document.getElementsByClassName("group-list")[0];
  currentEl.appendChild(newCard);

  
  

  /*
  const list = document.getElementsByClassName("group-list")[0];
  list.innerHTML += '<div class = "card" onClick = {on}><div class = "title">Group1</div><div class = "text">Group Details</div><p>Subjects: </p><p>Courses: </p><p>People: </p><img></img></div>';
  */
  
    
  
}


export default App
