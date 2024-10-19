import { useContext, useEffect } from "react"
import { MdDriveFileRenameOutline, MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";
import { IoIosPeople, IoMdPeople } from "react-icons/io";
import { BiSolidMobileVibration } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import PorfolioContext from "./PorfolioContext"
import CircleCard from "./ReposComponent/CircleCard"
import Card from "./ReposComponent/Card"
import RepoList from "./ReposComponent/RepoList";
import Spinner from "./Spinner";
function Repos() {
    const {user,fetchUser,fetchRepos,loading}= useContext(PorfolioContext)
    useEffect(()=>{fetchUser();
        fetchRepos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {
avatar_url,
followers,
following,
html_url,
name,
location,
public_repos,
login,
    }=user
    if(loading){
        return <Spinner/>
    }else{
        return (
            <div className="repoConatainer">
            <div className="repoDetails flex gap-20 ">
                <CircleCard circleWidth='circlePro'>
                    <img src={avatar_url} alt="" className="circleImage"/>
                </CircleCard>
                <Card proCard='cardWidth'>
                    <div className="name-repo">
                        <div className="nameCard ">
                        <span className="spanP spanPgeneral">
                            Name
                            <p>{name} <MdDriveFileRenameOutline className="profileIcons"/></p>
                        </span>
                        <span className="spanP spanPgeneral">
                            Location
                            <p>{location} <FaLocationDot className="profileIcons"/></p>
                        </span>
                        <span className="spanPgeneral">
                            Public Repos
                            <p>{public_repos} <FiCodesandbox className="profileIcons"/></p>
                        </span>
                        </div>
                        <div className="nameCard flex">
                        <span className="spanP spanPgeneral">
                            Follwers
                            <p>{followers} <IoIosPeople className="profileIcons"/></p>
                        </span>
                        <span className="spanP spanPgeneral">
                            Following 
                            <p>{following} <IoMdPeople className="profileIcons"/></p>
                        </span>
                        <span className="spanPgeneral">
                        Github 
                        <p><a href={html_url}>{login}</a> <VscGithub className="profileIcons"/></p>
                        </span>
                        </div>
                        <div className="nameCard flex">
                        <span className="spanP spanPgeneral">
                            Mobile
                            <p><a href="tel:09057576265">09057576265</a><BiSolidMobileVibration className="profileIcons"/></p>
                        </span>
                        <span className="spanP spanPgeneral">
                            Twitter 
                            <p><a href="https://x.com/Astro_DevX?t=-vOSHHU1aYXPBubmaXWlzQ&s=09">Astro_DevX</a> <FaXTwitter className="profileIcons"/></p>
                        </span>
                        <span className="spanPgeneral">
                        Email
                        <p><a href="mailto:yusufa.dev@gmail.com">yusufa.dev@gmail.com</a> <MdMarkEmailUnread className="profileIcons"/></p>
                        </span>
                        </div>
                    </div>
                </Card>
            </div>
            <RepoList/>
            </div>
        )
    }
    }

export default Repos
