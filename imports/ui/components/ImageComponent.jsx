import React, { Component } from 'react';
import Random from 'random-gen'

export default class ImageComponent extends Component {
  dragstart(e){
    let offset = $(e.target).closest("div").offset()
    window.cursorOffset={left:e.clientX-offset.left,top:e.clientY-offset.top}
    let randomKey = Random.alphaNum(16)
    window.selectedElement={randomKey:randomKey,value:"data:image/jpeg;base64,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",type:'image',style:{
    backgroundColor: "none",
    width:"118px",
    height:"102px",
    position:"absolute",
    WebkitAnimationDuration:"2s"
  }}
  }
  render() {
    return (
      <div className="well well-sm col-md-6 text-center menu-item" draggable="true" onDragStart={this.dragstart}>
        <h6>
          <i className ="glyphicon glyphicon-picture text-center" ></i>
        </h6>
        <a href="#" className="glyphicon ">Image</a>
      </div>

    );
  }
}
