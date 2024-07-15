'useClient';
import React from 'react'
import ReminderForm from './components/ReminderForm'
import { useQuery } from '@tanstack/react-query'
import { getReminders } from '@/app/shared/services/ReminderServices'
import ReminderCard from './components/ReminderCard';
import { ReminderModel } from '@/app/shared/models/ReminderModel';

const Reminders = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['reminders'],
    queryFn: getReminders,
    enabled: false,
  })
  if(isPending) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  const remindersSorted = data.sort((a: ReminderModel, b: ReminderModel) => {
    return new Date(a.date_time).getTime() - new Date(b.date_time).getTime()
  });

  return (
    <>
      <div className='display flex w-full h-full'>
        <ReminderForm refetch={refetch}/>
        <div className='ml-20 flex-1 h-full'>
          {remindersSorted.map((reminder: ReminderModel) => (
            <ReminderCard reminder={reminder} key={reminder.id}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Reminders
