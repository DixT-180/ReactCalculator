
import { useState } from 'react';
import './App.css';


function App() {
const [keyValue,setkeyValue] = useState('')
const [result,setResultValue] = useState('')

const GenerateDigits = ()=>{
  const Digits = [] ;
  for(let i=0;i<10;i++){
    Digits.push(<button onClick={()=>PressedKey(i.toString())}  >{i}</button>)
  }
  return Digits;
}

const Operators = ['/','*','+','-']

const PressedKey = value=>{

  if (Operators.includes(value) && keyValue===''|| Operators.includes(value) && Operators.includes(keyValue.slice(-1))){

    return;  //if prevoius input key is any operator you can't press the operator again
  }


  setkeyValue(keyValue+value)
  console.log(keyValue)



  if(!Operators.includes(value))                          //if last value is not an operator
  {
    const NumberString = (keyValue + value).toString()
    var newValue = NumberString.split(/([\+\-\*\/])/).map(a => parseFloat(a) || a).join(''); // if 0 kept at front it didnt work so had to do this ;)
    var evaluated = eval(newValue);
    setResultValue(evaluated)
  //  setResultValue(eval(keyValue + value).toString()) 
  }



}

//  const ShowResult = (result)=>{
//   console.log(result)
  

//  }

 const EraseDisplay = ()=>{
  setResultValue('');
  setkeyValue('');
 
 }
 const BackSpace = ()=>{
  setkeyValue(keyValue.slice(0,-1));
 }







  return (
    <div className="App">
     <div className='Calculator'>

      <div className='Display'>
        <span>Result:{result}</span>
      
       <h3> {keyValue || 0} </h3>
      </div>
      <div className='Operators'>
        <button onClick={()=>PressedKey('/')}>/</button>
        <button onClick={()=>PressedKey('*')} >*</button>
        <button onClick={()=>PressedKey('+')} >+</button>
        <button onClick={()=>PressedKey('-')}  >-</button>
        
       
        <button onClick={()=>EraseDisplay()}>DEL</button>
        
         
      </div>

      <div className='Digits'>
        { GenerateDigits()}
         
          
        <button onClick={()=>PressedKey('.')}  >.</button>
         
         <button onClick={()=>BackSpace()}>←</button>
      </div>

     </div>
      
    </div>
  );
}

export default App;
