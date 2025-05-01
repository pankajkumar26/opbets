export const authenticate = async () => {
  const response = await fetch('https://opbets.onrender.com/api/auth/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const login = async (email, password) => {
  const response = await fetch('https://opbets.onrender.com/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return await response.json();
};

// export const demoLogin = async () => {
//   const response = await fetch('https://opbets.onrender.com/api/auth/demo-login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return await response.json();
// };

export const logout = async () => {
  const response = await fetch('https://opbets.onrender.com/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await response.json();
};

export const signUp = async (username, email, password) => {
  debugger;
  const csrfToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN=')) // Look for 'XSRF-TOKEN'
    ?.split('=')[1]; // Extract the token value

  if (!csrfToken) {
    console.error('CSRF token not found in cookies');
  }
  const response = await fetch('https://opbets.onrender.com/api/auth/signup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      // 'csrf_token': csrfToken, // Include the CSRF token
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  return await response.json();
};
