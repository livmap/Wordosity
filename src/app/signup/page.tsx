"use client"

import React from 'react';
import AuthForm from '../components/AuthForm';

function Signup() {
  const handleSignup = (email: string, password: string) => {
    console.log('Signup:', { email, password });
    // Perform signup logic, e.g., API request
  };

  return <AuthForm title="Sign Up" onSubmit={handleSignup} />;
}

export default Signup;