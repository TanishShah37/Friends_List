import { render, screen } from '@testing-library/react';
import App from './App';

test(`renders  Friend's List Header`, () => {
  render(<App />);
  const headElement = screen.getByText(/Friend's List/i);
  expect(headElement).toBeInTheDocument();
});

test(`renders  Friend's List Items`, () => {
  render(<App />);
  const listElement = screen.getByText(/Friend 1/i);
  expect(listElement).toBeInTheDocument();
});

test(`renders  Friend's Pagination Items`, () => {
  render(<App />);
  const prevElement = screen.getByText(/prev/i);
  const nextElement = screen.getByText(/next/i);
  expect(prevElement).toBeInTheDocument();
  expect(nextElement).toBeInTheDocument();
});
