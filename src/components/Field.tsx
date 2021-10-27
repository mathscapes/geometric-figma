import * as React from 'react'

function Field ({labelTitle,min,max}) {
    return <div className="field">
    <label className="label">{labelTitle}</label>
    <input className="textbox" type="number" />
    <input type="range" min={min} max={max} className="slider"/> 
  </div>
}

export default Field;