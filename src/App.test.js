import { render, screen , fireEvent} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';

describe('test for the header', () => {

  test('header appears in component with correct test', () => {
  render(<App/>)
  let headerElement = screen.getByRole("heading")
  expect(headerElement.textContent).toBe("Testing Playground")
})

})

describe("test for the button" , () => {
  test("button changes color when clicked", () => {
  render(<App/>)
  let colorBtn = screen.getByRole("button")

  // userEvent.click(colorBtn)   user eveent doesnt work
  fireEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({backgroundColor:"blue"})
  expect(colorBtn.textContent).toBe("Change Button color to green")
})
})

describe('test for the checkbox', () => {
  test("checkbox disable button when first clicked and enables on the second click", () => {
    render(<App/>)
    let buttonEl = screen.getByRole('button')
    let checkboxEl = screen.getByRole("checkbox")

    fireEvent.click(checkboxEl)
    expect(buttonEl).toBeDisabled()

    fireEvent.click(checkboxEl)
    expect(buttonEl).toBeEnabled()
  })
})


describe("test for paragraph",() => {
  test('paragraph text should reflect button state' , () => {
    render(<App/>)
    let paragraphEl = screen.getByRole('paragraph')
    let checkboxEl = screen.getByRole("checkbox")

    expect(paragraphEl.textContent).toBe("Button is enabled")

    fireEvent.click(checkboxEl)
    expect(paragraphEl.textContent).toBe("Button is disabled")
  })
})




