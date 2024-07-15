import { getToken, removeToken } from '../utils/Token';
import axiosInstance from './AxiosInstance';

export async function login(credentials: any): Promise<any> {
    return await axiosInstance()
    .post('/auth/login', credentials)
    .then((response) => {
      localStorage.setItem('ECardBuddy jwt', response.data.data.accessToken);
    })
    .catch((error: any) => {
      console.log(error.response.data.error);
      throw error;
    });
}

export function logout(): void {
  removeToken();
}

export async function verifyToken(token: string): Promise<any> {
  return await axiosInstance()
  .get('/auth/verifyToken', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data.data.userId;
    })
    .catch((error: any) => {
      console.log(error);
      throw error;
    });
}

export async function register(credentials: any): Promise<any> {
  return await axiosInstance()
  .post('/auth/register', credentials)
  .then((response) => {
    localStorage.setItem('ECardBuddy jwt', response.data.data.accessToken);
  })
  .catch ((error: any) => {
    console.log(error.response.data.error);
    throw error;
  });
}
