import { render } from '@testing-library/react';
import App from './App';

test('App component renders without crashing', () => {
  expect(() => render(<App />)).not.toThrow();
});
