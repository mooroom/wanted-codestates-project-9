import React, { useEffect } from "react";
import axiosconfig from "./axiosconfig";

function App() {
  useEffect(() => {
    const fetch = async () => {
      const res = await axiosconfig.get("users/2097689234");
    };

    fetch();
  }, []);

  return <div>App</div>;
}

export default App;
