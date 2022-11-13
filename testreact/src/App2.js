import React from 'react';
import {useLayoutEffect} from 'react';
import { useState } from 'react';
import { render } from '@testing-library/react';
import {renderToStaticMarkup} from 'react-dom/server'
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
      </div>
    
    )
  }

export default App;
