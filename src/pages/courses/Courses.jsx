import React from 'react'
import SimpleNavbar from '../../components/navbar/SimpleNavbar'
import MediaCard from '../../components/card/MediaCard'
import GridTable from '../../components/grid/GridTable'
import CardSlider from '../../components/CardSlider'


const Courses = () => {
  return (
    <div>
      <SimpleNavbar />
      <div className="container">
        <h2 className='py-7 text-4xl font-light '>Web Development Courses</h2>
        <div className='mb-5'>
          <GridTable />
        </div>
        <div className='my-6'>
          <CardSlider />
        </div>
      </div>
    </div>
  )
}

export default Courses