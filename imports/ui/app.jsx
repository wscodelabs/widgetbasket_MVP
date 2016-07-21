import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import PreviewContainer from './PreviewContainer.jsx'
import MenuBar from './menuBar.jsx'
import RightSideBar from './RightSideBar.jsx'


// App component - represents the whole app
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {elements:{},selectedElement:null,widget:{style:{},elements:[]},widgetsInfo:{}}
    this.addElementInWidget = this.addElementInWidget.bind(this)
    this.addElement = this.addElement.bind(this)
    this.setSelectedElement = this.setSelectedElement.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
    this.saveWidget = this.saveWidget.bind(this)
    this.changeState = this.changeState.bind(this)
  }
  componentDidMount(){
    let self=this
    Meteor.call('getWidget',function(err,res){
      if(!err){
        console.log(res);
        self.setState({widgetsInfo:res})
      }
    })

  }
  changeState(widgetInfo){
    console.log(widgetInfo);
    this.setState({widget:widgetInfo.widget})
    this.setState({elements:widgetInfo.elements})
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
  saveWidget(){
    let elements = this.state.elements,
    widget = this.state.widget
    Meteor.call('insertWidget',widget,elements,function(err,res){
      if(!err){
        console.log(res+" inserted");
      }
      else {
        console.log(err.reason);
      }
    })
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
    return (
      <div>
        <div className="row top-bar">
            <MenuBar saveWidget={this.saveWidget} />
        </div>
        <div className="row">
          <div className="component-div col-md-3 less-padding left-bar">
            <Sidebar widgetsInfo={window.clone(this.state.widgetsInfo)} changeState={this.changeState}/>
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
