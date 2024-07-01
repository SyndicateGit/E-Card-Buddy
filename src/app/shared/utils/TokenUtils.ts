export function getToken() {
  const token = localStorage.getItem('ECardBuddy jwt');
  if(!token) throw new Error('No token found');
  return token;
}
