// import React,{useState} from "react";

// const App = () =>{

//     const[operation, setOperation]= useState([]);
//     const[takeinput1,setTakeinput1] = useState("");
//     const[takeinput1,setTakeinput2] = useState("");
    
//     const handleTaskChange1= (event) => {
      
//     };
  
//     // const handleTaskChange2 = (event) => {
//     //   setTask2(event.target.value);
//     // };
  
  
//     const setOperation = () =>{
//        setTakeinput1
  
//         }
//     //   else{
//     //      const num1 = parseInt(task1,10);
//     //      const num2=parseInt(task2, 10);
  
//     //       return(num1 + num2);
//     //   }
  
//     // }
 
//    return(
//     <div className="App">
//        <h1 className="text-center">React Calculator</h1><br/>
//        <input type="text" placeholder="Num 1" onChange={handleTaskChange1}></input><br/>
//        <input type="text" placeholder="Num 2" onChange={handleTaskChange2}></input><br/>

//        <button type="button" onClick={addition}>+</button>
//        <button type="button" onClick={substraction}>-</button>
//        <button type="button" onClick={multipy}>*</button>
//        <button type="button"onClick={devide}>/</button>

//     </div>
  
//   )};

//   export default App;


 

import React, { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
    setResult("");
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
    setResult("");
  };

  const validateInputs = () => {
    // Check if inputs are not empty and are valid numbers
    if (input1.trim() === "" || input2.trim() === "") {
      setError("Both input fields are required.");
      setResult("");
      return false;
    }

    if (isNaN(input1) || isNaN(input2)) {
      setError("Please enter valid numbers.");
      setInput1("");
      setInput2("");
      setResult("")
      return false;

    }

    setError("");
    return true;
  };

  const performOperation = (operationType) => {
    if (validateInputs()) {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);

      let resultValue;
          if (operationType==="addition") {
            resultValue = num1 + num2;
          }

          else if (operationType==="subtraction") {
            resultValue = num1 - num2;
          }

          else if (operationType==="multiplication") {
            resultValue = num1 * num2; 
          }
          
          else{
            if (num2 !== 0) {
              resultValue = num1 / num2;
            } else {
              setError("Infinity");
              return;
            }
            
          }

        
      setResult(`Result: ${resultValue}`);
      setError("");
    }
  };

  return (
    <div className="App">
      <h1 className="text-center">React Calculator</h1>
      <br />
      <input
        type="text"
        placeholder="Num 1"
        value={input1}
        onChange={handleInputChange1}
      />
      <br />
      <input
        type="text"
        placeholder="Num 2"
        value={input2}
        onChange={handleInputChange2}
      />
      <br />
      <div className="buttons">
      <button type="button" onClick={() => performOperation("addition")}>
        +
      </button>
      <button type="button" onClick={() => performOperation("subtraction")}>
        -
      </button>
      <button type="button" onClick={() => performOperation("multiplication")}>
        *
      </button>
      <button type="button" onClick={() => performOperation("division")}>
        /
      </button>
      </div>

      {error && <p className="error">{error}</p>}
      {result && <p className="success">{result}</p>}
    </div>
  );
};

export default App;
