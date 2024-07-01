import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import loginimg from '../assets/loginimg.jpg';

const loginSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long').regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={}[\]:;'",.<>?]).*$/, 'Password must contain atleast 1 uppercase letter and 1 special character'),
});

const EMAIL_LENGTH = 20;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > EMAIL_LENGTH) {
      setEmailError('Email must not exceed 20 characters');
    } else {
      setEmail(value);
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError('');
  };

  const handleClick = () => {
    try {
      loginSchema.parse({ email, password });
      navigate("/Home");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          if (err.path[0] === 'email') {
            setEmailError(err.message);
          } else if (err.path[0] === 'password') {
            setPasswordError(err.message);
          }
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex">
        <Card className="w-[400px] h-[550px] justify-center items-center space-y-4">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-center">
                <img src={logo} className="w-12 h-13 mb-1" alt="Logo" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className="grid gap-2 items-start space-y-2 text-purple-700">
              <Label htmlFor="email" required>Email</Label>
              <Input id="email" type="email"className='text-sm' placeholder="m@gmail.com" value={email} onChange={handleEmailChange} />
              {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
            </div><br/>
            <div className="grid gap-2 items-start space-y-2 text-purple-700 ">
              <Label htmlFor="password" required>Password</Label>
              <Input id="password" type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
              {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
            </div>
            <Link to="/ForgetPass" className="w-full flex justify-end items-end underline underline-offset-4  text-sm hover:text-primary bg-transparent text-blue-600 mt-2">Forgot Password?</Link>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button className="w-full" onClick={handleClick}>Sign in</Button>
          </CardFooter>
          <CardFooter className="flex justify-center">
            <h2 className='text-sm mr-1'>Don't have an account?</h2>
            <Link to="/Register" className=" bg-transparent text-blue-600 text-sm">Sign up</Link>
          </CardFooter>
        </Card>
        <style>
          {`
            body {
              background-image: url(${loginimg});
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
              min-height: 100vh;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Login;
