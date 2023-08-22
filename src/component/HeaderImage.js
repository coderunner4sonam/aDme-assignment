import React from 'react'

const HeaderImage = () => {
  return (
    <div style={HeaderImageParentStyle}>
        <div style={HeaderImageStyle}>
        HeaderImage
        </div>
    </div>
  )
}

const HeaderImageParentStyle={
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const HeaderImageStyle={
    height: "30vh",
    width: "80%",
    border: "1px solid black",
    textAlign: "center"
}

export default HeaderImage

