import React from 'react';
import './App.css';
let marked = require("marked");

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown = (markdown) => {
    this.setState({markdown});
  }

  render(){

    return (
      <div className="App">
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="container">
          <div className="row">
            <div id="content" className="col-md-6">
              <h2 className="text-center">Markdown Input</h2>
    <textarea id="rstInputArea"className="inputArea" value={this.state.markdown} onChange={ (e) => { this.updateMarkdown(e.target.value); } }></textarea>

              </div>
            <div className="col-md-6">
              <h2 className="text-center">Preview</h2>
              <div id="rstPreviewArea" className="outputArea" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
