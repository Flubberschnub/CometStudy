import React from 'react';
/*import background from "./CometStudy_map.png";*/
import './App.css';



function App() {
	return (
    <div>
      <img src={require('./CometStudy_map.png')} alt="not available"></img>

      <div>
        <div class="overlay" onClick={off}>
          <div id="text">Overlay Text</div>
        </div>
        <button onClick={on}>Turn on overlay effect</button>
      </div>

      
    </div>
  
  )
}

function on() {
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

function off() {
  document.getElementsByClassName("overlay")[0].style.display = "none";
}


export default App
