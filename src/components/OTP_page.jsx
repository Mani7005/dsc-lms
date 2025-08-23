import React, { useState, useRef } from "react";
import image from "../assets/images/image.png";
import logo from "../assets/images/logo.png";
import gdsc from "../assets/images/gdsc.png";
import rec_logo from "../assets/images/rec_logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

const OTP_page = () => {
  const [otp, setOtp] = useState(
    ["","","","","",""]);
  const inputsRef = useRef([]);

  const handleInputChange = (value , index) => {
    if(/^[0-9]?$/.test(value)){
        const newOtp = [...otp];
        newOtp[index]= value;
        setOtp(newOtp);
        if(value && index < 5){
            inputsRef.current[index+1].focus();
    }
  }

 
  };
  const handleKeyDown = (e,index) => {
    if(e.key ==="Backspace" && !otp[index] && index>0){
        inputsRef.current[index-1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/verify-account", { email, otp });
      if (res.data.success) {
        alert("OTP verified! You can continue signup."); 
        navigator("/Profile");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
    }
  };
  

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* OTP Form */}
      <div className="relative z-10 bg-white rounded-[20px] p-10 scale-110 w-full max-w-md mx-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img src={rec_logo} alt="Logo" className="h-8 w-8 object-contain" />
            <span
              className=" font-bold text-[26px] text-center"
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              CLAMP
            </span>
          </div>
        </div>

        {/* OTP Header */}
        <h2
          className="font-bold text-[22px] text-left p-2"
          style={{ fontFamily: '"Poppins"' }}
        >
          Enter OTP
        </h2>

        {/* OTP inputs*/}
        <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="flex justify-center space-x-4">
                {otp.map((digit, index)=>(
                    <input 
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e)=> handleInputChange(e.target.value, index)}
                    onKeyDown={(e)=>handleKeyDown(e,index)}
                    ref={(e1) => (inputsRef.current[index]=e1)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500" />
                ))}
            </div>
        


          {/* OTP Button */}
          <button
          onClick={handleVerifyOtp}
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            
          >
            Next
          </button>
          </form>

          
        </div>


      {/* By GDSC */}
      <div        
      className="absolute bottom-4 left-1/2 rounded-[200px] transform -translate-x-1/2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
"
      >
        <img src={gdsc} alt="GDSC logo" />
      </div>
      </div>

  );
};


export default OTP_page;
