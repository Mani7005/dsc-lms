import React, { useState } from "react";
import image from "../assets/images/image.png";
import logo from "../assets/images/logo.png";
import gdsc from "../assets/images/gdsc.png";
import rec_logo from "../assets/images/rec_logo.png";
import { useNavigate } from "react-router-dom";


const Profile = () => {

  const [selectedBranch, setSelectedBranch] = useState("Select Branch");
  const [openBranch, setOpenBranch] = useState(false);
  const [selectedSem, setSelectedSem] = useState("Select Sem");
  const [openSem, setOpenSem] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    current_sem: "",
    branch: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const semOptions = ["Pool A", "Pool B", "Sem 3", "Sem 4"];
  const branchOptions = ["CSE", "IT", "ECE", "EEE"];


  const [semOpen, setSemOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Profile Form */}
      <div className="relative z-10 bg-white rounded-[20px] p-10 scale-110 w-full max-w-md mx-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <img src={rec_logo} alt="Logo" className="h-8 w-8 object-contain" />
            <span
              className="font-bold text-[26px] text-center"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              CLAMP
            </span>
          </div>
        </div>

        <h2
          className="font-bold text-[22px] text-left p-2"
          style={{ fontFamily: '"Poppins"' }}
        >
          Your Details
        </h2>

        <div className="space-y-4">
          {/* First Name */}
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 bg-white"
            required
          />

          {/* Last Name */}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 bg-white"
            required
          />

          {/* Current Sem */}
          <div className="relative inline-block text-left z-20 w-full px-4 py-3">
            {/* Dropdown button */}
            <button
              onClick={() => setOpenSem(!openSem)}
              className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg w-full text-left"
            >
              {selectedSem} ▼
            </button>

            {/* Dropdown menu */}
            {openSem && (
              <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-30">
                {semOptions.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedSem(option);
                      setFormData((prev) => ({ ...prev, current_sem: option }));
                      setOpenSem(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Branch */}
          <div className="w-full px-4 py-2 relative inline-block text-left z-10">
            {/* Dropdown button */}
            <button
              onClick={() => setOpenBranch(!openBranch)}
              className="bg-white text-black border border-gray-300 px-2 py-2 rounded-lg w-full text-left"
            >
              {selectedBranch} ▼
            </button>

            {/* Dropdown menu */}
            {openBranch && (
              <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-30">
                {branchOptions.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedBranch(option);
                      setFormData((prev) => ({ ...prev, branch: option }));
                      setOpenBranch(false);
                    }}
                    className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </div>

      {/* By GDSC */}
      <div className="absolute bottom-4 left-1/2 rounded-[200px] transform -translate-x-1/2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <img src={gdsc} alt="GDSC logo" />
      </div>
    </div>
  );
};

export default Profile;


