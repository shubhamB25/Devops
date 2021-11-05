import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import Signup from './Pages/Signup'

//test('Test login', () => {
 // render(<Signup />);
  //const linkElement = screen.getByText(/Login Form/i);
  //expect(linkElement).toBeInTheDocument();
//});

test('Signup Test', () => {
  render(<Signup />);
  const linkElement = screen.getAllByAltText('Hero');
  expect(linkElement[0]).toBeVisible();
  //expect(linkElement).toBeInTheDocument();
});

/*
test('Remember me', () => {
  render(<App />);
  const linkElement= screen.getByText(/Remember ME/i)
  expect(linkElement).toBeInTheDocument();
});
*/
