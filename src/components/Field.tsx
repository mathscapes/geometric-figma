import * as React from 'react'
import { useState } from 'react'

function Field ({labelTitle,min,max,defaultValue}) {
  
  const [value, setValue] = useState(defaultValue);    
  
  const handleChange = event => {
      setValue(event.target.value);
  }

  //function to reset value to default value
  const setDefaultValue = () => {
    setValue(defaultValue)
  }

    return <div className="field">
    <label className="label">{labelTitle}</label>
    <input className="textbox" type="number"  value={Math.round(value)}  onChange={handleChange} />
    <input className="slider" type="range" min={min} max={max} defaultValue={defaultValue}  value={value} onChange={handleChange}/> 
  </div>
}

export default Field;