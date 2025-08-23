import { useState } from "react";
import image from '../assets/images/image.png';
import logo from "../assets/images/logo.png";
import gdsc from "../assets/images/gdsc.png";
import rec_logo from "../assets/images/rec_logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp= () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        email: formData.email},{ withCredentials: true, headers: { "Content-Type": "application/json" }
    });

      console.log("OTP sent to:", formData.email);


      localStorage.setItem("signupEmail", formData.email);
      navigate("/otp");
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {setIsLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* SignUp Form */}
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

        {/* SignUp Header */}
        <h2
          className="font-bold text-[22px] text-left p-2"
          style={{ fontFamily: '"Poppins"' }}
        >
          SignUp
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
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500 bg-white"
              required
            />
          </div>


          {/* OTP Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
          <div><span>Already have an account? <a href='/' className="text-blue-400 hover:underline font-mediumc">Login now</a></span></div>
         

          
        </div>
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

export default SignUp;
