import React, { Component } from 'react';
import PreviewButtonComponent from './previewComponents/PreviewButtonComponent.jsx'

const componentHolderName = {'button':PreviewButtonComponent}
export default class PreviewContainer extends Component {
  constructor(props){
    super(props)
    this.dragend = this.dragend.bind(this)
  }
  dragover(e){
    e.preventDefault()
    $(".preview-container").css("border","1px dashed black")
  }
  dragend(e){
    this.props.addElement(window.selectedElement)
    this.props.addElementInWidget(window.selectedElement.randomKey)
    $(".preview-container").css("border","none")
    this.props.setSelectedElement(window.selectedElement.randomKey)
    $(".previewComponents").removeClass("highlight")
    setTimeout(function(){
        $("[data-randomKey="+window.selectedElement.randomKey+"]").addClass("highlight")
        window.selectedElement=null
    },0)
  }
  dragleave(e){
    $(".preview-container").css("border","none")
  }
  render() {
    let allElements = this.props.widget.elements.map((randomKey)=>{
      let element = this.props.elements[randomKey]
      let Component = componentHolderName[element.type]
      return <Component style={element.style} key={randomKey} randomKey={randomKey} setSelectedElement={this.props.setSelectedElement}/>
    })
    return (
     <div className="preview-container" style={{height:'300px',background:'#fff',position:'relative'}} onDragOver={this.dragover} onDragLeave={this.dragleave} onDrop={this.dragend}>
     {allElements}
     </div>
    );
  }
}
