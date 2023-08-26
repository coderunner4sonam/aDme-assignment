import React from 'react';

const Header = () => {
  return (
    <div style={HeaderParentStyle}>
      <div style={mergedHeaderStyle}>
        <div style={HeaderLogoStyle}>
          <div style={logoStyle}>Logo</div>
        </div>
        <div style={HeaderTitleStyle}>
          <div style={titleStyle}>Site Title</div>
        </div>
      </div>
    </div>
  );
};

const HeaderParentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const HeaderStyle = {
    height: '10vh',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid black',
  };
  
  const HeaderLogoStyle = {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };
  
  const logoStyle = {
    height: '30px',
    width: '42%',
    border: '1px solid black',
    textAlign: 'center',
  };
  
  const HeaderTitleStyle = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const titleStyle = {
    width: '35%',
    border: '1px solid black',
    textAlign: 'center',
  };
  
  // Media query for mobile devices (max-width: 768px)
  const mobileMediaQuery = '@media (max-width: 768px)';
  
  const responsiveStyles = {
    [mobileMediaQuery]: {
      HeaderStyle: {
        flexDirection: 'column',
        height: 'auto',
      },
      HeaderLogoStyle: {
        width: '100%',
        justifyContent: 'center',
      },
      titleStyle: {
        width: '70%',
      },
    },
  };
  
  const mergedHeaderStyle = Object.assign({}, HeaderStyle, responsiveStyles[window.matchMedia(mobileMediaQuery).matches ? mobileMediaQuery : '']);
  
export default Header;
