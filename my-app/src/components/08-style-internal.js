import React from 'react'

const StyleInternal = () => {
    const stil ={
      color: 'red', 
      backgroundColor: 'black',
      textAlign: 'center'};
  return (
    <>
        <div style={stil}>Style Internal</div>
        <div style={{...stil, color: 'white'}}>Hello</div>
        <div style={stil}>Style Internal</div>
           
    </>
  )
}

export default StyleInternal;