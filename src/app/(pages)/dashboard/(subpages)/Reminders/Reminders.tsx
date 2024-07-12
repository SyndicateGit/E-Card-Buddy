import React from 'react'
import ReminderForm from './components/ReminderForm'

const Reminders = () => {
  return (
    <>
      <div className='display flex w-full h-full'>
        <ReminderForm/>
        <div className='ml-20 flex-1'>
          Reminders
        </div>
      </div>
    </>
  )
}

export default Reminders
