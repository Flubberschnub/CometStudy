/*import { Console } from 'console';*/
import {useLayoutEffect, useState} from 'react';
import { render } from '@testing-library/react';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server'
import ReactDOM from 'react-dom/client';
import Apptwo from './Sidebar';
/*import background from "./CometStudy_map.png";*/
import './App.css';

let count = 0;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let groupNameArr = ["GroupName1", "GroupName2", "GroupName3", "GroupName4", "GroupName5", "GroupName6", "GroupName7", "GroupName8", "GroupName9", "GroupName10",
  "GroupName11", "GroupName12", "GroupName13", "GroupName14", "GroupName15", "GroupName16", "GroupName17", "GroupName18", "GroupName19", "GroupName20"];
let groupSubjectArr = ["Computer Science", "Computer Engineering", "Biology", "Computer Science", "Computer Science", "Chemistry", "Computer Science",
"Computer Science","Computer Science","Computer Science","Computer Science","Computer Science","Computer Science","Computer Science","Computer Science",
"Computer Science","Computer Science","Computer Science","Computer Science","Computer Science"];

let dataArr = [
  {
    id: 0,
    groupName: "study sesh",
    subject: "CS2337.003",
    location: "ECSW 2.301"
  },
  {
    id: 1,
    groupName: "lacker hackers",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  },
  {
    id: 2,
    groupName: "gamergroup",
    subject: "CS4337.HN1",
    location: "ECSS 2.305"
  },
  {

    id: 3,
    groupName: "fun times",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  },
  {

    id: 4,
    groupName: "hacker snackers",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  },
  {

    id: 5,
    groupName: "comp sci group",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  },
  {

    id: 6,
    groupName: "crammers",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  },
  {

    id: 7,
    groupName: "exam prep",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  },
  {

    id: 8,
    groupName: "learning time",
    subject: "CS4337.HN1",
    location: "ECSW 2.301"
  }
]

var filteredArr = dataArr;

class App extends React.Component {

  state = {
    mssg: ""
  };

  handleButton = () => {
    filteredArr = dataArr.filter(function (el){
      return el.subject === "CS4337.HN1";
    });
    for(var i = 0; i < 20; i++){

      const element = document.getElementById("groupCard");
      element.remove();
    }
    const domNode = document.getElementById("clearbutton");
    domNode.append({createAll});
    
    
    this.setState({mssg:" "});
    
  };

  render() {
    
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
      
  
      <div onLoad = {createAll}>
  
        <div class = "group-list">
          <button id = "clearbutton" onClick = {this.handleButton}>Click</button>
          {/*<div class = "card" id = "0" onClick = {on}>
            <div class = "title">Group 0</div>
            <div class = "text">Group Details</div>
              <p>Subjects: </p>
              <p>Courses: </p>
              <p>People: </p>
            <img></img>
    </div>*/}
          {createAll}
        
        </div>
  
        <div class="overlay">
            <div id="text">Group Name</div>
            <div id="overlay-subject">Subject</div>
            <div id="overlay-location">Location</div>
        </div>
  
          <div>{this.state.mssg}</div>
          <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      </div>
    
    )
    
  }
}


function filterArr(){
  filteredArr = dataArr.filter(function (el){
    return el.subject === "CS2337.003";
  });
  this.setState({mssg: "yo"});
}

function on(text) {
  document.getElementsByClassName("overlay")[0].innerText = "The data for Group " + text;
}

/*
function off() {
  document.getElementsByClassName("overlay")[0].style.display = "none";
}
*/
function handleClick(e){
  document.getElementsByClassName("overlay")[0].innerText = `The data for Group ${e.groupName}:\n
  ${e.subject}\n
  ${e.location}`;
  if(e.groupName == "hacker snackers"){
    alert('thats us!');
  }
}

var createAll = filteredArr.map((item) =>  {

  return (
    <div class = "card" key = {item.groupName} id = "groupCard" onClick = {() => handleClick(item)}>
          <div class = "title">{item.groupName}</div>
          <div class = "text">Group Details</div>
            <p>Subjects: {item.subject}</p>
            <p>Location: {item.location}</p>
          <img></img>
        </div>
  )
})

function createCard(props) {

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
  newTitle.innerHTML = props.name;

  //const newTitle = props => React.createElement("div", null, props.text); 

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
