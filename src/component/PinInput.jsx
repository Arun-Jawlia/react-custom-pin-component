import React from 'react'

const PinInput = ({maxLength, onChangeFunc}) => {
  return (
    <input
            
            
              maxLength={maxLength}
              onChange={onChangeFunc}
              
            />
          
  )
}

export default PinInput