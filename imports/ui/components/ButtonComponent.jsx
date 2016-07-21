import React, { Component } from 'react';
import Random from 'random-gen'

export default class ButtonComponent extends Component {
  dragstart(e){
    let randomKey = Random.alphaNum(16)
    window.selectedElement={randomKey:randomKey,type:'button',style:{
    position:'absolute',
    width: '92px',
    height: '32px',
    color: '#fff',
    backgroundColor: '#286090',
    borderColor: '#204d74',
    display: 'inline-block',
    padding: '6px 12px',
    'marginBottom': 0,
    'fontSize': '14px',
    'fontWeight': 400,
    'lineHeight': 1.42857143,
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle',
    'msTouchAction': 'manipulation',
    'touchAction': 'manipulation',
    cursor: 'pointer',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'msUserSelect': 'none',
    'userSelect': 'none',
    'backgroundImage': 'none',
    border: '1px solid transparent',
    'borderRadius': '4px'}}
  }
  render() {
    return (
      <div className="well well-sm col-md-6 text-center menu-item" draggable="true" onDragStart={this.dragstart}>
        <h6 className="btn-icon">click Here! </h6>
        <a href="#" className="glyphicon ">Button</a>
      </div>

    );
  }
}
