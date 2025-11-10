import { useEffect, useMemo, useState } from "react";
import { PropsCard } from "../components/PostCard"
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const [post, setPost] = useState<any>([]);
    const [postParPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("none");
    const Navigate = useNavigate()

    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            if(data) setPost(data);
        } catch (error) {
            console.log(error)
        }
    } 

    const filteredData = useMemo(()=>{
        if(searchTerm.length > 3){
            const filtered = [...post].filter((el)=> el.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
            || el.body.toLowerCase().includes(searchTerm.toLowerCase()))
            return filtered
        }
        return post
    },[post, searchTerm])

    const sortedData = [...filteredData].sort((a,b)=>{
        if(sortType === "title-asc") return a.title.localeCompare(b.title);
        if(sortType === "title-dsc") return b.title.localeCompare(a.title);
        if(sortType === "id-asc") return a.id - b.id;
        if(sortType === "id-dsc") return b.id - a.id;
        return 0
    })

    const totalPage = Math.ceil(sortedData.length / postParPage);
    const indexOfLastPost = currentPage * postParPage;
    const indexOfFirstPost = indexOfLastPost - postParPage;
    const currentPost = sortedData.slice(indexOfFirstPost, indexOfLastPost);

     const handelNext = () => {
        if(totalPage > currentPage){
            setCurrentPage(prev=> prev+1);
        }
    }
  
    const handlePrev = () => {
        if(currentPage > 1){
            setCurrentPage(prev=>prev-1);
        }
    }
    return <div className="bg-gray-50 w-full min-h-screen">
        <div className="w-full h-[80px] border border-gray-200 flex justify-start items-center px-10">
            <input
                type="text"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="filter by name"
                className="border rounded-lg w-[300px] h-[40px]"
            />
            <select
              onChange={(e)=>setSortType(e.target.value)} 
              className="border rounded-lg w-[300px] h-[40px] ml-10"
            >
                <option value="">Sort by</option>
                <option value="title-asc">Title(A-Z)</option>
                <option value="title-dsc">Title(Z-A)</option>
                <option value="id-asc">Id-asc</option>
                <option value="id-dsc">Id-dsc</option>
            </select>
        </div>
        <div className="min-h-screen">
            {currentPost.map((post, i)=><PropsCard key={i} post={post} onClick={()=>Navigate(`/product/${post.id}`)}/>)}
        </div>
        <div className="h-30 flex justify-center items-center gap-5">
            <button style={{backgroundColor:"#81E6D9", paddingLeft:"30px", paddingRight:"30px"}} onClick={handlePrev}>prev</button>
            <p>{currentPage}/{totalPage}</p>
            <button style={{backgroundColor:"#81E6D9", paddingLeft:"30px", paddingRight:"30px"}} onClick={handelNext}>Next</button>
        </div>
    </div>
}