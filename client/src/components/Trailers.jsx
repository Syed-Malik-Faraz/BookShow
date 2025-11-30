import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const Trailers = () => {

  const [currentTrailer, setcurrentTrailer] = useState(dummyTrailers[0])

  return (
    <>
      <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 z-20'>
        
        <p className='text-gray-600 font-medium text-xl mx-auto max-w-[960px]'>
          Trailers
        </p>

        <div className='relative mt-6'>
          
          <BlurCircle top="-50px" left="50%" />
{/* 
          <div className="relative mx-auto max-w-[960px] w-full pb-[56.25%] h-0">
            <ReactPlayer
  url={currentTrailer.videoUrl.replace("watch?v=", "embed/")}  
  controls={true}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
            />
          </div> */}

<div className="relative mx-auto max-w-[960px] w-full aspect-video">
  <ReactPlayer
    url={
      currentTrailer.videoUrl
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/")
    }
    controls
    width="100%"
    height="100%"
    className="absolute top-0 left-0"
  />
</div>


<div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
  {dummyTrailers.map((trailer) => (
    <div
      key={trailer.image}
      className='relative hover:-translate-y-1 transition duration-300 cursor-pointer'
      onClick={() => setcurrentTrailer(trailer)}
    >
      <img
        src={trailer.image}
        alt="trailer"
        className='rounded-lg w-full h-full object-cover brightness-75'
      />

      <PlayCircleIcon
        strokeWidth={1.6}
        className='absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12 transform -translate-x-1/2 -translate-y-1/2'
      />
    </div>
  ))}
</div>


        </div>

      </div>
    </>
  )
}

export default Trailers
