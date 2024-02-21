import React from 'react'
import { Card, Figure } from 'react-bootstrap'

function ImageCard() {
  return (
    <>
      <h4 className='fw-bolder'>The Best of Live Events</h4>
      <div className='container mb-4'>
        <Figure>
          <Figure.Image
            className='rounded-4 me-4'
            width={200}
            height={200}
            alt="300x300"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png"
          />
        </Figure>
        <Figure>
          <Figure.Image
            className='rounded-4 me-4'
            width={200}
            height={200}
            alt="300x300"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png"
          />
        </Figure>
        <Figure>
          <Figure.Image
            className='rounded-4'
            width={200}
            height={200}
            alt="300x300"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
          />
        </Figure>
      </div>
      <h4 className='fw-bolder'>Trending Searches Right Now</h4>
      <div className="container d-flex flex-wrap py-2">
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Manjummel Boys</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Premalu</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Bramayugam</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Malaikottai Vaaliban</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Demon Slayer: Kimetsu No Yaiba - To The Hashira Training</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Premam (Malayalam)</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Anweshippin Kandethum</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Lover</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Dune: Part Two</h6>
          <p>Movies</p>
        </Card>
        <Card body className='me-3 mb-3 shadow-sm'>
          <h6 className='fw-bold text-primary'>Abraham Ozler</h6>
          <p>Movies</p>
        </Card>
      </div>
    </>
  )
}

export default ImageCard