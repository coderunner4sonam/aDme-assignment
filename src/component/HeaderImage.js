import React from 'react';

const HeaderImage = () => {
  return (
    <div style={HeaderImageParentStyle}>
      <div style={mergedHeaderImageStyle}>HeaderImage</div>
    </div>
  );
};

const HeaderImageParentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const HeaderImageStyle = {
  height: '30vh',
  width: '80%',
  border: '1px solid black',
  textAlign: 'center',
};

// Media query for mobile devices (max-width: 768px)
const mobileMediaQuery = '@media (max-width: 768px)';

const responsiveStyles = {
  [mobileMediaQuery]: {
    HeaderImageStyle: {
      width: '100%',
    },
  },
};

const mergedHeaderImageStyle = Object.assign({}, HeaderImageStyle, responsiveStyles[window.matchMedia(mobileMediaQuery).matches ? mobileMediaQuery : '']);

export default HeaderImage;
