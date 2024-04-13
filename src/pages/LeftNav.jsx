import React, { useState } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
export default function LeftNav() {
  // const [link, setLink] = useState("");

  // //The Purpose of Loading Is That While Waiting For The Data To Be Fetch the User
  // //can see that the data that they input is actually loading
  const fetchingData = async (e) => {
    // e.preventDefault();
    // setData("");
    // try {
    //   setLoading(true);
    //   const response = await fetch(
    //     `https://play.pixels.xyz/pixels/share/`
    //   );

    //   if (!response.ok) {
    //     throw new Error("The Data Was Not Been Fetch");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    // setLoading(false);
  };
  console.log(fetchingData)
  return (
    <>
      <Input placeholder="Enter A Land Number" />
      <Buttons label="View" onClick={fetchingData}/>

      <Buttons label="Random Land" />
      <Buttons label="Delete All Viewing Land" />
    </>
  );
}
