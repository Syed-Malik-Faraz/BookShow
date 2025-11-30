import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl w-64 hover:-translate-y-1 transition duration-300'>
            
            <img
                onClick={() => {
                    navigate(`/movies/${movie._id}`)
                    scrollTo(0, 0)
                }}
                src={movie.backdrop_path}
                alt=''
                className='rounded-lg h-52 w-full object-cover cursor-pointer'
            />

            <p className='font-semibold mt-3 truncate'>{movie.title}</p>

            <p className='text-sm text-gray-600 mt-2'>
                {new Date(movie.release_date).getFullYear()} • 
                {movie.genres.slice(0, 2).map(g => g.name).join(' | ')} •
                {movie.runtime} min
            </p>

            <div className='flex items-center justify-between mt-8 mb-4'>
                <button
                    onClick={() => {
                        navigate(`/movies/${movie._id}`)
                        scrollTo(0, 0)
                    }}
                    className='px-4 py-2 hover:bg-red-600 bg-red-400 rounded-3xl '>
                    Buy Tickets
                </button>

                <p className='flex items-center gap-1 text-sm pr-1'>
                    <StarIcon className='h-4 w-4 fill-red-400' />
                    {movie.vote_average.toFixed(1)}
                </p>
            </div>

        </div>
    )
}

export default MovieCard
