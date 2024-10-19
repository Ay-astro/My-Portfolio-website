import {NavLink, Link} from 'react-router-dom'
import { useContext } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import PorfolioContext from '../component/PorfolioContext';

function Navbar() {
  const {click, handMenue} = useContext(PorfolioContext)

  const menuActive = 'menuctive flex items-center  gap-2 text:xs sm:text-lg';
  const menuNotActive = 'menuNotctive flex items-center  gap-2 text:xs sm:text-lg';




  return (
    <div className='navbar sm:px-6 md:px-25 lg:px-40 xl:px-60   py-6 flex justify-center sm:justify-between w-full'>
      <div>
        <Link to='/' className='logo text-3xl '>AY</Link>
      </div>
      <div className='menu hidden' onClick={handMenue}>
        {click ? <FaTimes className='Times'/> : <FaBars className=' Bars'/>}
      </div>
      <ul className={click ? menuActive: menuNotActive } id='ul'>
        <li onClick={handMenue} >
          <NavLink to='/about'  className={({isActive})=>(isActive ? 'liNav Active': 'liNav')}>Blog</NavLink>
            
            </li>
        <li onClick={handMenue}>
            <NavLink to='/'  className={({isActive})=>(isActive ? 'liNav Active': 'liNav')}>About</NavLink>
            </li>
        <li onClick={handMenue}><NavLink to='/repos'  className={({isActive})=>(isActive ? 'liNav Active': 'liNav')}>Repos</NavLink></li>
        <li onClick={handMenue}><NavLink to='/resume'  className={({isActive})=>(isActive ? 'liNav Active': 'liNav')}>Resume</NavLink></li>
        <li onClick={handMenue}><NavLink to='/contact'  className={({isActive})=>(isActive ? 'liNav Active': 'liNav')}>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
