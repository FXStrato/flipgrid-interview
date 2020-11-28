import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignUpForm from './SignUpForm';

test('renders basic elements', () => {
  render(<SignUpForm />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(screen.getByLabelText('First Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  expect(screen.getByLabelText('Password')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
test('displays error text when submitted with nothing in inputs', async () => {
  render(<SignUpForm />);
  fireEvent.click(screen.getByRole('button'));
  await waitFor(() => screen.getByRole('button'));
  expect(screen.getByText('First name required')).toBeInTheDocument();
  expect(screen.getByText('Email is required')).toBeInTheDocument();
  expect(screen.getByText('Password is required')).toBeInTheDocument();
});


