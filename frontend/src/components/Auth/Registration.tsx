// frontend/src/components/Auth/Registration.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<RegistrationForm>();
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    try {
      // Implement registration logic here (e.g., API call to register the user)
      console.log('Registration data:', data);
      // If successful, redirect or show a success message
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
      setRegistrationError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <label>Name:</label>
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <span>{errors.name.message}}

        {/* Email */}
        <label>Email:</label>
        <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} />
        {errors.email && <span>{errors.email.message}</span>}

        {/* Password */}
        <label>Password:</label>
        <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} />
        {errors.password && <span>{errors.password.message}</span>}

        {/* Registration Error */}
        {registrationError && <p>{registrationError}</p>}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
