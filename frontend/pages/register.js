import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', age: '', username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div style={{
      display: 'flex',
      padding: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        minWidth: '300px',
        width: '100%',
        maxWidth: '450px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}> Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              marginTop: '1rem'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
          >
            Register
          </button>
        </form>
        {message && (
          <p style={{
            marginTop: '1rem',
            color: message.includes('registered') ? '#007e33' : '#cc0000',
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

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem'
};
