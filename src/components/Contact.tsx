import React from 'react'
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in touch</h2>
                <p className='text-white text-[18px] pt-2'>
                    Drop me line,give me a call,or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center'>
                <LuMail size={30} /> foziajan540@mail.com
                </div>
            
            <div className='flex gap-3 items-center'>
            <BsTelephone size={30} /> {315} 7884093
             </div>
           </div>
           <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='name' />
           </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='email' />
                </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="msg">Message</label>
                <textarea 
                className=" bg-transparent border border-accent"
                id='msg' rows={8}>
                </textarea>
              </div>
              <button className='bg-amber-600 p-2 px-6'>send</button>
           </div>
        </div>
    </div>
  )
}

export default Contact