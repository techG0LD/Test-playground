
import './App.css';
import {useState} from 'react'

function App() {
  const [btnColor,setBtnColor] = useState('green')
  const newBtnColor = btnColor === 'green' ? "blue" : 'green'
  const [inputDisabled,setInputDisabled] =useState(false)
 
  return (

    <div className="App">
      <h1>Testing Playground</h1>
      <p role="paragraph">{`Button is ${inputDisabled ? 'disabled' : 'enabled'}`}</p>
      <button onClick={() => setBtnColor(newBtnColor)} 
      style={{backgroundColor: btnColor}}
      disabled = {inputDisabled}
      >
        Change Button color to {newBtnColor}

      </button>

      <input
       type='checkbox'
        defaultChecked = {inputDisabled}
         onChange={(e) => setInputDisabled(e.target.checked)}/>
    </div>
  );
}

export default App;
