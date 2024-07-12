'useClient';
import React, { FormEvent } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from "react-hook-form"

interface FieldValues {
  title: string
  note?: string
  dateTime: string
}

const ReminderForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
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
