import React, { Component } from 'react';
import WidgetComponent from './WidgetComponent.jsx'
//import Task from './Task.jsx';

import LabelComponent from './LabelComponent.jsx'

import ButtonComponent from './ButtonComponent.jsx'

import ImageComponent from './ImageComponent.jsx'


// App component - represents the whole app
export default class OnlineComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let allElements = <label>Loading...</label>
    console.log(this.props.widgetsInfo)
    if(this.props.widgetsInfo){
      allElements = this.props.widgetsInfo.map((widgetInfo)=>{
        return <WidgetComponent widgetInfo={Object.assign({},widgetInfo)} changeState={this.props.changeState} key={widgetInfo.widget._id}/>
    })
    }

    return (
      <div>
      {allElements}
      </div>

    );
  }
}
