const tokenKey = 'ECardBuddy jwt';

export function getToken() {
  const token = localStorage.getItem(tokenKey);
  if(!token){
    return null;
  }
  return token;
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
}