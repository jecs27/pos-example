export const login = async (user: string, password: string) => { 
  const response = await fetch('http://localhost:3027/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: user, password }),
  });

  const data = await response.json();
  return data;
}