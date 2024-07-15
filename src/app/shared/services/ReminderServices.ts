import axiosInstance from './AxiosInstance';
import { ReminderModel } from '../models/ReminderModel';

export async function postReminder(reminder: ReminderModel): Promise<any> {
    return await axiosInstance()
    .post('/reminder/store', reminder)
    .then((response) => {
      return response.data.data
    })
    .catch((error: any) => {
    console.log(error);
    throw error;
  });
}