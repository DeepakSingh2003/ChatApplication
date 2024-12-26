import { useState, useEffect } from "react";

const useInstantDB = (baseURL) => {
  const [data, setData] = useState(null);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${baseURL}${endpoint}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data from InstantDB:", error);
    }
  };

  const postData = async (endpoint, body) => {
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return await response.json();
    } catch (error) {
      console.error("Error posting data to InstantDB:", error);
    }
  };

  return { data, fetchData, postData };
};

export default useInstantDB;
