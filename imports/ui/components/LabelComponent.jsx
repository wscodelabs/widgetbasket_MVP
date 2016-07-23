import React, { Component } from 'react';
import Random from 'random-gen'
//import Task from './Task.jsx';

// App component - represents the whole app
export default class LabelComponent extends Component {
  dragstart(e){
    let offset = $(e.target).offset()
    window.cursorOffset={left:e.clientX-offset.left,top:e.clientY-offset.top}
    let randomKey = Random.alphaNum(16)
    window.selectedElement={randomKey:randomKey,value:"Some Text",type:'label',style:{
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "none",
    width:"100px",
    height:"35px",
    display: "inline",
    padding: "1px",
    fontSize: "12px",
    'fontWeight': 'normal',
    'textDecoration':'none',
    'fontStyle':'normal',
    lineHeight: 1,
    color: "#000000",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25em",
    position:"absolute",
    WebkitAnimationDuration:"2s"
  }}
  }
  render() {
    return (
      <div className="well well-sm col-md-6 text-center menu-item">
        <h6  draggable="true" onDragStart={this.dragstart} >
          <i className ="glyphicon glyphicon-font text-center" ></i>
        </h6>
        <a href="#" className="glyphicon">Label</a>
      </div>

    );
  }
}
