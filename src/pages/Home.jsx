import React from 'react'
import RcmndMovies from '../components/RcmndMovies'
import ImageCard from '../components/ImageCard'

function Home() {
  return (
    <>
      <div className="container my-5">
        <RcmndMovies />
      </div>
      <div className="container my-5">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="Banner" width={'100%'} />
      </div>
      <div className="container my-5">
        <ImageCard/>
      </div>
    </>
  )
}

export default Home