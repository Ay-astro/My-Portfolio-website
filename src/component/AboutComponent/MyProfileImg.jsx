import avatar from './asset/Avatar.jpg'
import AboutSocials from '../AboutComponent/AboutSocials'
function MyProfileImg() {
    return (
        <div className='Mypro flex'>
            <div className="imgContainer">
                <img src={avatar} alt="" className='imgAvatar' />
            </div>
            <h3 className='reachout'>Reach on me</h3>
            <AboutSocials/>
        </div>
    )
}

export default MyProfileImg
