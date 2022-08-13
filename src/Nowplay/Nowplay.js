import {useState , useEffect} from 'react';


function Nowplay(){

    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
        });
    },[])
   

    return(
        <section className="pt-5">
        <h2 className="text-center mt-2 mb-5 white">Now Playing Movies</h2>
        <div className="container w-75 myM">
                    <div className="row">
                        <div className="col-md-6">
                            <input id="allMovies" className="form-control mb-5 " placeholder="get movies by word..." ></input>
                        </div>
                        <div className="col-md-6"><input className="form-control " id="word" type="text"  placeholder="search by rate"></input>
                        </div>
                    
                    </div>
                </div>
                    
                    
         <section className="container text-center my-1 py-2 ">
                                
                <div className="row">
                {
                    // loop
                    movies.map((movie)=>{
                        return (
                            <div className="col-md-6 col-lg-4 my-3 myM  shadow" >
                        <div className="movie shadow rounded position-relative">
                            <div className="post">
                                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="img-fluid rounded"></img>
                                <div className="layer d-flex align-items-center ">
                                    <div className="info p-0">
                                
                                        <h2>{movie.original_title}</h2>
                                        <br></br>
                                        <p className="desc">
                                            {movie.overview}
                                        </p>
                                        <br></br>
                                        <p>Rate: Rate: {movie.vote_average}</p>
                                        <p>Date: {movie.release_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                            
                        )

                            
                            
                            
                    })
                }

                    


                </div>
                        
                        
         </section>
    
    
    </section>
    );

}


export default Nowplay;