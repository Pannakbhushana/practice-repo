import { useEffect, useState } from "react";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF0bWFuIiwiaWF0IjoxNzYyNjExMTIzfQ.5Qn7mVhh3sEVQs-3T-OISo0pss5CfQiwDW9q7YF5Jiw";

const useFetch = (url: RequestInfo | URL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errror, setError] = useState("");

  const fetchData = async () => {
    if (!url) return;
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, errror, refetch: fetchData };
};

export { useFetch };
