import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import PreviewContainer from './PreviewContainer.jsx'
import MenuBar from './menuBar.jsx'
import RightSideBar from './RightSideBar.jsx'


// App component - represents the whole app
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {elements:{},selectedElement:null,widget:{style:{},elements:[]}}
    this.addElementInWidget = this.addElementInWidget.bind(this)
    this.addElement = this.addElement.bind(this)
    this.setSelectedElement = this.setSelectedElement.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
  }
  componentDidMount(){
    let self=this

  }
  addElementInWidget(randomKey){
    let currentWidget = this.state.widget
    currentWidget.elements.push(randomKey)
    this.setState({widget:currentWidget})
  }
  addElement(element){
    let currentElements = this.state.elements
    currentElements[element.randomKey]=element
    this.setState(currentElements)
  }
  setSelectedElement(element){
    this.setState({selectedElement:element})
  }
  changeStyle(property,value){
    let elements = this.state.elements
    elements[this.state.selectedElement].style[property]=value
    this.setState({elements:elements})
  }
  render() {
    let style = {}
    if(this.state.elements[this.state.selectedElement])
      style = this.state.elements[this.state.selectedElement].style
    console.log(style);
    return (
      <div>
        <div className="row top-bar">
            <MenuBar />
        </div>
        <div className="row">
          <div className="component-div col-md-3 less-padding left-bar">
            <Sidebar/>
          </div>
          <div className="col-md-6 less-padding">
              <PreviewContainer widget={this.state.widget} elements={this.state.elements} addElementInWidget={this.addElementInWidget} addElement={this.addElement} setSelectedElement={this.setSelectedElement}/>
          </div>
          <div className="col-md-3 right-bar less-padding">
            <RightSideBar style={style} changeStyle={this.changeStyle}/>
          </div>
        </div>
      </div>

    );
  }
}
