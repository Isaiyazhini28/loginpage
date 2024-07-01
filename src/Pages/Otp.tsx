import React from 'react';
import { Button } from "@/components/ui/button";
import loginimg from '../assets/loginimg.jpg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function Otp() {
    const navigate = useNavigate();
    const handleOtpClick = () => {
      navigate("/Home")
    };
  return (
    <div className="flex items-center justify-center content-center h-screen ">
      <div className='flex'>
      <Card className="w-[350px] h-[350px] flex flex-col justify-center items-center">
        <CardHeader>
          <CardDescription className="text-center flex items-center justify-center text-bold">Enter your OTP below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleOtpClick}>Submit</Button>
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
      </style>
    </div>
    </div>
  );
}

export default Otp;
