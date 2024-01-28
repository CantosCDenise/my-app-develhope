import { useEffect, useState } from "react"

export function GithubUser ({username}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)

                setData(json)
            })
    }, [username])

    return (
    <div>
        {data && <h1>{data.name}</h1>}
        {data && <h1>{data.login}</h1>}
        {data && <img src={data.avatar_url} height="50px" width="50px"></img>}
    </div>
    )
}