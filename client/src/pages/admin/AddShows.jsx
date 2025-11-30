// import React, { useEffect, useState } from 'react'
// import { dummyShowsData } from '../../assets/assets'
// import Title from '../../components/admin/Title'
// import { CheckIcon, StarIcon } from 'lucide-react'

// const AddShows = () => {

//     const currency = import.meta.env.VITE_CURRENCY

// const [NowPlayingMovies, setNowPlayingMovies] = useState([])
// const [selectedMovie, setselectedMovie] = useState(null)
// const [dateTimeSelection, setdateTimeSelection] = useState({})
// const [dateTimeInput, setdateTimeInput] = useState("")
// const [showPrice, setshowPrice] = useState("")


// // const kConverter = (num)
// // if (num >= 1000) {
// // (num / 1000) .toFixed(1) +"k"
// // } else {
// //     num
// // }


// const kConverter = (num) => {
//   if (num >= 1000) {
//     return (num / 1000).toFixed(1) + "k";
//   } else {
//     return num;
//   }
// };


// const handleDateTimeAdd =()=>{ 
//     if(!dateTimeInput) return;
// const [date, time] = dateTimeInput.split("T")
// if(!date || ! time) return;

// setdateTimeSelection((prev) => {
// const times = prev[date] || []
// if ( ! times. includes(time)) {
// return {...prev, [date]: [...times, time] } ;
// }
//  return prev;

// })
// }

// const handleRemoveTime =(date , time )=>{
//     setdateTimeSelection((prev)=>{
//         const filteredtimes =prev[date].filter((t)=>{
//             t !== time
//         })

//         if(filteredtimes.length === 0 ){
// const{[date] : _, ...rest} = prev;
// return rest;
//         }
//         return{
//             ...prev,
//             [date]:filteredtimes,
//         };
//     });
// };



// const fetchnowPlayingMovies = ()=>{
//     setNowPlayingMovies(dummyShowsData)
// } 

// useEffect(() => {
//     fetchnowPlayingMovies()
// }, [])


//   return NowPlayingMovies.length > 0 ? (
// <>
// <div>
// <div>
// <Title text1="Add"  text2=" Shows " />

// <p className=' mt-10 text-lg font-medium'> Now Playing Movies </p>
// </div>
// <div className='overflow-x-auto pb-4 flex '>
// <div className='group flex flex-wrap gap-4 mt-4 w-max'>

// {NowPlayingMovies.map((movie)=>(
//     <div key={movie.id} className={`relative cursor-pointer opacity-40 hover:-translate-y-1 hover:opacity-100 transition duration-300 max-w-40 
//     `} onClick = {()=>{
//     setselectedMovie(movie.id)    
//     }}> 

// <div className='relative rounded-lg overflow-hidden '>
//     <img src={movie.poster_path} alt=""  className='w-full object-cover brightness-90' />
//     <div className='text-sm flex bg-black/50 items-center justify-between p-2 w-full absolute bottom-0 left-0 '>
//         <p className='flex items-center gap-2 text-gray-500'>

// <StarIcon  className='w-4 h-4 fill-red-400'/>
// {movie.vote_average.toFixed(1)}
//         </p>
// <p className=' text-gray-500'>
// {kConverter(movie.vote_count)} Votes
// </p>
//         </div>
//     </div>

// {/* {selectedMovie === movie._id && (
//     <div className='absolute top-2 right-2 flex items-center justify-center bg-red-400 h-6 w-6 rounded '>
//         <CheckIcon className='w-4 h-4  text-white 'strkeWidth={3} /> 
//         </div>
// )} */}

// <p className='font-medium truncate'> {movie.title}</p>
// <p className='text-gray-400  text-sm '>
//     {movie.release_date}
// </p>
//     </div>


// ))}

// </div>
// </div>



// {/* show price input  */}

// <div className='mt-3'>
//     <div className='block text-sm font-medium mb-2 '>
// show Price 
//     </div>
//     <div className=' inline-flex  items-center gap-2  border border-gray-500 px-3 py-2 rounded-md'>
//         <p className='text-gray-500  text-sm'> {currency}</p>
//         <input min={0} type='number ' value={showPrice} onChange={(e)=>{
// setshowPrice(e.target.value)
//         }} className='outline-none' placeholder='Enter show price'></input>

//     </div>
// </div>

// {/* date time selection  */}

// <div className='mt-6'>


// </div><div className='block text-sm font-medium mb-2 '>
// Select Date and Time  
//     </div>
//     <div className=' inline-flex  items-center gap-5  border border-gray-500 p-1 pl-3 rounded-lg '>
//         {/* <p className='text-gray-500  text-sm'> {currency}</p> */}
//         <input type='datetime-local ' value={dateTimeInput} onChange={(e)=>{
// setdateTimeInput(e.target.value)
//         }} className='rounded-md outline-none'></input>
// <button onClick={handleDateTimeAdd} className='bg-red-400/50  px-3 py-2 text-sm rounded-lg hover:bg-red-600 cursor-pointer'>
// Add Time 
// </button>

//     </div>


// </div>



// </>


// ) :(
//     <div>
//         <h1> Loading ...</h1>
//     </div>
//   )
// }

// export default AddShows


import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Title from "../../components/admin/Title";
import { CheckIcon, StarIcon, XIcon } from "lucide-react";

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  // ------------------------------
  // k Converter (votes)
  // ------------------------------
  const kConverter = (num) => {
    if (!num) return 0;
    return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;
  };

  // ------------------------------
  // Add Date + Time
  // ------------------------------
  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;

    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const existing = prev[date] || [];

      if (!existing.includes(time)) {
        return { ...prev, [date]: [...existing, time] };
      }
      return prev;
    });
  };

  // ------------------------------
  // Remove a selected time
  // ------------------------------
  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filtered = prev[date].filter((t) => t !== time);

      if (filtered.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [date]: filtered };
    });
  };

  // ------------------------------
  // Load dummy movies
  // ------------------------------
  const fetchNowPlayingMovies = () => {
    setNowPlayingMovies(dummyShowsData);
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  // UI ---------------------------------------------------------
  return nowPlayingMovies.length > 0 ? (
    < >
      <div>
        <Title text1="Add" text2="Shows" />

        <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

        <div className="overflow-x-auto pb-4 flex ">
          <div className="group flex flex-wrap gap-4 mt-4 w-max">
            {nowPlayingMovies.map((movie) => (
              <div
                key={movie.id}
                className={`relative cursor-pointer transition duration-300 max-w-40
                  ${
                    selectedMovie === movie.id
                      ? "opacity-100 -translate-y-1"
                      : "opacity-40 hover:opacity-100 hover:-translate-y-1"
                  }
                `}
                onClick={() => setSelectedMovie(movie.id)}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={movie.poster_path}
                    className="w-full object-cover brightness-90"
                  />

                  <div className="text-sm flex bg-black/50 items-center justify-between p-2 w-full absolute bottom-0 left-0">
                    <p className="flex items-center gap-2 text-gray-300">
                      <StarIcon className="w-4 h-4 fill-red-400" />
                      {movie.vote_average.toFixed(1)}
                    </p>

                    <p className="text-gray-300">
                      {kConverter(movie.vote_count)} Votes
                    </p>
                  </div>
                </div>

                {selectedMovie === movie.id && (
                  <div className="absolute top-2 right-2 flex items-center justify-center bg-red-500 h-6 w-6 rounded">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                )}

                <p className="font-medium truncate mt-1">{movie.title}</p>
                <p className="text-gray-400 text-sm">{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICE INPUT */}
        <div className="mt-6">
          <div className="block text-sm font-medium mb-2">Show Price</div>

          <div className="inline-flex items-center gap-2 border border-gray-500 px-3 py-2 rounded-md">
            <p className="text-gray-500 text-sm">{currency}</p>

            <input
              type="number"
              min={0}
              value={showPrice}
              onChange={(e) => setShowPrice(e.target.value)}
              placeholder="Enter show price"
              className="outline-none w-44 rounded-lg px-2 py-1 bg-gray-600"
            />
          </div>
        </div>

        {/* DATE TIME INPUT */}
        <div className="mt-6">
          <div className="block text-sm font-medium mb-2">
            Select Date and Time
          </div>

          <div className="inline-flex items-center gap-5 border border-gray-500 p-1 pl-3 rounded-lg">
            <input
              type="datetime-local"
              value={dateTimeInput}
              onChange={(e) => setDateTimeInput(e.target.value)}
              className=" outline-none bg-gray-600 rounded-lg px-2 py-1"
            />

            <button
              onClick={handleDateTimeAdd}
              className="bg-red-400 px-3 py-2 text-sm rounded-lg hover:bg-red-600 cursor-pointer text-white"
            >
              Add Time
            </button>
          </div>
        </div>

        {/* SELECTED DATE & TIME LIST */}
        <div className="mt-6">
          {Object.keys(dateTimeSelection).length === 0 ? (
            <p className="text-gray-500 text-sm">No time added yet.</p>
          ) : (
            Object.entries(dateTimeSelection).map(([date, times]) => (
              <div key={date} className="mb-4">
                <p className="font-medium">{date}</p>

                <div className="flex gap-3 flex-wrap mt-2">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="flex items-center gap-2  px-3 py-1 rounded"
                    >
                      <span>{time}</span>

                      <XIcon
                        className="w-4 h-4 text-red-500 cursor-pointer"
                        onClick={() => handleRemoveTime(date, time)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

<button className=" bg-red-400 cursor-pointer px-4 py-2 mt-7 rounded-lg hover:bg-red-600 transition-all">
    Add show
</button>

      </div>
    </>
  ) : (
    <div>
      <h1>Loading ...</h1>
    </div>
  );
};

export default AddShows;
