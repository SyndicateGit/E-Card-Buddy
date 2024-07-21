import { ReminderModel } from '@/app/shared/models/ReminderModel'
import React from 'react'
import { Trash } from '@phosphor-icons/react/dist/ssr'
import { deleteReminder } from '@/app/shared/services/ReminderServices'
import { generateMessage } from '@/app/shared/utils/Notifications'
type ReminderCardProps = {
  reminder: ReminderModel
  refetch: () => void;
}
const ReminderCard: React.FC<ReminderCardProps> = ({
  reminder,
  refetch
}) => {
  const handleDeleteReminder = () => {
    if(!reminder._id) return;
    deleteReminder(reminder._id).then(()=>{
        generateMessage('Reminder deleted successfully', 'success');
    })
    .catch((error) => {
      generateMessage(error, 'error');
    }).finally(()=>{
      refetch();
    });
  }
  return (
    <>
      <div className='bg-teal-100 p-4 rounded shadow-md mb-4 w-full rounded-2xl relative group'>
        <Trash 
            className='cursor-pointer invisible group-hover:visible absolute top-2 right-2'
            size={24} 
            onClick={handleDeleteReminder}
          />
        <h2 className='font-bold'>{reminder.title}</h2>
        <p>{reminder.note}</p>
        <p>{reminder.date_time}</p>
      </div>
    </>
    
  )
}

export default ReminderCard
