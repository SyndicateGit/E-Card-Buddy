import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReminderForm = () => {
  return (
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>Add a Reminder</h2>
        <p>Schedule Email reminders of special ocassions so you don&apos;t forget</p>
        <TextField id="outlined-basic" label="Reminder Title" variant="outlined" required/>
        <TextField
            id="outlined-multiline-static"
            label="Reminder Note"
            multiline
            rows={4}
        />
        <input
          type="datetime-local"
          id="date"
          name="date"
          required
          className="w-full rounded border px-3 py-2"
        />
        <Button variant="contained">Submit</Button>
      </div>
    </Box>
  )
}

export default ReminderForm
