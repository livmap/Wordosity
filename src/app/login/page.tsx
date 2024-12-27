"use client"

import React from 'react';
import AuthForm from '../components/AuthForm';

function Login() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password });
    // Perform login logic, e.g., API request
  };

  return <AuthForm title="Log In" onSubmit={handleLogin} />;
}

export default Login;