import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from '../SummaryForm'

test("initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {name: "I agree to Terms and Conditions"});
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {name: 'Confirm order'});
  expect(confirmButton).toBeDisabled();
});

test("first click checkbox enables button, second click disables", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {name: "I agree to Terms and Conditions"})
  const confirmButton = screen.getByRole('button', {name: 'Confirm order'});

  fireEvent.click(checkbox)
  expect(confirmButton).toBeEnabled()

  fireEvent.click(checkbox)
  expect(confirmButton).toBeDisabled()
})
