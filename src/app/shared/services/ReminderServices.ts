import axiosInstance from './AxiosInstance';
import { getToken } from '../utils/TokenUtils';
import { ReminderModel } from '../models/ReminderModel';

export async function postReminder(reminder: ReminderModel): Promise<any> {
  try{
    const response = await axiosInstance().post('/reminder/store', reminder);
    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}