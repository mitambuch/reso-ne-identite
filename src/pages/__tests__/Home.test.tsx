import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import Home from '../Home';

afterEach(cleanup);

beforeEach(() => {
  sessionStorage.clear();
});

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
}

/** Type the correct unlock code via the visual numpad buttons. */
async function unlockPresentation() {
  for (const digit of '201314') {
    fireEvent.click(screen.getByRole('button', { name: digit }));
  }
  // WHY: onUnlock is deferred via queueMicrotask to avoid setState-during-render
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
}

describe('Home', () => {
  it('renders without crashing', () => {
    expect(() => renderHome()).not.toThrow();
  });

  it('shows the lock screen by default', () => {
    renderHome();
    expect(screen.getByText(/entrez le code/i)).toBeInTheDocument();
  });

  it('unlocks with the correct code', async () => {
    renderHome();
    await unlockPresentation();
    await waitFor(() => {
      expect(screen.getByText(/document confidentiel/i)).toBeInTheDocument();
    });
  });

  it('renders the presentation header after unlock', async () => {
    renderHome();
    await unlockPresentation();
    await waitFor(() => {
      const logos = screen.getAllByText('RÉSO.NE');
      expect(logos.length).toBeGreaterThan(0);
    });
  });

  it('renders the navigation panel after unlock', async () => {
    renderHome();
    await unlockPresentation();
    await waitFor(() => {
      expect(screen.getByText('Sections')).toBeInTheDocument();
    });
  });

  it('stays unlocked via sessionStorage', () => {
    sessionStorage.setItem('presentation-unlocked', '1');
    renderHome();
    // WHY: No need to enter code — sessionStorage persists the unlock state within the tab
    expect(screen.getByText(/document confidentiel/i)).toBeInTheDocument();
  });
});
