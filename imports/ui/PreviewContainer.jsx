import React, { Component } from 'react';
import PreviewButtonComponent from './previewComponents/PreviewButtonComponent.jsx'
import PreviewLabelComponent from './previewComponents/PreviewLabelComponent.jsx'
const componentHolderName = {'button':PreviewButtonComponent,'label':PreviewLabelComponent}
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
    let offset = $(".preview-container").offset()
    console.log(e.clientX,e.clientY,offset);
    window.selectedElement.style.left=e.clientX-offset.left-window.cursorOffset.left
    window.selectedElement.style.top=e.clientY-offset.top-window.cursorOffset.top
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
