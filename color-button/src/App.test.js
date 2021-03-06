import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

test('button has correct initial color', () => {
  // // render creates a virtual DOM for whatever jsx you give it for argument, ie App component
  render(<App />);
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  // click button
  fireEvent.click(colorButton)
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})
  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render (<App/>)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  expect(colorButton).toBeDisabled()

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked() 
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})

  // check that when checkbox checked, button is disabled
  fireEvent.click(checkbox,)
  expect(colorButton).toBeDisabled()
  // check that when checkbox not checked, button is enabled
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('Clicked disabled button has gray background and reverts to red', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  
  fireEvent.click(checkbox)
  // expect the background color to be gray
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})
  
  fireEvent.click(checkbox)
  // expect the background to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
})

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  fireEvent.click(colorButton)

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})
  
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'Midnight Blue'})
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
});