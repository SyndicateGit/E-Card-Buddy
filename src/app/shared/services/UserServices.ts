import { getToken } from '../utils/Token';
import axiosInstance from './AxiosInstance';

export async function getCurrentUser(): Promise<any> {
  return await axiosInstance()
  .get('/user/getCurrentUser')
  .then((response) => {
    return response.data.data.user;
  })
  .catch ((error: any)=>{
    console.log(error);
    throw error;
  });
}
