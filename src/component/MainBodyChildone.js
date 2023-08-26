import React from 'react';
import "../App.css"

const MainBodyChildone = ({showImages}) => {
  console.log(showImages)
    return (
      <div style={ChildoneparentStyle}>
        <div style={ChildoneStyle} >
          <div style={ChildoneLeftStyle}  >
            <div style={ChildImageoneLeftStyle}>
              <img src={showImages[0]?.download_url}  style={ChildImageoneLeftStyle}/> 
            </div>
          </div>
          <div style={ChildoneRightStyle}>
            <div style={childImageoneRightStyle} >
              <img src={showImages[1]?.download_url} style={rightsubStyle} />
              <img src={showImages[2]?.download_url} style={rightsubStyle} />
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
  alignItems:"center",
  width: '100%',
  height: '40vh',
};

const ChildoneLeftStyle = {
  width: '70%',
  height: '36vh',
};
const ChildImageoneLeftStyle={
  width: '100%',
  height: '36vh',
}
const childImageoneRightStyle={
  width: '100%',
  height:'36vh',
}
const ChildoneRightStyle = {
  width: '25%',
  height: '36vh',
};

const rightsubStyle = {
  height: '17.5vh',
  width: '95%',
};


export default MainBodyChildone;
