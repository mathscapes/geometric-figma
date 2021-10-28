import * as React from 'react'
import Field from './Field'

function FieldSet ({shape}) {
  //console.log(shape[0].sliders);
    return <div className="fieldSet">
    {shape[0].sliders.map((field,index) => <Field key={index} labelTitle={field.label} min={field.min} max={field.max} defaultValue={field.defaultValue}/>)}
  </div>
}

export default FieldSet;