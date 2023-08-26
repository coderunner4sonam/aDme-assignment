import React, { useEffect, useState } from 'react';
import MainBodyChildone from './MainBodyChildone';
import MainBodyChildtwo from './MainBodyChildtwo';
import axios from "axios";

const MainBody = () => {
  const [Images, setImages] = useState([]); // State to hold the fetched images
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state based on screen width
  const [page, setPage] = useState(1); // State to manage pagination

  // Function to handle resizing of the window and update isMobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Update state based on screen width
  };

  // Function to fetch data from the API
  async function getData() {
    try {
      const storeData = await axios.get("https://picsum.photos/v2/list");
      const result = await storeData.data;
      setImages((prev) => [...prev, ...result]); // Append new images to the existing ones
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }  
  
  // Fetch data when the page state changes
  useEffect(() => {
    getData();
  }, [page]);

  // Add event listener for window resize and remove it on component unmount
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle infinite scrolling
  const handleInfiniteScroll = () => {
    try {
      // Check if user has scrolled to the bottom of the page
      if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1); // Increment the page state to fetch more data
      }
    } catch (error) {
      console.error("Error in infinite scroll:", error);
    }
  };

  // Add event listener for scrolling and remove it on component unmount
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <div style={parentMainbodyStyle}>
      <div style={MainbodyStyle}>
        {/* Render MainBodyChildone component only on larger screens */}
        {!isMobile && <MainBodyChildone showImages={Images} />}

        {/* Always render MainBodyChildtwo component */}
        <MainBodyChildtwo showImages={Images} isMobile={isMobile}/>
      </div>
    </div>
  );
}

const parentMainbodyStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MainbodyStyle = {
  border: "1px solid black",
  width: '80%',
};

export default MainBody;
