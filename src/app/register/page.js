'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        setError(true);
        setCreatingUser(false);
        setUserCreated(false);
        return;
      }
      setCreatingUser(false);
      setUserCreated(true);
    } catch (error) {
      setCreatingUser(false);
      setUserCreated(false);
      setError(true);
    }
  };

  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
      {userCreated && (
        <div className='my-4 text-center text-gray-500'>
          User created successfully. Please{' '}
          <Link
            className='underline underline-offset-2 text-primary'
            href={'/login'}>
            login
          </Link>
          .
        </div>
      )}
      {error && (
        <div className='my-4 text-center text-red-500'>
          Failed to create user. Please try again.
        </div>
      )}
      <form
        className='block max-w-xs mx-auto'
        onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='Your name'
          value={name}
          disabled={creatingUser}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type='submit'
          disabled={creatingUser}>
          {creatingUser ? 'Creating user...' : 'Register'}
        </button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center'>
          <Image
            src={'/google.png'}
            alt={'Login with google'}
            width={24}
            height={24}></Image>
          Login with Google
        </button>
        <div className='my-4 text-center text-gray-500'>
          Exsiting Account?{' '}
          <Link
            className='underline underline-offset-2 text-primary'
            href={'/login'}>
            Login here
          </Link>
        </div>
      </form>
    </section>
  );
}
