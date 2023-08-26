import React from 'react'

const MainBodyChildtwo = ({showImages}) => {
  return (
    <div style={parentMainBodyChildtwoStyle}>
      <div style={MainBodyChildtwoStyle}>
         {
          showImages.map((ele)=>(
            <div style={subChildtwoStyle}>
              <img style={childTwoImageStyle} src={ele.download_url}/>
            </div>
          ))     
         } 
      </div>
    </div>
  )
}

const parentMainBodyChildtwoStyle={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
}
const MainBodyChildtwoStyle={
  display:"flex",
  justifyContent:"space-around",
  flexWrap:"wrap",
  width:"100%",
}
const subChildtwoStyle={
  display:"flex",
  justifyContent:"space-around",
  alignItems:"wrap",
  width:"370px",
  height:"370px",
  margin:"10px"
}
const childTwoImageStyle={
  width:"370px",
  margin:"10px"
}
export default MainBodyChildtwo

