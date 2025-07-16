import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setMessage("All fields are required");
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message || data.error);
    } catch (err) {
      console.error('Login failed:', err);
      setMessage('Could not connect to server');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        minWidth: '300px',
        width: '100%',
        maxWidth: '400px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>🔐 Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={form.username}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '1rem',
              }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '1rem',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0059c1'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
          >
            Login
          </button>
        </form>
        {message && (
          <p style={{
            marginTop: '1rem',
            color: message.includes('successful') ? '#007e33' : '#cc0000',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
