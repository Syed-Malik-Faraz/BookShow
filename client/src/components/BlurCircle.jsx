import React from 'react'

const BlurCircle = ({top='auto',left ='auto',right ='auto', bottom ='auto'}) => {
  return (
    <>
    
    <div className='absolute -z-50 h-56 w-56 rounded-full bg-red-300 aspect-square blur-3xl'
    style={{top:top , left:left , right:right , bottom:bottom}}>
    </div>
    
    </>
  
)
}

export default BlurCircle