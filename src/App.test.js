import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Signup from './Pages/Signup'


test('Signup Test', () => {
  render(<Signup />);
  const linkElement = screen.getAllByAltText('Hero');
  expect(linkElement[0]).toBeVisible();
});


test('Text Test', () => {
  render(<Signup />);
  const linkElement= screen.getByText('Login')
  expect(linkElement).toBeInTheDocument();
});
