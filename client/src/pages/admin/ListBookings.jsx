import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Title from '../../components/admin/Title';
import { dateFormat } from '../../libraries/DateFormat';

const ListBookings = () => {

    const currency = import.meta.env.VITE_CURRENCY;

    const [Loading, setLoading] = useState(true);

    const [bookings, setbookings] = useState([]);

    const getallBookings =()=>{
        setbookings(dummyBookingData)
        setLoading(false)
    }

    useEffect(() => {
      getallBookings()
    }, [])
    

    return !Loading ?(
    <div>

 <Title text1="List" text2="Bookings" />
            <div className='max-w-6xl mt-6 overflow-x-auto'>
                <table className='w-full rounded-md text-nowrap border-collapse overflow-hidden '>

                    <thead>

                        <tr className='bg-red-400/20 text-left text-white '>

                            <th className='p-2 font-medium pl-5 pr-12'> User Name </th>
                            <th className='p-2 font-medium pr-12'> Movie Name  </th>
                            
                            <th className='p-2 font-medium pr-12'> Show Time  </th>
                            <th className='p-2 font-medium pr-12'> Seats  </th>
                            <th className='p-2 font-medium pr-12'> Amount   </th>
                        </tr>

                    </thead>

                    <tbody className='text-sm font-light'>
                        {bookings.map((item, index) => (
                            <tr key={index} className='border-b border-gray-500/10 bg-red-400/5'>
                                <td className='p-2 min-w-44 pl-5'>
                                    {item.user.name}
                                </td>

                                <td className='p-2 '>
                                {(item.show.movie.title)}
                                </td>


                                <td className='p-2 '>
                                    {dateFormat(item.show.showDateTime)}
                                </td>

                                <td className='p-2 '>
                                    {Object.keys(item.bookedSeats).map(seat =>item.bookedSeats[seat]).join(", ")}
                                </td>

                                <td className='p-2'>
                                    {currency} {item.amount}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
           


    </div>
    </div>
  ):(
    <div>
        <h1> Loading ...</h1>
    </div>
  )
}

export default ListBookings