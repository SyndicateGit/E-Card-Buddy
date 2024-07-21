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
    enabled: true,
  })
  if(isPending) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  const remindersSorted = data.sort((a: ReminderModel, b: ReminderModel) => {
    return new Date(a.date_time).getTime() - new Date(b.date_time).getTime()
  });

  return (
    <>
      <div className='display flex lg:flex-row lg:gap-20 flex-col self-start overflow-hidden h-full'>
        <ReminderForm refetch={refetch}/>
        <div className='lg:ml-2 h-[50%] self-start overflow-y-scroll border mt-2 w-[300px]'>
          {remindersSorted.map((reminder: ReminderModel) => (
            <ReminderCard reminder={reminder} key={reminder._id} refetch={refetch}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Reminders
