import { useState } from "react";
import { useTheme } from "../context/ThemeContext"; // Add this import
import image from '../assets/images/image.png';
import logo from "../assets/images/logo.png";
import gdsc from "../assets/images/gdsc.png";
import Light_mode from "../assets/images/Light mode.png";
import Dark_mode from "../assets/images/Dark mode.png"; // Add dark version
//import gdsc_dark from "../assets/images/gdsc_dark.png"; // Add dark version if needed
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isDarkMode } = useTheme(); // Add theme hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email) {
      setError("Email is required!");
      return;
    }

    try {
      setIsLoading(true);
      await axios.post("http://localhost:3000/api/auth/sendOtp", {
        email: formData.email
      }, { 
        withCredentials: true, 
        headers: { "Content-Type": "application/json" }
      });

      console.log("OTP sent to:", formData.email);

      localStorage.setItem("signupEmail", formData.email);
      navigate("/otp");
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`h-screen overflow-hidden flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* SignUp Form */}
      <div className="relative z-10 bg-white dark:bg-zinc-900 rounded-[20px] p-10 scale-110 w-full max-w-md mx-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            {/* Theme-aware logo */}
            <img 
              src={isDarkMode ? Dark_mode : Light_mode} 
              alt="Logo" 
              className="h-8 w-8 object-contain" 
            />
            <span
              className="font-bold text-[26px] text-center text-gray-900 dark:text-white"
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              CLAMP
            </span>
          </div>
        </div>

        {/* SignUp Header */}
        <h2
          className="font-bold text-[22px] text-left p-2 text-gray-900 dark:text-white"
          style={{ fontFamily: '"Poppins"' }}
        >
          SignUp
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded">
            {error}
          </div>
        )}

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
              className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-zinc-400 focus:border-transparent placeholder-gray-500 dark:placeholder-zinc-400 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* OTP Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-black dark:bg-zinc-700 text-white py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-zinc-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                Sending OTP..
              </div>
            ) : (
              "Send OTP"
            )}
          </button>
          
          <div>
            <span className="text-gray-600 dark:text-zinc-300">
              Already have an account? 
              <a href='/' className="text-blue-400 dark:text-blue-300 hover:underline font-medium ml-1">
                Login now
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* By GDSC */}
      <div className="absolute bottom-4 left-1/2 rounded-[200px] transform -translate-x-1/2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Theme-aware GDSC logo */}
        <img 
          src={isDarkMode ? (gdsc_dark || gdsc) : gdsc} 
          alt="GDSC logo" 
        />
      </div>
    </div>
  );
};

export default SignUp;
