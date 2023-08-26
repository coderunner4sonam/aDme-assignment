import React, { useEffect, useState } from 'react'
import MainBodyChildone from './MainBodyChildone'
import MainBodyChildtwo from './MainBodyChildtwo'
import axios from "axios"

const MainBody = () => {
  const [Images, setImages]=useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state based on screen width
  const [page , setPage] = useState(1);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Update state based on screen width
  };

  async function getData() {
    const storeData = await axios.get("https://picsum.photos/v2/list");
    const result = await storeData.data;
    setImages((prev)=> [...prev,...result]);
  }  
  
  useEffect(()=>{
    getData();
  },[page])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  const handleInfiniteScroll=(()=>{
    console.log("scrollTop" + document.documentElement.scrollTop);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollHeight" + document.documentElement. scrollHeight);
    
    try {
      if(document.documentElement.scrollTop+window.innerHeight+1>=document.documentElement. scrollHeight){
        setPage((prev)=>prev+1);
      }
    } catch (error) {
      console.log("got an error")
    }
  })

  useEffect(()=>{
    window.addEventListener("scroll",handleInfiniteScroll);
    return ()=>{
      window.removeEventListener("scroll",handleInfiniteScroll);
    }
  },[])

  return (
    <div style={parentMainbodyStyle}>
      <div style={MainbodyStyle}>
          {!isMobile && <MainBodyChildone showImages={Images} />}
          <MainBodyChildtwo showImages={Images} isMobile={isMobile}/>
      </div>
    </div>
  )
}

const parentMainbodyStyle={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const MainbodyStyle={
  border: "1px solid black",
  width: '80%',
}

export default MainBody

