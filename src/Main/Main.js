import React, { useState } from "react";

const Main = () => {
   //let [name, setName] = useState("react");
  // let [obj, setObj] = useState({});
  const [arr, setArr] = useState([1, 2, 3]);
   const update=(index)=>{
    const temp=arr.map((item,i)=>
      index==i? item*2 : item
    )
    setArr(temp);
   }
  return (
    <div>
      Main Function
      
      {/* {arr.map((e)=>{<h1>{e}</h1>})} */}
      {arr.map((item,index)=>(
        <div key={index}>
          <h1>{item}</h1>
          <button onClick={()=>update(index)}>Update</button>
        </div>
      ))}
      {/* <button onClick={()=>setObj({feature:'USE STATE'})}>Update Object </button> */}
    </div>
  ); 
};
export default Main;
