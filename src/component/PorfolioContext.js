import { createContext, useState } from "react"
const PorfolioContext = createContext()
export function PorfolioProvider({children}) {
    const [click,setClick]= useState(false)
    const [user,setUser] = useState([])
    const [repos,setRepos] = useState([])
    const [loading,setLoading]= useState(false)
    function handMenue(){setClick(!click)}

    function loadState(){
        setLoading(true)
    }
    function FalseLoading(){
        setLoading(false)
    }

    const fetchUser = async ()=>{
        loadState()
        const respose = await fetch(`https://api.github.com/users/Ay-astro`)
        const data = await respose.json()
        FalseLoading()
        setUser(data)
    }
    const fetchRepos = async()=>{
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 5,
        })
        const respond = await fetch(`https://api.github.com/users/Ay-astro/repos?${params}`)
        const data = await respond.json()
        setRepos(data)
    }
    
    return <PorfolioContext.Provider value={{
        click,
        user,
        repos,
        loading,
        fetchRepos,
        fetchUser,
        handMenue
    }} >
        {children}
    </PorfolioContext.Provider>
}

export default PorfolioContext
