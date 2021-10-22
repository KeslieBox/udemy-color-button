import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red' 
  // const checkboxStatus = checkbox === false ? true : false

  return (
    <div className="App">
      <button 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={(e) => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
      Change to {newButtonColor}
      </button>
      <input 
        type='checkbox'
        id='disable-button-checkbox' 
        defaultChecked={disabled}
        // aria_checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
