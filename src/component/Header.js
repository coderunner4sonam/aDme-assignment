import React from 'react';
import logo from "../asset/logo.png"

const Header = () => {
  return (
    
    <div style={HeaderParentStyle}>
       {/* Main header container */}
      <div style={mergedHeaderStyle}>
        <div style={HeaderLogoStyle}>
          {/* Logo image */}
          <div style={logoStyle}>
            <img src={logo} style={logoImageStyle}/>
          </div>
        </div>
         {/* Title container */}
        <div style={HeaderTitleStyle}>
          <div style={titleStyle}>Image Gallery</div>
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
    height: '38px',
    width: '45%',
    textAlign: 'center',
  };
  
  const logoImageStyle = {
    height: '38px',
    width: '45%',
  }

  const HeaderTitleStyle = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: "darkblue"
  };
  
  const titleStyle = {
    width: '35%',
    textAlign: 'center',
  };
  
  // Media query for mobile devices (max-width: 768px)
  const mobileMediaQuery = '@media (max-width: 768px)';
  
  // Responsive styles for mobile devices
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
  
  // Merging base styles with responsive styles based on media query
  const mergedHeaderStyle = Object.assign({}, HeaderStyle, responsiveStyles[window.matchMedia(mobileMediaQuery).matches ? mobileMediaQuery : '']);
  
export default Header;
