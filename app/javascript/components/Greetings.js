import React, { useState, useEffect } from "react";
import axios from "axios";

const baseurl = "http://localhost:3000/greetings";

const Greetings = () => {
  const [greetData, setGreetData] = useState({});

  useEffect(() => {
    getGreetings();
  }, []);
  const getGreetings = async () => {
    const response = await axios.get(baseurl);
    setGreetData(response.data);
  };

  return (
  <h1>{greetData.greeting}</h1>
  );
}

export default Greetings;