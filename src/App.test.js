/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


import { render } from '@testing-library/react';
import App from './App';

test('App component renders without crashing', () => {
  expect(() => render(<App />)).not.toThrow();
});
