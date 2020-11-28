import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

import '@testing-library/jest-dom/extend-expect';

test('full app rendering/navigating', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  await waitFor(() => screen.getAllByRole('textbox'));
  // * Checking to see if starting page is Sign Up
  expect(screen.getByLabelText('First Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  expect(screen.getByLabelText('Password')).toBeInTheDocument();
});

test('landing on a bad page', async () => {
  render(
    <MemoryRouter initialEntries={['/users/2']}>
      <App />
    </MemoryRouter>
  );
  await waitFor(() => screen.getByRole('heading'));
  expect(screen.getByText(/There's nothing here!/i)).toBeInTheDocument();
});
