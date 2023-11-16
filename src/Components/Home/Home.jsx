import { useEffect, useState } from 'react';
import Banner from '../../assets/marvel-posters-ranked.webp'
import './Home.scss';
import { CiPlay1,CiCirclePlus  } from "react-icons/ci";
import axios from 'axios';
import '../../App.css'

const keyApi = '5c40739a6c5a77d70c748e812ce609c6';
const APIKeyUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`;

const Card = ({ img,  original_title
}) =>{
return (
<>
  <img className='card' src={img} alt="Movie-Cover" />
  
    
    
</>
)
}
 


const Row = ({ title, arr = [] }) => (
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
       
      ))}
    </div>
  </div>
);

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { results } } = await axios.get(APIKeyUrl);
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className='home'>
        <div className="banner" style={{
        backgroundImage: `url(${Banner})`? `url(${Banner})` : '#000000',}}>
             
          <h1>Avengers_Movies</h1>
       <p>Amid a future war between the human race and the forces of artificial intelligence,
         a hardened ex-special forces agent grieving the disappearance of his wife,
          is recruited to hunt down and kill the Creator, 
        the elusive architect of advanced AI who has developed 
        a mysterious weapon with the power to end the war—and mankind itself.

         popularity: 415.404</p>
                   <div>
                    
                <button><CiPlay1/> Play</button>
                <button>My List <CiCirclePlus/></button>
                   </div>
           </div>
       
        <Row title={"Popular On Netflix"} arr={movies} />
        <Row title={"Movies"} arr={movies} />
        <Row title={"Recently Added"} arr={movies} />
        <Row title={"My List"} arr={movies} />
      </section>
    </>
  );
}

export default Home;
