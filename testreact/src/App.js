import React from 'react';
import {useState} from 'react';
/*import background from "./CometStudy_map.png";*/
import './App.css';
import $ from 'jquery';

let count = 0;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {

  const [returnedData, setReturnedData] = useState(['hello']);
  const [group, setGroup] = useState({groupName: '', class: '', section: '', building: '', classroom: '', endTime: ''})

  const setInput = (e) => {
    const{name, value} = e.target;
    console.log(value);
    setGroup(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const fetchData = async () => {
    console.log(group);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: group.groupName
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  }

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
  
    <div className="addGroup">
      <input 
       name = "groupName" 
       placeHolder = "groupName" 
       onChange = {setInput}></input>
      <input 
       name = "class" 
       placeHolder = "class" 
       onChange = {setInput}>
      </input>
      <input 
       name = "section"
       placeHolder = "section"
       onChange = {setInput}></input>
      <input
       name = "building" 
       placeHolder = "building" 
       onChange = {setInput}></input>
      <input
       name = "classroom" 
       placeHolder = "classroom" 
       onChange = {setInput}></input>
      <input
       name = "endTime" 
       placeHolder = "endTime" 
       onChange = {setInput}>
      </input>
      <button onClick = {() => fetchData()}>Create Group</button>
      <p>groupName: {returnedData.groupName}</p>
      <p>class: {returnedData.class}</p>
      <p>section: {returnedData.section}</p>
      <p>building: {returnedData.building}</p>
      <p>classroom: {returnedData.classroom}</p>
      <p>endTime: {returnedData.endTime}</p>
    </div>

      <section class = "group-list">
      <button onClick = {createCard}>Click</button>
      <button onClick = {initList}>Yay</button>
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


    </div>
  
  )
}

function initList(){
  alert("before");

  $.get("process.php",
      function(data)
      {
          alert(data);
      } );
  
      alert("after");
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
