import React from 'react';

const MainBodyChildtwo = ({ showImages, isMobile }) => {
  return (
    <div style={parentMainBodyChildtwoStyle}>
      <div style={MainBodyChildtwoStyle}>

        {/* Map through the showImages array */}
        {showImages.map((ele, index) => (
          <div style={subChildtwoStyle} key={index + index}>
            
            {/* Apply styles based on isMobile prop */}
            <img style={{ ...childTwoImageStyle, width: isMobile ? "375px" : "500px" }} 
              src={ele.download_url} alt={`Image ${index}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const parentMainBodyChildtwoStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MainBodyChildtwoStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100%",
};

const subChildtwoStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center", 
  width: "375px", 
  height: "370px",
  margin: "10px",
};

const childTwoImageStyle = {
  height: "360px",
  margin: "10px",
};

export default MainBodyChildtwo;
