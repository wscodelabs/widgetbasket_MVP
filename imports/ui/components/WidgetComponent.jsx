import React, { Component } from 'react';


// App component - represents the whole app
export default class WidgetComponent extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.props.changeState({widget:this.props.widgetInfo.widget,elements:this.props.widgetInfo.elements})
  }
  render() {
    return (
      <button className="btn btn-primary" onClick={this.handleChange}>Widget</button>
    );
  }
}
