import axios from 'axios';

// Point this at your backend or a form provider (e.g. Formspree, EmailJS)
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' },
});

export async function submitContactForm(payload) {
  // Wire this into Contact.jsx's handleSubmit once your backend endpoint is ready:
  // const { data } = await api.post('/contact', payload);
  // return data;
  return Promise.resolve({ ok: true, payload });
}
