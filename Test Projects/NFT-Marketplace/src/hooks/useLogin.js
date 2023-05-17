import { useEffect } from 'react';

const useLogin = () => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      // Check if MetaMask is installed and available
      if (typeof window.ethereum !== 'undefined') {
        // Check if the user is logged in
        if (!window.ethereum.selectedAddress) {
          try {
            // Prompt the user to connect
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // User successfully logged in, perform necessary actions
            console.log('User successfully logged in with address:', window.ethereum.selectedAddress);
          } catch (error) {
            console.log('Failed to connect with MetaMask:', error.message);
            // Handle error or display appropriate message to the user
          }
        } else {
          // User is already logged in
          console.log('User is already logged in with address:', window.ethereum.selectedAddress);
        }
      } else {
        // MetaMask is not installed
        console.log('MetaMask is not installed');
        // Display a message or provide instructions on how to install MetaMask
      }
    };

    checkLoginStatus();
  }, []);

  return null; // You can return a meaningful value or component if needed
};

export default useLogin;
