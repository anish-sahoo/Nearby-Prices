import { useState } from "react";

const TestPage = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      // console.log(response);
      console.log(data);
      setData(data.message);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError("Error fetching data. Please try again.");
    }
  };
  

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p>{data}</p>}
    </div>
  );
};

export default TestPage;
