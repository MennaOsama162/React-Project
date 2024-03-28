
import React, { useContext } from 'react'
import MoviesContext from '../../MoviesContext';

export default function Home(props) {

    let { trendingMovies, trendingTv, trendingPeople } = useContext(MoviesContext);

    let imgPrefix = 'https://image.tmdb.org/t/p/w500';

    return (

        <>

            <div className='row'>

                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <div className='brdr my-3 w-25'></div>
                        <h2 className='h4'>Trending Movies <br />
                            To Watch <br /> Right Now</h2>
                        <p className='text-muted'>trending Movies To watch</p>

                        <div className='brdr my-3'></div>
                    </div>



                </div>
                {trendingMovies ? trendingMovies.map((movie, index) => <div key={index} className="col-md-2">
                    <div className="movie">

                        <img className='w-100' src={imgPrefix + movie.poster_path} alt={movie.title} />
                        <h3 className='h6 my-2'>{movie.title}</h3>
                    </div>
                </div>) : ''}


            </div>

            <div className='row my-5'>

                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <div className='brdr my-3 w-25'></div>
                        <h2 className='h4'>Trending TV <br />
                            To Watch <br /> Right Now</h2>
                        <p className='text-muted'>trending Tv To watch</p>

                        <div className='brdr my-3'></div>
                    </div>



                </div>
                {trendingTv ? trendingTv.map((movie, index) => <div key={index} className="col-md-2">
                    <div className="movie">
                        <img className='w-100' src={imgPrefix + movie.poster_path} alt={movie.title} />
                        <h3 className='h6 my-2'>{movie.name}</h3>
                    </div>
                </div>) : ''}


            </div>


            <div className='row '>

                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <div className='brdr my-3 w-25'></div>
                        <h2 className='h4'>Trending People <br />
                            To Watch <br /> Right Now</h2>
                        <p className='text-muted'>trending Tv To watch</p>

                        <div className='brdr my-3'></div>
                    </div>



                </div>
                {trendingPeople ? trendingPeople.map((movie, index) => <div key={index} className="col-md-2">
                    <div className="movie">
                        <img className='w-100' src={imgPrefix + movie.profile_path} alt={movie.title} />
                        <h3 className='h6 my-2'>{movie.name}</h3>
                    </div>
                </div>) : ''}


            </div>

        </>




    )
}
