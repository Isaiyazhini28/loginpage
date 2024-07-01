import { Button } from "@/components/ui/button";
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import logo1 from '../assets/logo1.png';
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import loginimg from '../assets/loginimg.jpg';
import { useState } from "react";
  function ForgetPass() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const emailSchema = z.string().email('Invalid email format.');
    const handleResetClick = () => {
      try {
        
        emailSchema.parse(email);
       
        navigate("/Otp");
      } 
      catch (validationError) {
        if (validationError instanceof z.ZodError){
        setError(validationError.errors[0].message);}
      }
    };
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex">
      <Card className="w-[380px] h-[410px] justify-center content-center">
        <CardHeader>
          <CardTitle>
          <div className="flex items-center justify-center ">
          <img src={logo1} className="w-10 h-13 mb-2" />
          </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 items-start space-y-2 text-purple-700">
            
            <Input id="email" type="email" placeholder="Registered email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleResetClick} className="w-full">
            Reset password
          </Button>
        </CardFooter>
        <CardFooter className='flex content-center justify-center'>
          <Link to="/Helpcenter" className="flex justify-end items-end bg-transparent text-blue-600">Can't reset your password</Link>
        </CardFooter>
        <div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-purple-400"/>
    <span className="absolute px-3 font-normal text-purple-700 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-purple-900">or</span>
</div>
        <CardFooter className='flex content-center justify-center'>
          <Link to="/Register" className="flex justify-end items-end bg-transparent text-blue-600 text-bold">Create a new account</Link>
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
      </style></div></div>
    )
  }
  export default ForgetPass;