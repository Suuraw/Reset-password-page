export const requestPasswordReset = async (userData) => {
    try {
     console.log("Try block")
      const response = await fetch('http://localhost:3000/api/forgetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response.json();
    } catch (error) {
      throw new Error('Error in password reset request');
    }
  };
  
  export const resetPassword = async (resetData) => {
    try {
      const response = await fetch('https://agt-backend.onrender.com/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetData),
      });
      return response.json();
    } catch (error) {
      throw new Error('Error in resetting password');
    }
  };
  