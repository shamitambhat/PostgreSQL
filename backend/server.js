const express = require('express');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST'],
  credentials: true
}));



// PostgreSQL config
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'shamita',
  port: 5432,
});

// Create table once (run only once, or manually in pgAdmin)
/*
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
*/

// Register API
app.post('/register', async (req, res) => {
  const { name, age, username, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO login (name, age, username, password) VALUES ($1, $2, $3 , $4)',
      [name,age, username, hashed]
    );

    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(400).json({ error: 'Email already used or error occurred' });
  }
});

// Login API
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM login WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) return res.status(400).json({ error: 'Invalid email' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Wrong password' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});



app.listen(3000, () => console.log('Server running on http://localhost:3000'));

