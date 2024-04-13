import React, { useState } from "react";
import LeftNav from "./pages/LeftNav";

export default function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState("");
  // const inputLimit = 5000;
  const [mainValue, setMainValue] = useState("");

;
  return (
    <>
      <nav>
        <LeftNav />
        <iframe src={url}></iframe>
      </nav>
    </>
  );
}
