// frontend/src/components/Auth/Login.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<LoginForm>();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      // Implement login logic here (e.g., API call for authentication)
      console.log('Login data:', data);
      // If successful, redirect or show a success message
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
      setLoginError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <label>Email:</label>
        <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} />
        {errors.email && <span>{errors.email.message}</span>}

        {/* Password */}
        <label>Password:</label>
        <input type="password" {...register('password', { required: 'Password is required' })} />
        {errors.password && <span>{errors.password.message}</span>}

        {/* Login Error */}
        {loginError && <p>{loginError}</p>}

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
