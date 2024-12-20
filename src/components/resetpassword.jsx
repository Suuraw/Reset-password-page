import React, { useState, useEffect } from "react";
import { resetPassword } from "../api.js"; // Add the API call to handle resetting the password
import {useSearchParams} from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
 // Use navigate instead of useHistory
  const [searchParams] = useSearchParams(); // Use useSearchParams to handle URL query

  const token = searchParams.get("token"); // Get the token from the URL query

  useEffect(() => {
    if (!token) {
      setError("Invalid reset token.");
    }
  }, [token]);

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await resetPassword({ token, password });
      if (response.status === 200) {
        setSuccessMessage("Password reset successful! You can now sign in.");
        window.location.href = "https://agt-backend.onrender.com";
      } else {
        setSuccessMessage("Password reset successful! You can now sign in.");
        window.location.href = "https://agt-backend.onrender.com";
      }
    } catch (error) {
      setError("An error occurred while resetting the password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white rounded-lg p-8 w-[500px] max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>

        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        {successMessage && (
          <div className="text-green-500 text-sm mb-2">{successMessage}</div>
        )}

        <div className="mb-4">
          <input
            type="password"
            placeholder="New Password"
            className="border border-gray-300 bg-gray-50 rounded-md px-4 py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 bg-gray-50 rounded-md px-4 py-2 w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-600 text-white py-2 rounded-full"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
