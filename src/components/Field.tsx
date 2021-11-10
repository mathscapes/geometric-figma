import * as React from 'react'
import { useState } from 'react'

function Field ({labelTitle,min,max,defaultValue}) {
  const [value, setValue] = useState(defaultValue);    
  const handleChange = event => {
      setValue(event.target.value);
  }

    return <div className="field">
    <label className="label">{labelTitle}</label>
    <input className="textbox" type="number"  value={Math.round(value)}  onChange={handleChange} />
    <input className="slider" type="range" min={min} max={max} value={value} onChange={handleChange}/> 
  </div>
}

export default Field;