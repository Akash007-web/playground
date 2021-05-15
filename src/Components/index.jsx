import React, { useEffect, useState } from 'react'
 
const Home = () =>  {
 [Users,setUsers] = useState([])
useEffect(() => {
 const url = `https://api.themoviedb.org/3/movie/550?api_key=cb2e720b9baecd0b39339eb4b55ef400`
 fetch(url)
.then(res => res.json())
.then(data => setUsers(data))
},[])
 
return (

  <div>ome Pages</div>
)
}

export default Home;