import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState(null)
  return (
    <div className=' w-full h-screen bg-sky-700 flex justify-center items-center p-4 overflow-hidden'>
        <form method='POST' action="https://getform.io/f/8690da14-5627-4584-8822-e32cbcec8141" className=' flex flex-col max-w-[600px] w-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-200 text-gray-100'>Contact</p>
                <p className=' text-gray-300 py-4'>Please complete the form</p>
            </div>
            <input className=' p-2' type="text" placeholder='Name' name='name' />
            <input className=' my-4 p-2' type="text" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className=' text-gray-200 hover:text-gray-800 border-2 hover:border-gray-100 hover:bg-gray-200 px-4 py-3 my-8 mx-auto flex items-center  '>Get in Touch</button>
        </form>

    </div>
  )
}

export default Contact