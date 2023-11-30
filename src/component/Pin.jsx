import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, maxLength }) => {
  const [inputBoxLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  // console.log(inputRef)

  const onChangeHandler = (e, index) => {
    if (index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <div>
      {
        // underscore tell us we are going to use first parameter
        inputBoxLength.map((_, index) => {
          return (
            <PinInput
              key={index}
              ref={(inputElem) => {
                return (inputRef.current[index] = inputElem);
              }}
              maxLength={maxLength}
              onChangeFunc={(e) => onChangeHandler(e, index)}
            />
          );
        })
      }
    </div>
  );
};
export default Pin;

Pin.prototype = {
  length: PropTypes.number.isRequired,
};

// const Pin = ({length}) => {
//   return (
//     <div>
//         {
//             new Array(length).fill('').map((item, index)=>
//             {
//                 return(
//                     <input key={index}/>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Pin
