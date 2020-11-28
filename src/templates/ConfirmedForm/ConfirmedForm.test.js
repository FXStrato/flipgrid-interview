import { render, screen } from '@testing-library/react';
import ConfirmedForm from './ConfirmedForm';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

test('renders basic elements', () => {
  const history = createMemoryHistory()
  const route = '/confirmation'
  history.push(route, {
    firstname: 'Larry',
    email: 'larry@cucumber.com'
  })
  render(
    <Router history={history}>
      <ConfirmedForm />
    </Router>
  );
  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders error view if no location.state', () => {
  const history = createMemoryHistory()
  const route = '/confirmation'
  history.push(route, {})
  render(
    <Router history={history}>
      <ConfirmedForm />
    </Router>
  );
  expect(screen.getByText('Error')).toBeInTheDocument();
  expect(
    screen.getByText('Oops! Looks like there was a small problem.')
  ).toBeInTheDocument();
});
