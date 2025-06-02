import axios from 'axios';
import { useState } from 'react';
function Homepage(){
    const [moviedata,setmoviedata] =useState([]);
    function getMoviesInfo (){
        console.log("button is working");
    }
    return <>
    <div>
        axios.get('https://imdb/iamidiotareyoutoo.com/search?q=latest').then(
            resp => {
            console.log("i got response");
            setmoviedata(resp.data.description);

      })
        <button onClick='getMoviesInfo'>explore</button>
        home page
    </div>
    </>
}
export default Homepage;