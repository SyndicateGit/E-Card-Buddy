export type ReminderModel = {
  _id?: string;
  title: string;
  note?: string;
  date_time: string;
  reminder_sent: boolean;
}