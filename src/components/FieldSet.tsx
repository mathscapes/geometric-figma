import * as React from 'react'
import Field from './Field'

function FieldSet ({shape}) {
  console.log(shape);
    return <div className="fieldSet">
    {shape.sliders.map(field => <Field key={field} labelTitle={field.label} min={field.min} max={field.max}/>)}
  </div>
}

export default FieldSet;