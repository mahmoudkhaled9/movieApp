import {useState , useEffect} from 'react';





function Toprate(){




    const [toprate , setTopRate] = useState([]);


    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f99a4b0c91e28a26cf2a2a173e118dad")
        .then(r => r.json() )
        .then(r => {
            setTopRate(r.results)
        })
    } , [])

    return(
        <section className="pt-5">
        <h2 className="text-center mt-2 mb-5 white">top Rated Movies</h2>
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
                        toprate.map((onemovie)=>{
                            return(
                    <div className="col-md-6 col-lg-4 my-3 myM  shadow" key={onemovie.id} >
                                <div className="movie shadow rounded position-relative">
                                            <div className="post">
                                                <img src={"https://image.tmdb.org/t/p/w500" + onemovie.poster_path }className="img-fluid rounded"></img>
                                                <div className="layer d-flex align-items-center ">
                                                    <div className="info p-0">
                                                
                                                        <h2>{onemovie.original_title}</h2>
                                                        <br></br>
                                                        <p className="desc">After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.
                                                        </p>
                                                        <br></br>
                                                        <p>Rate: Rate: 6.8</p>
                                                        <p>Date: 2022-07-06</p>
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

};

export default Toprate;





// function Toprate(){

//     return(
//         <section className="pt-5">
//         <h2 className="text-center mt-2 mb-5 white">Now Playing Movies</h2>
//         <div className="container w-75 myM">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <input id="allMovies" className="form-control mb-5 " placeholder="get movies by word..." ></input>
//                         </div>
//                         <div className="col-md-6"><input className="form-control " id="word" type="text"  placeholder="search by rate"></input>
//                         </div>
                    
//                     </div>
//                 </div>
                    
                    
//          <section className="container text-center my-1 py-2 ">
                                
//                 <div className="row">
//                 <div className="col-md-6 col-lg-4 my-3 myM  shadow" >
//                 <div className="movie shadow rounded position-relative">
//                             <div className="post">
//                                 <img src="https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" className="img-fluid rounded"></img>
//                                 <div className="layer d-flex align-items-center ">
//                                     <div className="info p-0">
                                
//                                         <h2>Thor: Love and Thunder</h2>
//                                         <br></br>
//                                         <p className="desc">After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.
//                                         </p>
//                                         <br></br>
//                                         <p>Rate: Rate: 6.8</p>
//                                         <p>Date: 2022-07-06</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                 </div>
                        
                        
//                 </section>
                   
                   
//         </section>
//     );

// };

// export default Toprate;