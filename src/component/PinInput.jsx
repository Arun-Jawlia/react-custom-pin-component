import React, { forwardRef } from "react";

const PinInput = forwardRef(
  ({ maxLength, onChangeFunc, backSpaceHandler }, ref) => {


    const handleKeyUp = (e) => {
      // console.log(e.keyCode);
      if (e.keyCode === 8 && !e.target.value) {
        backSpaceHandler(e);
      } else {
        onChangeFunc(e);
      }
    };

    return (
      <input
      // className={correctOtp && 'greenColorInput'}
        ref={ref}
        maxLength={maxLength}
        // onChange={onChangeFunc}
        onKeyUp={handleKeyUp}
      />
    );
  }
);

export default PinInput;
