import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import shapeGroups from './assets/shapes.config.js'

import FieldSet from './components/FieldSet'
import ShapeSelector from './components/ShapeSelector'
import './styles.css'


function App(){
    const [selectedShapeGroup, setSelectedShapeGroup] = useState(shapeGroups[0].name);

    //Passes the JSON Object of Selected Shape to the FieldSet Component
    const getSelectedShape = () => {
      return shapeGroups.filter(i => i.name === selectedShapeGroup); 
    }

    //Generates an Array of All Shape Names to pass to the ShapeSelector Component
    const getShapesList = (arr) => {
        return arr.map(shape => shape.name);
    }

    const shapesList = getShapesList(shapeGroups);

    return <div>
      <ShapeSelector shapesList={shapesList} onShapeChange={setSelectedShapeGroup} />
      <FieldSet shapeGroup={getSelectedShape()}/>
      <div className="buttonSet">
        <button className="button">Create</button>
        <button className="button">Cancel</button>
      </div>
    </div>

}

// ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('react-page'))
