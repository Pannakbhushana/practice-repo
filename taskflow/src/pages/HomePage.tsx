import { useEffect, useState, useMemo } from "react";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [post, setPost] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [searchTerms, setSearchTerms] = useState("");
  const [sortType, setSortType] = useState<string>("none");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await data.json();
      if (res) setPost(res);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = useMemo(()=>{
    if(searchTerms.length > 3){
        return post.filter((post)=>
        post.title.toLowerCase().includes(searchTerms.toLowerCase()) 
        || post.body.toLowerCase().includes(searchTerms.toLowerCase()))
    }
    return post;
  },[post, searchTerms])

  const sortedData = useMemo(()=>{
    const sorted = [...filterData];
    sorted.sort((a,b)=>{
        if(sortType === "title-asc") return a.title.localeCompare(b.title)
        if(sortType === "title-dsc") return b.title.localeCompare(a.title)
        if(sortType === "id-asc") return a.id - b.id
        if(sortType === "id-dsc") return b.id - a.id
        return 0
    })
    return sorted
  },[filterData, sortType])

  const totalPage = Math.ceil(sortedData.length/postPerPage);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "start", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerms}
          onChange={(e) => {
            setSearchTerms(e.target.value);
            setCurrentPage(1); // reset page on search
          }}
          style={{
            width: "300px",
            height: "30px",
            marginTop: "30px",
            marginBottom: "20px",
            borderRadius: "5px",
          }}
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          style={{ width: "200px", height: "30px", marginTop: "30px" }}
        >
          <option value="none">Sort By</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-dsc">Title Z-A</option>
          <option value="id-asc">ID (Low to High)</option>
          <option value="id-dsc">ID (High to Low)</option>
        </select>
      </div>

      {/* Posts */}
      <div style={{ width: "100%", marginTop: "10px" }}>
        {currentPosts.length > 0 ? (
          currentPosts.map((el) => (
            <div
              key={el.id}
              className={styles.card}
              onClick={() => navigate(`/product/${el.id}`)}
            >
              <h2>
                {el.id} - {el.title}
              </h2>
            </div>
          ))
        ) : (
          <div>Oops...! No posts found</div>
        )}

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            alignContent: "center",
          }}
        >
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </button>
          <p>
            {currentPage}/{totalPage}
          </p>
          <button onClick={handleNext} disabled={currentPage === totalPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
