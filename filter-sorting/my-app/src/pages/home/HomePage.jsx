import React, { useMemo, useState } from 'react'
import styles from './Home.module.css'
import useFetchData from '../../hooks/useFetchData'

const HomePage = () => {
  const {data, loading, error} = useFetchData();
  const [postPerPage] = useState(10);
  const [currentPage, setCurentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState("");
  const [sortType, setSortType] = useState("");

  const filteredData = useMemo(()=>{
    if(searchTerm.length > 3){
      const filtered = data.filter((el)=> el.title.toLowerCase().includes(searchTerm.toLowerCase()) || el.body.toLowerCase().includes(searchTerm.toLowerCase()))
      return filtered;
    }
    return data
  },[data, searchTerm])

  const sortedData = filteredData.sort((a,b)=>{
    if(sortType === "title-asc") return a.title.localeCompare(b.title);
    if(sortType === "title-dsc") return b.title.localeCompare(a.title);
    if(sortType === "id-asc") return a.id - b.id;
    if(sortType === "id-dsc") return b.id - a.id;
    return 0
  })

  const totalPage = Math.ceil(sortedData.length/postPerPage);
  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = sortedData.slice(firstPost, lastPost);

  const handleNext = () => {
    if(totalPage > currentPage){
      setCurentPage((prev)=>prev+1);
    }
  }

  const handlePrev = () => {
    if(currentPage > 1){
      setCurentPage(prev=>prev-1);
    }
  }

  return (
    <div className={styles.homePage}>
      <div style={{display:"flex"}}>
        <input type="text" placeholder='search' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <div style={{marginLeft:"24px"}}>
          <select onChange={(e)=>setSortType(e.target.value)}>
          <option value="">Sort</option>
          <option value="title-asc">Title-asc</option>
          <option value="title-dsc">title-dsc</option>
          <option value="id-asc">id-asc</option>
          <option value="id-dsc">id-dsc</option>
        </select>
        </div>
      </div>
      <div className={styles.container}>
        {currentPost.map((post)=>{
        return <div key={post.id} style={{border:"1px solid white", padding:"24px", marginTop:"24px"}}>
          <h2>{post.id} - {post.title}</h2>
          <p>{post.body}</p>
        </div>
      })}
      </div>

     <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
       <div style={{display:"flex", gap:"24px", marginTop:"24px"}}>
        <button onClick={handlePrev}>Prev</button>
        <p>{currentPage}</p>
        <button onClick={handleNext}>Next</button>
      </div>
     </div>
    </div>
  )
}

export default HomePage