import './Header.css'
import Ellipse from './../img/Ellipse.png'

const Header = () => {
    return (
        <div className='header'>
            <input className='search' type='text' value='Поиск'></input>
            <img className='profile_img' src={Ellipse}/>
        </div>)
}
export default Header