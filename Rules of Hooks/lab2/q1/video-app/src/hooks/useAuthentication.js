import { useState } from 'react';

const useAuthentication = () => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Call your API or authentication service here
    // If successful:
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuthentication;

// 