import React, { useEffect, useState } from 'react'
import { dummyDateTimeData, dummyShowsData } from '../../assets/assets';
import Title from '../../components/admin/Title';
import { dateFormat } from '../../libraries/DateFormat';

const ListShows = () => {

    const currency = import.meta.env.VITE_CURRENCY;

    const [Loading, setLoading] = useState(true);

    const [shows, setshows] = useState([]);

    const getallShows = async () => {

        try {
            setshows([{
                movie: dummyShowsData[0],
                showDateTime: "2025-06-30T02-:30:00.000Z",
                showPrice: 59,
                occupiedSeats: {
                    A1: "user1",
                    B1: "user2",
                    C1: "user3"
                }
            }]);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getallShows()

    }, [])


    return !Loading ? (
        <div>
            <Title text1="List" text2="Shows" />
            <div className='max-w-6xl mt-6 overflow-x-auto'>
                <table className='w-full rounded-md text-nowrap border-collapse overflow-hidden '>

                    <thead>

                        <tr className='bg-red-400/20 text-left text-white '>

                            <th className='p-2 font-medium pl-5 pr-12'> Movie Name </th>
                            <th className='p-2 font-medium pr-12'> Show Time </th>
                            <th className='p-2 font-medium pr-12'> Total Bookings  </th>
                            <th className='p-2 font-medium pr-12'> Earnings  </th>
                        </tr>

                    </thead>

                    <tbody className='text-sm font-light'>
                        {shows.map((show, index) => (
                            <tr key={index} className='border-b border-gray-500/10 bg-red-400/5'>
                                <td className='p-2 min-w-44 pl-5'>
                                    {show.movie.title}
                                </td>

                                <td className='p-2 '>
                                    {dateFormat(show.showDateTime)}
                                </td>

                                <td className='p-2 '>
                                    {Object.keys(show.occupiedSeats).length }
                                </td>

                                <td className='p-2'>
                                    {currency} {Object.keys(show.occupiedSeats).length* show.showPrice}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

        </div>
    ) : (
        <div>
            <h1>Loading ...</h1>
        </div>
    )
}

export default ListShows