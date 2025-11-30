import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const MoviesShowing = () => {

    const navigate = useNavigate()

    return (
        <div className='px-6 md:px-16 lg-px-24 xl-px-40 overflow-hidden'>

            <div className='flex items-center justify-between py-10'>
                <p className='text-gray-400 font-medium text-lg'> Now Showing</p>
                <button onClick={() => {
                    navigate('/movies')
                }} className=' flex items-center gap-2 text-sm text-black'> View all
                    <ArrowRight className='hover:translate-x-0.5 w-4 h-4 ' /> </button>
                <BlurCircle right=' 50px' />

                {/* <BlurCircle  top='0' right='80px' className='text-white '/> */}
            </div>
{/* 
            <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
                {dummyShowsData.slice(0, 4).map((show) => {
                    <MovieCard key={show.id} movie={show} />
                })}

            </div> */}
            

<div className='flex flex-wrap max-sm:justify-center gap-8 mt-8 justify-center'>
  {dummyShowsData.slice(0, 7).map(show => (
    <MovieCard key={show.id} movie={show} />
  ))}
</div>



            <div className=' mt-16 flex justify-center '>

                <button onClick={() => {
                    navigate('/movies'); scrollTo(0, 0)
                }}
                    className='px-5 py-3 hover:bg-red-400 bg-red-600 rounded-3xl mb-8'> Show More</button>
            </div>

        </div>
    )
}

export default MoviesShowing