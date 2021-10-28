import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'

import FieldSet from './components/FieldSet'
import ShapeSelector from './components/ShapeSelector'
import { shapes } from './assets/shapes'
import './styles.css'


function App(){
    const [selectedShape, setSelectedShape] = useState("Polar Rose");

    //Passes the JSON Object of Selected Shape to the FieldSet Component
    const getSelectedShape = () => {
      return shapes.filter(i => i.name === selectedShape); 
    }

    //Generates an Array of All Shape Names to pass to the ShapeSelector Component
    const getShapesList = (arr) => {
        return arr.map(shape => shape.name);
    }

    const shapesList = getShapesList(shapes);

    return <div>
      <ShapeSelector shapesList={shapesList} onShapeChange={setSelectedShape} />
      <FieldSet shape={getSelectedShape()}/>
      <div className="buttonSet">
        <button className="button">Create</button>
        <button className="button">Cancel</button>
      </div>
    </div>

}

// ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('react-page'))
