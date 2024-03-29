import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import PreviewContainer from './PreviewContainer.jsx'
import MenuBar from './menuBar.jsx'
import RightSideBar from './RightSideBar.jsx'
import Toolbar from './previewComponents/Toolbar.jsx'

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
    this.changeValue = this.changeValue.bind(this)
  }
  componentDidMount(){
    let self=this
    Meteor.call('getWidget',function(err,res){
      if(!err){
        self.setState({widgetsInfo:res})
      }
    })

  }
  changeValue(val){
    let currentElements = this.state.elements
    currentElements[this.state.selectedElement].value=val
    this.setState({elements:currentElements})
  }
  changeState(widgetInfo){
    this.setState({widget:Object.assign({},widgetInfo.widget)})
    let newElements={}
    _.each(widgetInfo.elements,function(element,index){
      element.style=Object.assign({},element.style)
      newElements[element.randomKey]=Object.assign({},element)
    })
    this.setState({elements:newElements})
  }
  addElementInWidget(randomKey){
    let currentWidget = this.state.widget
    currentWidget.elements.push(randomKey)
    this.setState({widget:currentWidget})
  }
  addElement(element){
    let currentElements = this.state.elements
    currentElements[element.randomKey]=element
    this.setState({elements:currentElements})
  }
  saveWidget(){
    let elements = this.state.elements,
    widget = this.state.widget,
    dom = $("#container_preview").html()
    console.log(dom);
    console.log(elements);
    Meteor.call('insertWidget',widget,elements,dom,function(err,res){
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
    let style = {},
    toolbar = null
    if(this.state.elements[this.state.selectedElement])
      style = this.state.elements[this.state.selectedElement].style
    if(this.state.selectedElement && (this.state.elements[this.state.selectedElement].type=="button" || this.state.elements[this.state.selectedElement].type=="label")){
      toolbar = <Toolbar style={style} changeStyle={this.changeStyle} value={this.state.elements[this.state.selectedElement].value} changeValue={this.changeValue}/>
    }
    return (
      <div>
        <div className="row top-bar">
            <MenuBar saveWidget={this.saveWidget} />
        </div>
        <div className="row">
          <div className="component-div col-md-3 less-padding left-bar">
            <Sidebar widgetsInfo={window.clone(this.state.widgetsInfo)} changeState={this.changeState} setSelectedElement={this.setSelectedElement}/>
          </div>
          <div className="col-md-6 less-padding" id="container_preview">
              <PreviewContainer widget={this.state.widget} elements={this.state.elements} addElementInWidget={this.addElementInWidget} addElement={this.addElement} setSelectedElement={this.setSelectedElement}/>
          </div>
          <div className="col-md-3 right-bar less-padding">
            <RightSideBar style={style} changeStyle={this.changeStyle}/>
          </div>
          {toolbar}
        </div>
      </div>

    );
  }
}
