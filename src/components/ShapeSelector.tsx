const React = require("react");


const shapes = [ "Polar Rose", "Trigonometric function", "Polygon", "Spiral", "Superellipse", "Astroid" ];

function ShapeSelector(props) {
    return (
        <div className="shapeSelector">
            <select className="select" defaultValue={shapes[0]}>
                {shapes.map(shape => <option value={shape}>{shape}</option>)}
            </select>
        </div>
    );
}

export default ShapeSelector;