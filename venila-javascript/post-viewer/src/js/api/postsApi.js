const BASE_URL = "http://localhost:8080/post";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF0bWFuIiwiaWF0IjoxNzYyNjExMTIzfQ.5Qn7mVhh3sEVQs-3T-OISo0pss5CfQiwDW9q7YF5Jiw"

export async function getPost(id=null){
    const url = id ? `${BASE_URL}?_id=${id}` : BASE_URL
    console.log("url---", url)
    try {
        const response = await fetch(url, {
            method:"GET",
            headers:{
                Authorization:`Bearer ${TOKEN}`,
                "Content-Type":"application/json"
            }
        })
        const res = await response.json();
        return res
    } catch (error) {
        console.log(error);
    }
}