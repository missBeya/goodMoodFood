//controllers/authController.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../Config/db'); // Import the MySQL connection

// Signup function
const signupUser = (req, res) => {
    const { username, email, password } = req.body;
  
    // Check if the email already exists
    const checkEmailSql = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailSql, [email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error checking email');
      }
  
      if (results.length > 0) {
        return res.status(400).send('Email already exists');
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      const insertUserSql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(insertUserSql, [username, email, hashedPassword], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error creating user');
        }
  
        // Generate a JWT token after successful signup
        const token = jwt.sign(
          { id: results.insertId, username },  // Payload (id and username)
          'your_jwt_secret_key',  // Secret key for JWT
          { expiresIn: '1h' }  // Token expiration time
        );
  
        res.status(201).json({ message: 'Signup successful', token });
      });
    });
  };
  
  // Login function (unchanged)
  const loginUser = (req, res) => {
    const { email, password } = req.body;
  
    // Query to check if email exists in the database
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error logging in');
      }
  
      if (results.length === 0) {
        return res.status(400).send('Email or password is incorrect');
      }
  
      const user = results[0];
  
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).send('Email or password is incorrect');
      }
  
      // Create a JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },
        'your_jwt_secret_key',  // Use a secret key for signing the token
        { expiresIn: '1h' }  // Token expiration time
      );
  
      res.json({ message: 'Login successful', token });
    });
  };
  
  module.exports = { signupUser, loginUser };