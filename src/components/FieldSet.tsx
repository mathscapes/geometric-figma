import * as React from 'react'
import Field from './Field'

function FieldSet ({shapeGroup}) {
  console.log(shapeGroup);
    return <div className="fieldSet">
    {shapeGroup[0].shapes[0].fields.map((field,index) => 
    <Field 
      key={index} 
      labelTitle={field.name.label} 
      min={field.schema.min} 
      max={field.schema.max} 
      defaultValue={field.schema.default}
    />)}
  </div>
}

export default FieldSet;