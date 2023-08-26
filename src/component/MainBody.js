import React, { useEffect, useState } from 'react'
import MainBodyChildone from './MainBodyChildone'
import MainBodyChildtwo from './MainBodyChildtwo'
import axios from "axios"


const MainBody = () => {
  const [Images, setImages]=useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state based on screen width

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Update state based on screen width
  };

  async function getData() {
    const storeData = await axios.get("https://picsum.photos/v2/list");
    const result = await storeData.data;
    setImages(result)
  }  
  // console.log(Images)
  useEffect(()=>{
    getData();
  },[])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
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

