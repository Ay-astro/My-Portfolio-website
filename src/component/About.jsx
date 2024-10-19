import MyProfileImg from "./AboutComponent/MyProfileImg"
import Abouttext from "./AboutComponent/Abouttext"
function About() {
    return (
        <div className="aboutContainMain">
            <div className="myname flex">
              <h1 className="myNameY">
                I'm Yusuf
              </h1>
            </div>
          <div className="aboutmain flex">
          <MyProfileImg/>
          <Abouttext/>
          </div>
        </div>
  )
}

export default About
