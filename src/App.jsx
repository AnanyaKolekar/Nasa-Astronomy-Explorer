import React from "react";
import {useState, useEffect} from "react";
import "./App.css";

const App =() =>{
const[apodData, setApodData] = useState(null);
const[error, setError]= useState(null);

useEffect(()=>{
fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then((res)=>{
  if(!res.ok){
    throw new Error ("Failed to fetch the data");

  }
  return res.json();

})
.then((data)=> setApodData(data))
.catch((err)=>setError(err.message));
},[]);

if(error){
  return <div> Error: {error}</div>;

}
if(!apodData){
  return <div>Loading...</div>;

}
 return(
    <>
    <div className="apod-container">
<h1>{apodData.title}</h1>
<p className="apod-date">📅 {apodData.date}</p>
<img  className="apod-image" src={apodData.url} alt={apodData.title} />
<p className="apod-explanation">{apodData.explanation}</p>

    </div>
    </>
  )
}
export default App;
