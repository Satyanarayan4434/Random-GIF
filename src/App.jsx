import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {

  return <div className="background h-screen overflow-x-hidden flex flex-col items-center">
    <div className="bg-white p-4 w-[70rem] mx-auto mt-8 rounded-md shadow-sm">
    <h1 className=" flex justify-center ">RANDOM GIF</h1>
    </div>
    <Random/>
    <Tag/>
  </div>;
}
