import logoNitflix from '../../assets/Logonetflix.png'
import '../../App.scss';
import { Link } from 'react-router-dom';
import { MdImageSearch } from "react-icons/md";
const Header = () => {
  return (
    <>
<nav className="header">
    <img src={logoNitflix} alt='Logo-Netflix' />
    <div>
      <Link to='./tvshows'>TV Shows</Link>
      <Link to='./movies'>Movies</Link>
      <Link to='./recentlyadded'>Recently Added</Link>
      <Link to='./mylist'>My List</Link>
    </div>
    <MdImageSearch />
</nav>
    </>
  )
}

export default Header;