import React from 'react'

const Resume = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2'>
        <object data="/Resume.pdf" width="800" height="700"/>
    </div>
  )
}

export default Resume;
