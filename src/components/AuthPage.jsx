import React, { useState } from "react";
import image from "../assets/images/image.png";
import logo from "../assets/images/logo.png";
import gdsc from "../assets/images/gdsc.png";
//import rec_logo from "../assets/images/rec_logo.png";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Dark_mode from "../assets/images/Dark mode.png"; // Add dark version
import Light_mode from "../assets/images/Light mode.png";

async function sendVerifyOtp() {
  try {
    const res = await api.post("/auth/send-verify-otp")
    console.log(res.data.message);
  }catch(err){
    console.error(err.response?.data || err.message);
  }
}
async function verifyAccount(otp) {
  try {
    const res = await api.post("/auth/verify-account", { otp });
    console.log(res.data.message); // "Account verified successfully"
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}


const AuthPage = () => {
  const { isDarkMode } = useTheme(); // Get isDarkMode from theme context
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendOtp = async () => {
    try{
      setIsLoading(true);
      await api.post("/auth/send-verify-otp" , {email: formData.email});
      alert("OTP sent");
    } catch(err){
      console.error(err);
      alert("failer to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await api.post("/auth/send-verify-otp", formData)
      alert(res.data.message);
      console.log("token: ", res.data.token);
    } catch(err){
      console.error(err);
      alert("invalid OTP");
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Login Form */}
      <div className="relative z-10 bg-white rounded-[20px] p-10 scale-110 w-full max-w-md mx-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img 
              src={isDarkMode ? Dark_mode : Light_mode} 
              alt="Logo" 
              className="h-8 w-8 object-contain" 
            />
            <span
              className="font-bold text-[26px] text-center text-black"
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              QUYL
            </span>
          </div>
        </div>

        {/* Login Header */}
        <h2
          className="font-bold text-[22px] text-left p-2 text-black"
          style={{ fontFamily: '"Poppins' }}
        >
          Login
        </h2>

        {/* Login Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500 bg-white text-black"
              required
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              Verify
            </button>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 bg-white text-black"
              required
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                Logging in...
              </div>
            ) : (
              "Log in"
            )}
          </button>
          <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Link 
            to="/signup" 
            className="text-[#4285F4] font-medium hover:underline"
          >
            Sign up now
          </Link>
        </div>


          
        </div></div>
    

      {/* By GDSC */}
      <div
        className="absolute bottom-4 left-1/2 rounded-[200px] transform -translate-x-1/2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
"
      >
        <img src={gdsc} alt="GDSC logo" />
      </div>
    </div>
    
  )
  
};

export default AuthPage;
