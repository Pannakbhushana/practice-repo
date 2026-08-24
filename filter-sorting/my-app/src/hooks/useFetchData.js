import { useState, useEffect } from 'react'

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");

            if(!res.ok){
                throw new error("Faild to fetch");
            }

            const resulet = await res.json();
            setData(resulet);
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {data, loading, error}
}

export default useFetchData