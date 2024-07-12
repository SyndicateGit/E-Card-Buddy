import { getToken } from '../utils/TokenUtils';
import axiosInstance from './AxiosInstance';

export async function getCurrentUser(): Promise<any> {
  try {
    const response = await axiosInstance().get('/user/getCurrentUser');
    const user = response.data.data.user;
    return user;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
