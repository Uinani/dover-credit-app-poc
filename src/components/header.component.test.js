import React from 'react';
import { render } from '@testing-library/react';
import Header from './header.component';

test('', () => {
  const { getByText } = render(<Header/>);
  const headerElement = getByText(/Credit Application POC/i);
  expect(headerElement).toBeInTheDocument();
});
