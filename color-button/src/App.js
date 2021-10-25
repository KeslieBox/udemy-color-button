import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed' 
  // const checkboxStatus = checkbox === false ? true : false

  return (
    <div className="App">
      <button 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={(e) => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
      Change to {replaceCamelWithSpaces(newButtonColor)}
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
