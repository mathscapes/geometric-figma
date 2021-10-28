import * as React from 'react'
import { useCallback } from 'react'

function ShapeSelector({onShapeChange,shapesList}) {
    const handleInputChange = useCallback(event => {
        onShapeChange(event.target.value)
      }, [onShapeChange])
    
    return (
        <div className="shapeSelector">
            <select className="select" onChange={handleInputChange} defaultValue={shapesList[0]}>
                {shapesList.map(shape => <option key={shape} value={shape}>{shape}</option>)}
            </select>
        </div>
    );
}

export default ShapeSelector;