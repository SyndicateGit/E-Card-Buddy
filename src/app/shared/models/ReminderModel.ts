export type ReminderModel = {
  id?: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  reminder_sent: boolean;
}