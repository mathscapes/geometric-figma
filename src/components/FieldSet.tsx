import * as React from 'react'
import Field from './Field'

function FieldSet ({shape}) {
    return <div className="fieldSet">
    {shape.sliders.map(field => <Field labelTitle={field.label} min={field.min} max={field.max}/>)}
  </div>
}

export default FieldSet;