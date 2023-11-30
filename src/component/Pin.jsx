import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, maxLength,setPinInput }) => {
  const [inputBoxLength] = useState(new Array(length).fill("O"));
  const inputRef = useRef([]);
  const [isSingleBoxValue] = useState(new Array(length).fill(""))
  // console.log(inputRef)


  // Function to fill and change the focus to next  input value 
  const onChangeHandler = (e, index) => {

    isSingleBoxValue[index] = e.target.value
    if ( e.target.value.length >0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    } 
    
    setPinInput(isSingleBoxValue.join(''))
  };


  // Function to delete in or remove input value 
  const backSpaceHandler = (e,index)=>
  {
    if(index>0 )
    {
      inputRef.current[index-1].focus();
    }
    isSingleBoxValue[index] = e.target.value
    setPinInput(isSingleBoxValue.join(''))
  }


  // how to access the data that the use ha scopied, or the data that the user is pasting 
  //  we need to get  only the first character basied on the input lenght
  // map each input box, with thosie individual characters.


  const handlePaste = (e) =>
  {
    const data = e.clipboardData.getData('text').split("").filter((_,index)=>index<length)
    console.log(data)

    data.forEach((character, index)=>
    {
      isSingleBoxValue[index]= character
      inputRef.current[index].value= character
      if(index<length-1)
      {
        inputRef.current[index+1].focus()
      }
    })
  }


  return (
    <div onPaste={handlePaste} >
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
              backSpaceHandler={(e)=>backSpaceHandler(e,index)}
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
