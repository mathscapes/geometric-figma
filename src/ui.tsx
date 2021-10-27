import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Field from './components/Field'
import ShapeSelector from './components/ShapeSelector'
// import { Label } from 'react-figma-plugin-ds';
// import { echo } from '@mathscapes/geometric';

// import './ui.css'

import './styles.css'



declare function require(path: string): any

class App extends React.Component {
  textbox: HTMLInputElement

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = '5';
    this.textbox = element;
  }

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  render() {
    const fields = [{labelTitle:"A", min:"1", max:"10"},
    {labelTitle:"B", min:"1", max:"10"},
    {labelTitle:"C", min:"1", max:"10"},
    {labelTitle:"D", min:"1", max:"10"}];

    const shapes = [
      {
          "name": "Polar Rose",
          "slug": "polar-rose",
          "hint": "A sinusoid plotted in polar coordinates",
          "sliders": [
              { "title": "Amplitude", "label": "a", "min": 15, "max": 200, "symbol": "a", "defaultValue": 50 },
              { "title": "Petal factor", "label": "n", "min": 1, "max": 128, "symbol": "n", "defaultValue": 50 },
              { "title": "Spatial factor", "label": "d", "min": 1, "max": 128, "symbol": "d", "defaultValue": 50 },
              { "title": "Phase (in degrees)", "label": "λ", "min": 0, "max": 360, "symbol": "gm", "defaultValue": 50 },
              { "title": "Offset Parameter", "label": "c", "min": 0, "max": 100, "symbol": "c", "defaultValue": 50 }
          ]
      },
      {
          "name": "Sine",
          "slug": "sine",
          "hint": "Real functions which relate an angle of a right-angled triangle to ratios of two side lengths",
          "sliders": [
              { "label": "a", "min": 15, "max": 200, "symbol": "a", "defaultValue": 100 },
              { "label": "b", "min": 1, "max": 128, "symbol": "n", "defaultValue": 1 },
              { "label": "c", "min": 1, "max": 128, "symbol": "d", "defaultValue": 1 },
              { "label": "d", "min": 0, "max": 360, "symbol": "gm", "defaultValue": 1 },
              { "label": "e", "min": 0, "max": 100, "symbol": "c", "defaultValue": 1 }
          ]
      },
      
  ];

    return <div>
      <ShapeSelector />
      <div className="fieldSet">
        {fields.map(field => <Field labelTitle={field.labelTitle} min={field.min} max={field.max}/>)}
      </div>
      <div className="buttonSet">
        <button className="button">Create</button>
        <button className="button">Cancel</button>
      </div>
    </div>
  }
}

// ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('react-page'))
