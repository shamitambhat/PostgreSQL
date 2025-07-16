export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to My App</h1>
        <p style={styles.subtitle}>Choose an option below to continue:</p>

        <div style={styles.buttonGroup}>
          <a href="/register" style={styles.button}> Register</a>
          <a href="/login" style={{ ...styles.button, backgroundColor: '#00c3ffff' }}> Login</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    background: 'linear-gradient(135deg, #c3ecf8, #f5d6f2)',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '3rem 2.5rem',
    borderRadius: '12px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#285fa7ff',
    color: '#fff',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background 0.3s ease',
  },
};
