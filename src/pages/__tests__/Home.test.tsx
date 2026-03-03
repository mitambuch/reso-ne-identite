import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import Home from '../Home';

afterEach(cleanup);

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
}

describe('Home', () => {
  it('renders without crashing', () => {
    expect(() => renderHome()).not.toThrow();
  });

  it('renders the presentation header with logo', () => {
    renderHome();
    const logos = screen.getAllByText('RÉSO.NE');
    expect(logos.length).toBeGreaterThan(0);
  });

  it('renders the first slide', () => {
    renderHome();
    expect(screen.getByText(/document confidentiel/i)).toBeInTheDocument();
  });

  it('renders the navigation panel', () => {
    renderHome();
    expect(screen.getByText('Sections')).toBeInTheDocument();
  });
});
