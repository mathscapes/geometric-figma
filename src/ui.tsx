import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { Label } from 'react-figma-plugin-ds';
// import { echo } from '@mathscapes/geometric';

import './ui.css'

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
    const t = "Hello World 4";
    return <div>
      <p>{t}</p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))
