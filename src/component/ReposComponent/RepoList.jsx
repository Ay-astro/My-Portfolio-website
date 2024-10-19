import RepoItem from "./RepoItem"
import {useContext} from 'react'
import PorfolioContext from "../PorfolioContext"
function RepoList() {
    const {repos}=useContext(PorfolioContext);
    

    return (
        <>
        <div className="reposList flex">
            <div className="repoItems-container">
            {
                    repos.map((repo)=>{
                    return <RepoItem key={repo.id} repos={repo} />
                    })
                }
            </div>
        </div>
        </>
    )
}

export default RepoList
