import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Bug Tracker heading', () => {
    render(<App />);
    const heading = screen.getByText(/Bug Tracker/i);
    expect(heading).toBeInTheDocument();
});
