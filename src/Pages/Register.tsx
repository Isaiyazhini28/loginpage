import { Button } from "@/components/ui/button";
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import logo2 from '../assets/logo2.png';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import loginimg from '../assets/loginimg.jpg';
import { useNavigate } from "react-router-dom";
const registerSchema = z.object({
  email: z.string().max(20,'Email is not correct').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long.').regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\\-={}[\]:;'",.<>?]).*$/, 'Password must contain at least one uppercase letter and one special character'),
  confirmPassword: z.string(),
});

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 20) {
      setError('Email must not exceed 20 characters');
    } else {
      setEmail(value);
      setError('');
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 20) {
      setError('Password must not exceed 20 characters');
    } else {
      setPassword(value);
      setError('');
    }
  };
  const handleconfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 20) {
      setError('Password must not exceed 20 characters');
    } else {
      setConfirmPassword(value);
      setError('');
    }
  };
  const register = () => {
    try {
      registerSchema.parse({ email, password, confirmPassword });
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      navigate("/");
    } catch (validationError) {
      if (validationError instanceof z.ZodError){
      setError(validationError.errors[0].message);}
    }
  };


    
  return (
    <>  <div className="flex items-center justify-center h-screen">
    <div className="flex">
    <Card className="w-[380px] h-[490px] justify-center content-center">
      <CardHeader>
        <CardTitle>
        <div className="flex items-center justify-center ">
          <img src={logo2} className="w-11 h-11 mb-2" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 items-start space-y-2 text-purple-700">
          <Label htmlFor="email" required>Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={handleEmailChange} />
        </div>
        <br />
        <div className="grid gap-2 items-start space-y-2 text-purple-700">
          <Label htmlFor="password" required>Password</Label>
          <Input id="password" type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
        </div>
        <br />
        <div className="grid gap-2 items-start space-y-2 text-purple-700">
          <Label htmlFor="confirmPassword" required>Confirm Password</Label>
          <Input id="confirmPassword" type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleconfirmChange} />
        </div><br/>
        {error && <div className="text-red-500">{error}</div>}
      </CardContent>
      <CardFooter>

        <Button className="w-full" onClick={register}>Register</Button>
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
             overflow:hidden;
          }
        `}
      </style></div></div></>
 );
}

export default Register;
