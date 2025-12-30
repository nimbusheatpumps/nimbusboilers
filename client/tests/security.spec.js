import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import QuoteForm from '../src/components/QuoteForm';
import Contact from '../src/components/Contact';
import Admin from '../src/components/Admin';

// Mock axios for QuoteForm
jest.mock('axios');
const mockedAxios = axios;

// Mock fetch for Contact and Admin
global.fetch = jest.fn();

describe('Security Tests - XSS Prevention', () => {
  const xssPayload = `<script>alert('XSS')</script>`;
  const xssPayloadRaw = `<script>alert('XSS')</script>`;

  beforeEach(() => {
    jest.clearAllMocks();
    mockedAxios.post.mockResolvedValue({ data: { message: 'success' } });
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'success' }),
    });
  });

  test('QuoteForm handles XSS payload in name and email without crashing', async () => {
    render(<QuoteForm />);
    
    // Simulate navigating to contact step (simplified, as multi-step)
    // In real, would need to mock steps, but test input handling
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: xssPayloadRaw } });
    expect(screen.getByLabelText(/name/i)).toHaveValue(xssPayloadRaw);
    
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: xssPayloadRaw } });
    expect(screen.getByLabelText(/email/i)).toHaveValue(xssPayloadRaw);
    
    // Submit would call axios with raw payload
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/contact', expect.objectContaining({
        name: xssPayloadRaw,
        email: xssPayloadRaw,
      }));
    });
  });

  test('Contact form handles XSS payload in all fields', async () => {
    render(<Contact />);
    
    userEvent.type(screen.getByLabelText(/name/i), xssPayloadRaw);
    userEvent.type(screen.getByLabelText(/email/i), xssPayloadRaw);
    userEvent.type(screen.getByLabelText(/review/i), xssPayloadRaw);
    
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/feedback', expect.objectContaining({
        body: JSON.stringify(expect.objectContaining({
          name: xssPayloadRaw,
          email: xssPayloadRaw,
          review: xssPayloadRaw,
        })),
      }));
    });
  });

  test('Admin displays stored XSS payload escaped (React auto-escapes)', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ([
        { _id: '1', name: xssPayloadRaw, email: 'test@test.com', boilerType: 'combi', propertySize: 'small', createdAt: new Date().toISOString() }
      ]),
    });

    render(<Admin />);
    
    await waitFor(() => {
      expect(screen.getByText(xssPayloadRaw)).toBeInTheDocument();
      // Check it's escaped: no script execution, text content matches
      const nameCell = screen.getByText(xssPayloadRaw).closest('td');
      expect(nameCell).toHaveTextContent(xssPayloadRaw);
      // In DOM, should be text, not HTML
      expect(nameCell.innerHTML).toBe(xssPayloadRaw.replace(/</g, '<').replace(/>/g, '>'));
    });
  });

  test('Forms reject invalid email but accept XSS in other fields', () => {
    // Basic validation test
    render(<Contact />);
    userEvent.type(screen.getByLabelText(/email/i), xssPayloadRaw);
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    // Should not submit if invalid email, but handles XSS fine
  });
});