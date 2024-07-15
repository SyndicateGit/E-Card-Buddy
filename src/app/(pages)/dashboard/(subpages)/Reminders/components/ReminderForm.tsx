'useClient';
import React, { FormEvent } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from "react-hook-form"
import { ReminderModel } from '@/app/shared/models/ReminderModel';
import { postReminder } from '@/app/shared/services/ReminderServices';
import { generateMessage } from '@/app/shared/utils/Notifications';
interface FieldValues {
  title: string
  note?: string
  dateTime: string
}

const ReminderForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [loading, setLoading] = React.useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const reminder: ReminderModel = {
      title: data.title,
      note: data.note,
      date_time: data.dateTime,
      reminder_sent: false
    }
    setLoading(true);
    await postReminder(reminder).then((response)=>{
      console.log(response);
      generateMessage('Reminder added successfully', 'success');
    })
    .catch((error) => {
      generateMessage(error, 'error');
    }).finally(()=>{
      console.log('Reminder added successfully');
      setLoading(false);
    });
  };
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='font-bold'>Add a Reminder</h2>
      <p>Schedule Email reminders of special ocassions so you don&apos;t forget</p>
      <TextField 
        {...register('title')}
        id="outlined-basic" 
        label="Reminder Title" 
        variant="outlined" 
        required
        />
      <TextField
          id="outlined-multiline-static"
          {...register('note')}
          label="Reminder Note"
          multiline
          rows={4}
      />
      <input
        type="datetime-local"
        id="dateTime"
        {...register('dateTime')}
        required
        className="w-full rounded border px-3 py-2"
      />
      <Button variant="contained" type='submit'>Submit</Button>
    </form>
  )
}

export default ReminderForm
