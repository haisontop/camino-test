import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const AddPatient = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-between pb-36 px-20'>
        <div></div>
        <div>
            <h1 className='text-4xl flex gap-4 -ml-10'><span className='text-primary-600 flex items-center text-sm'>1<AiOutlineArrowRight /></span>Full name</h1>
            <p className='text-xl text-gray-400 mt-7 italic'>Description (optional)</p>
            <input type="text" placeholder='Type your answer here....' className='w-full py-3 text-2xl border-b-2 border-primary-100 bg-primary-50 outline-none mt-10' />
        </div>
        <div className='text-center'>
            <h2 className='text-[17px] font-bold mb-10'>Link to Typeform</h2>
            <div className='underline text-[17px] font-bold w-3/4 mx-auto'><a href="https://admin.typeform.com/form/B7eSSt9l/create?block=d4fa6f15-bd7c-42e4-9852-4c06d884749b">https://admin.typeform.com/form/B7eSSt9l/create?block=d4fa6f15-bd7c-42e4-9852-4c06d884749b</a></div>
        </div>
    </div>
  )
}

export default AddPatient