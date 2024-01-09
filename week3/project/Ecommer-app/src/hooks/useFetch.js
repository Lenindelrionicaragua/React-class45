import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for fetching data from an API.
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @returns {Object} An object containing data, loading state, error, and a function to refetch data.
 */
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      console.log(`Fetching data from: ${url}`);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log("Data fetched successfully:", result);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
      setLoading(false);
      console.error("Fetch error:", error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};

export default useFetch;
