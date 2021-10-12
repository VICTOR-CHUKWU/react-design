import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi'

const NewBooking = () => {
    return (
        <section className='new-booking'>
          <div className='d-flexy'>
          <HiArrowNarrowLeft/> 
          <h3 className='new-text'>New Booking</h3> 
          </div>
          <p className='new-paragraph'>fill in the information below to get a quote or create a new booking</p>
        </section>
    )
}

export default NewBooking
