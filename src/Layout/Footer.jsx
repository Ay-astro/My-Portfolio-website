import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div>
      <footer className='footer flex w-screen py-3 justify-center  end-0'>
        <div className="foot-container ">
        <Link to='/' className='logo text-3xl'>AY💪</Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
