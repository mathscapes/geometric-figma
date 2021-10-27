import * as React from 'react'
import * as ReactDOM from 'react-dom'
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
    return <div>
      <div className="shapeSelector">
        <p className="label">Select shape</p>
        <select className="select">
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
        </select>
      </div>
      <div className="fieldSet">
        <div className="field">
          <label className="label">A</label>
          <input className="textbox" type="number" />
          <input type="range" min="1" max="10" className="slider"/> 
        </div>
        <div className="field">
          <label className="label">A</label>
          <input className="textbox" type="number" />
          <input type="range" min="1" max="10" className="slider"/> 
        </div>
        <div className="field">
          <label className="label">A</label>
          <input className="textbox" type="number" />
          <input type="range" min="1" max="10" className="slider"/> 
        </div>
        <div className="field">
          <label className="label">A</label>
          <input className="textbox" type="number" />
          <input type="range" min="1" max="10" className="slider"/> 
        </div>
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
