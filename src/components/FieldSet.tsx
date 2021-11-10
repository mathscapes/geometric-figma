import * as React from 'react'
import { useState,useEffect } from 'react';
import Field from './Field'
import ShapeSelector from './ShapeSelector';


function FieldSet ({shapeGroup}) {
  const shapes = shapeGroup[0].shapes;
  const shapesList = shapes.map(shape => shape.shape);

  const [selectedShape, setSelectedShape] = useState(shapes[0].shape);
  const [selectedShapeObj, setSelectedShapeObj] = useState(shapes);

  useEffect(() => {
    setSelectedShape(shapes[0].shape);
  }, [shapeGroup]);

  useEffect(() => {
    setSelectedShapeObj(shapes.filter(i => i.shape === selectedShape));
  }, [selectedShape]);

    return <div className="fieldSet">
    {
    shapes.length > 1 ?
    <>
    <ShapeSelector shapesList={shapesList}  onShapeChange={setSelectedShape}/>
    {
      selectedShapeObj[0].fields.map((field,index) => 
      <Field 
        key={index} 
        labelTitle={field.name.label} 
        min={field.schema.min} 
        max={field.schema.max} 
        defaultValue={field.schema.default}
      />)
    }
    </>
    :
    shapes[0].fields.map((field,index) => 
    <Field 
      key={index} 
      labelTitle={field.name.label} 
      min={field.schema.min} 
      max={field.schema.max} 
      defaultValue={field.schema.default}
    />)
  }
  
  </div>
}

export default FieldSet;