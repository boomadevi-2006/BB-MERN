// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const signupRoute = require('../auth/signup');
const loginRoute = require('../auth/login');

// Mount directly, these already have '/signup' and '/login' in their files
router.use(signupRoute);  // handles POST /signup
router.use(loginRoute);   // handles POST /login

module.exports = router;
