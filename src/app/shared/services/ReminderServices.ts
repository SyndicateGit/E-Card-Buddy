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

export async function getReminders(): Promise<any> {
  return await axiosInstance()
  .get('/reminder/getReminders')
  .then((response) => {
    return response.data.data.reminders;
  })
  .catch((error: any) => {
    console.log(error);
    throw error;
  });
}

export async function deleteReminder(id: string): Promise<any> {
  return await axiosInstance()
  .delete(`/reminder/delete/${id}`)
  .then((response) => {
    return response.data.data;
  })
  .catch((error: any) => {
    console.log(error);
    throw error;
  });
}