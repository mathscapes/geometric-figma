import * as React from 'react'
import { useCallback } from 'react'

const shapes = [ "Polar Rose", "Sine", "Polygon", "Spiral", "Superellipse", "Astroid" ];

function ShapeSelector({onShapeChange}) {

    const handleInputChange = useCallback(event => {
        onShapeChange(event.target.value)
      }, [onShapeChange])
    
    return (
        <div className="shapeSelector">
            <select className="select" onChange={handleInputChange} defaultValue={shapes[0]}>
                {shapes.map(shape => <option key={shape} value={shape}>{shape}</option>)}
            </select>
        </div>
    );
}

export default ShapeSelector;