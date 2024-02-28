import { useState } from "react";
import "../style.css";
import  Button from '../Button'
import usePasswordGenerator from "../../hooks/use-password-generator";
import PasswordStrengthIndicator from '../strengthChecker'
function PasswordGenerator() {
  const [length, setLength] = useState(4);
  const [CheckboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lovercase Letters", state: false },
    { title: "Include Numers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied,setCopied]=useState(false)
 const handleCheckBoxChange=(target)=>{
  console.log(target,'tttttttt');
   const updateCheckbox=[...CheckboxData]
   updateCheckbox[target].state=!CheckboxData[target].state
   setCheckboxData(updateCheckbox)
 }
 const handleCopyPassword=()=>{
  navigator.clipboard.writeText(password)
  setCopied(true)
  setTimeout(() => {
    setCopied(false)
  }, 1000);
 }
 
   const {password,errorMessage,generatePassword}= usePasswordGenerator()
  return (
    <div className="container">
      {/* {Password text and copy} */}
     {password&&( <div className="header">
        <div className="title">{password}</div>
      
        <Button test={copied?"copied":"copy"} customClass="copyBtn" onclick={handleCopyPassword}/>
      </div>)}
      {/* {Character length} */}
      <div className="charLength">
        <span>
          <label>Charachter Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="19"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* {Checkbox} */}
      <div className="checkboxes">
        {CheckboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={()=>handleCheckBoxChange(index)}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {/* {Strength} */}
      <PasswordStrengthIndicator password={password} />
      {/* {ErroHandling} */}
      {errorMessage&& <div className="errorMessage"> {errorMessage}</div>}
      {/* {Generate button} */}
      {/* <button className="generateBtn" onClick={() => generatePassword(CheckboxData,length)}>
        Generate Password
      </button> */}
      <Button  test="Generate Password" customClass="generateBtn" onclick={()=>generatePassword(CheckboxData,length)}/>
    </div>
  );
}

export default PasswordGenerator;
