'useClient';
import React from 'react'
import ReminderForm from './components/ReminderForm'
import { useQuery } from '@tanstack/react-query'
import { getReminders } from '@/app/shared/services/ReminderServices'

const Reminders = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['reminders'],
    queryFn: getReminders
  })
  if(isPending) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  console.log(data);
  return (
    <>
      <div className='display flex w-full h-full'>
        <ReminderForm/>
        <div className='ml-20 flex-1'>
          {data.map((reminder: any) => (
            <div key={reminder._id} className='bg-white p-4 rounded shadow-md mb-4'>
              <h2 className='font-bold'>{reminder.title}</h2>
              <p>{reminder.note}</p>
              <p>{reminder.date_time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Reminders
