import React from 'react';
import "../App.css" 

const MainBodyChildone = ({ showImages }) => { // Logging the passed showImages prop

  return (
    <div style={ChildoneparentStyle}>
      <div style={ChildoneStyle}>
        {/* Left Column */}
        <div style={ChildoneLeftStyle}>
          <div style={ChildImageoneLeftStyle}>
            <img src={showImages[0]?.download_url} style={ChildImageoneLeftStyle} alt="Left Child Image" />
          </div>
        </div>

        {/* Right Column */}
        <div style={ChildoneRightStyle}>
          <div style={childImageoneRightStyle}>
            <img src={showImages[1]?.download_url} style={rightsubStyle} alt="Right Sub Image 1" />
            <img src={showImages[2]?.download_url} style={rightsubStyle} alt="Right Sub Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChildoneparentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ChildoneStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: "center",
  width: '100%',
  height: '52vh',
};

const ChildoneLeftStyle = {
  width: '66%',
  height: '46vh',
};

const ChildImageoneLeftStyle = {
  width: '100%',
  height: '46vh',
};

const ChildoneRightStyle = {
  width: '25%',
  height: '46vh',
};

const childImageoneRightStyle = {
  width: '100%',
  height: '36vh',
};

const rightsubStyle = {
  height: '22.8vh',
  width: '100%',
};

export default MainBodyChildone;
