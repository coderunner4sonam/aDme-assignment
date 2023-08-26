import React from 'react';
import headerImage from "../asset/headerImage.jpg"

const HeaderImage = () => {
  return (
    <div style={HeaderImageParentStyle}>
      {/* Main container for the header image */}
      <div style={HeaderImageStyle}>
        <img  src={headerImage} style={headerImageStyle} />
      </div>
    </div>
  );
};

const HeaderImageParentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const HeaderImageStyle = {
  height: '32vh',
  width: '80%',
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  textAlign: 'center',
};

const headerImageStyle={
  height: '32vh',
  width: '100%',
}
export default HeaderImage;
