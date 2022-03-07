import React from 'react';
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    const containerStyles = {
        height: 20,
        width: '70%',
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        marginTop: 2,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        border: `1px solid ${bgcolor}`
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
      
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;