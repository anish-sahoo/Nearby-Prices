import { Button } from "@nextui-org/react";
import { useState } from "react";

const TestPage = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      // console.log(data);
      setData(data.message);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError("Error fetching data. Please try again.");
    }
  };

  return (
    <div>
      <Button onClick={() => fetchData()} color="primary">
        Fetch Data
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p className="text-3xl text-blue-300">{data}</p>}
    </div>
  );
};

export default TestPage;
