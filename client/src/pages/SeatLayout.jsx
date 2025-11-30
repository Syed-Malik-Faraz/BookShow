import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import BlurCircle from '../components/BlurCircle';
import toast from 'react-hot-toast';

const SeatLayout = () => {

    const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];

    const { id, date } = useParams();

    const [show, setShow] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState([]);   // FIXED (was null)
    const [selectedTime, setSelectedTime] = useState(null);

    const navigate = useNavigate();

    // Get show by ID
    const getShow = () => {
        const found = dummyShowsData.find(show => show._id === id);

        if (found) {
            setShow({
                movie: found,
                dateTime: dummyDateTimeData
            });
        }
    };

    const handleSeatClick = (seatId) => {
        if (!selectedTime) {
            return toast("Please select time first");
        }

        // FIXED: selectedSeats → selectedSeat
        if (!selectedSeat.includes(seatId) && selectedSeat.length >= 5) {
            return toast("You can only select 5 seats");
        }

        setSelectedSeat((prev) =>
            prev.includes(seatId)
                ? prev.filter((seat) => seat !== seatId)
                : [...prev, seatId]
        );
    };

    const renderSeats = (row, count = 9) => {
        return (
            <div key={row} className="flex gap-2 mt-2">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {Array.from({ length: count }, (_, i) => {
                        const seatId = `${row}${i + 1}`;

                        return (
                            <button
                                key={seatId}
                                onClick={() => handleSeatClick(seatId)}
                                className={`h-8 w-8 rounded border border-primary/60 cursor-pointer 
                                    ${selectedSeat.includes(seatId) ? "bg-primary text-white" : ""}
                                `}
                            >
                                {seatId}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const formatTo24Hour = (isoString) => {
        const date = new Date(isoString);

        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "UTC"
        });
    };

    useEffect(() => {
        getShow();
    }, [id]);

    return show ? (
        <div className="flex flex-col md:flex-row px-6 py-28 md:px-16 lg:px-40 md:pt-48">

            {/* Available Timings */}
            <div className="w-60 bg-red-400/10 border border-gray-500 rounded-lg py-10 h-max md:sticky md:top-28">
                <p className="text-lg font-semibold px-6">Available Timings</p>

                <div className="mt-5 space-y-1">
                    {show.dateTime[date]?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedTime(item)}
                            className={`flex items-center gap-2 px-6 py-2 w-max rounded-md cursor-pointer transition 
                                ${selectedTime?.time === item.time
                                    ? "bg-red-400 text-white"
                                    : "hover:bg-red-400/20"}
                            `}
                        >
                            <ClockIcon className="w-4 h-4" />
                            <p className="text-sm">{formatTo24Hour(item.time)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seat Layout */}
            <div className="flex relative flex-1 flex-col items-center max-md:mt-16">

                <BlurCircle top='-100px' left='-100px' />
                <BlurCircle top='0px' right='0px' />

                <p className="text-2xl font-semibold mb-6"> Select Your Seat </p>
                <img src={assets.screenImage} alt='screen' />
                <p className='text-gray-400 text-sm mb-6 '> Screen Side</p>

                <div className='flex flex-col items-center mt-10 text-xs text-red-400 '>
                    <div className='grid grid-cols-2 gap-8 mb-6 md:grid-cols-1 md:gap-2 '>
                        {groupRows[0].map(row => renderSeats(row))}
                    </div>

<div className='grid grid-cols-2 gap-11 '>
  {groupRows.slice(1).map((group, idx) => (
    <div key={idx}>
      {group.map(row => renderSeats(row))}
    </div>
  ))}
</div>

</div>

<button 
onClick={()=>{
    navigate('/myBookings')
}}
className='flex items-center font-medium gap-1 mt-20 px-10 py-3  text-sm bg-red-400 hover:bg-red-600 transition rounded-full cursor-pointer active:scale-90 '>
    Proceed to Chekck Out
<ArrowRightIcon strokeWidth={3} className='h-4 w-4' />
</button>

{/* 
<div className='grid grid-cols-2 gap-11'>
{groupRows.s1ice(1).map((group, idx)) => (
<div key={idx}>
{group.map(row => renderSeats(row))}
</div>
))}
</div> */}



            </div>

        </div>
    ) : (
        <div><h1>Loading...</h1></div>
    );
};

export default SeatLayout;
