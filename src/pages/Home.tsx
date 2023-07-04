import React, { useState } from 'react'
import TopCard from '../components/TopCard'
import SearchCard from '../components/SearchCard'
import TableCard from '../components/TableCard'

const Home = () => {

    const [storeSearchKeyword, setStoreSearchKeyword] = useState<string>('');
  return (
    <div>
      <TopCard/>
      <SearchCard keyword={(keyString:string)=> setStoreSearchKeyword(keyString)}/>
      <TableCard searchKeyword={storeSearchKeyword}/>
    </div>
  )
}

export default Home
