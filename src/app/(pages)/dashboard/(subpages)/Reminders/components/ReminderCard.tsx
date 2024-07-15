import { ReminderModel } from '@/app/shared/models/ReminderModel'
import React from 'react'

type ReminderCardProps = {
  reminder: ReminderModel
}
const ReminderCard: React.FC<ReminderCardProps> = ({
  reminder
}) => {
  return (
    <div className='bg-white p-4 rounded shadow-md mb-4'>
      <h2 className='font-bold'>{reminder.title}</h2>
      <p>{reminder.note}</p>
      <p>{reminder.date_time}</p>
    </div>
  )
}

export default ReminderCard
