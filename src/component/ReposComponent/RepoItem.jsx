import { FaLink } from "react-icons/fa";
import Card from "./Card";
import CircleCard from "./CircleCard";
function RepoItem({repos}) {
    const {
        name,
        html_url
    }=repos
    return (
        <div>
        <Card proCard='cardRepo'>
        <a href={html_url} target="_blank" rel='noreferrer' className="repoLinks">
        <CircleCard circleWidth="repoIconLink">
        <FaLink/>
        </CircleCard>
        {name}
        </a>
        </Card>
        </div>
    )
}

export default RepoItem
