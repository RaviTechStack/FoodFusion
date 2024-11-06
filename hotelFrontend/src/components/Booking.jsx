import React from 'react'
import { useFoodListContext } from '../Context/FoodListContext'

const Booking = () => {
  const {handelReservationData, ReservationDataSubmit} = useFoodListContext()
  return (
    <div className='w-[35%] bg-gray-50 relative py-4 -top-24 left-11 rounded-2xl shadow-xl  flex flex-col items-center justify-center'>

<div className="w-4/5  bg-white  p-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-4 font-funky">Book Your Table</h2>

  <form className="flex flex-col">
    <input type="text" name='Booking_name' onChange={handelReservationData} className="bg-white text-gray-800 border border-gray-300 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name"/>
    <input type="text" name='email' onChange={handelReservationData} className="bg-white text-gray-800 border border-gray-300 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Number"/>
    <select name='No_of_person' onChange={handelReservationData} class="bg-white text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="2 Person">2 Person</option>
        <option value="3 Person">3 Person</option>
        <option value="4 Person">4 Person</option>
        <option value="5 Person">5 Person</option>
        <option value="6 Person">6 Person</option>
        <option value="Family Table">Family Table</option>
      </select>
    <input type="date" onChange={handelReservationData} name='Date' className="bg-white text-gray-800 border border-gray-300 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Date of Birth"/>
    <select name="time" onChange={handelReservationData} class="bg-white text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 AM</option>
        <option value="13:00">01:00 PM</option>
        <option value="14:00">02:00 PM</option>
        <option value="15:00">03:00 PM</option>
        <option value="16:00">04:00 PM</option>
        <option value="17:00">05:00 PM</option>
        <option value="18:00">06:00 PM</option>
        <option value="19:00">07:00 PM</option>
        <option value="20:00">08:00 PM</option>
      </select>

    <button onClick={ReservationDataSubmit} className="bg-yellow-700 w-1/2 text-white font-bold py-4 px-2 rounded-md mt-4 hover:bg-yellow-900 transition ease-in-out duration-150">Book Now</button>
  </form>
</div>


    </div>
  )
}

export default Booking
