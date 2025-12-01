import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';

function RcmndMovies() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className="m-auto" style={{ width: '100%' }}>
                <div className='d-flex justify-content-between'>
                    <h4 className='fw-bolder'>Recommended Movies</h4>
                    <Button variant="link" style={{ textDecoration: 'none', fontSize: '15px' }}>See All</Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Slider {...settings}>
                        {movies.map((movie, index) => (
                            <div key={index} className='text-black rounded-4' style={{ height: '520px' }}>
                                <div className='d-flex rounded-4'>
                                    <img src={movie.imageUrl} alt="Movie Image" height={'350px'} width={'450px'} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h6 className='fw-bold pt-2'>{movie.title}</h6>
                                    <p style={{ fontSize: '15px' }}>{movie.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
const movies = [
    {
        title: 'Bramayugam',
        description: 'Horror/Thriller',
        imageUrl: 'https://static.moviecrow.com/gallery/20240216/226218-Bra.jpg',
    },
    {
        title: 'Premalu',
        description: 'Comedy/Romantic',
        imageUrl: 'https://static.moviecrow.com/gallery/20240213/226119-p29.jpg',
    },
    {
        title: 'Anweshippin Kandethum',
        description: 'Crime/Drama/Thriller',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTVhN2VmNTgtMjQ0ZC00OTc1LWE2ZGItMjFkYTUzMzcyMTJkXkEyXkFqcGc@._V1_FMjpg_UX958_.jpg',
    },
    {
        title: 'Thundu',
        description: 'Comedy/Drama',
        imageUrl: 'https://static.moviecrow.com/gallery/20240202/225504-thundu.jpeg',
    },
    {
        title: 'Abraham Ozler',
        description: 'Crime/Drama/Thriller',
        imageUrl: 'https://static.moviecrow.com/gallery/20240111/224464-Abr.jpeg',
    },
    {
        title: 'Siren',
        description: 'Action/Drama',
        imageUrl: 'https://static.moviecrow.com/gallery/20240123/224877-siren.jpeg',
    },
    {
        title: 'Madame Web',
        description: 'Action/Adventure/Sci-Fi',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BODViOTZiOTQtOTc4ZC00ZjUxLWEzMjItY2ExMmNlNDliNjE4XkEyXkFqcGc@._V1_FMjpg_UY2075_.jpg',
    },
    {
        title: 'Fighter',
        description: 'Action/Thriller',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYmJiYzZhOTktNGIzNy00YjljLWI3ZDgtZGU2YWMzNGQ1YjQ5XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg',
    },
    {
        title: 'Land of Bad',
        description: 'Action/Thriller',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWI2YjMwMGEtZDJlZC00NGVkLTk2OTktMjhjNTZiNTIxOTg3XkEyXkFqcGc@._V1_FMjpg_UY12076_.jpg',
    },
    {
        title: 'Teri Baaton Mein Aisa Uljha Jiya',
        description: 'Comedy/Romantic /Sci-Fi',
        imageUrl: 'https://static.moviecrow.com/gallery/20240118/224797-teri.jpeg',
    },
]

export default RcmndMovies