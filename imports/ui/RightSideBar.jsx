import React, { Component } from 'react'
import DefaultProperty from './properties/DefaultProperty.jsx'
import Fill from './properties/Fill.jsx'
import Text from './properties/Text.jsx'
import Border from './properties/Border.jsx'
import Shadow from './properties/Shadow.jsx'
import Animation from './properties/Animation.jsx'
export default class RightSideBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <span>PROPERTIES</span>
        </div>
        <div className="sidebar-content">
          <DefaultProperty style={this.props.style} changeStyle={this.props.changeStyle}/>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <Fill style={this.props.style} changeStyle={this.props.changeStyle}/>
            <Text style={this.props.style} changeStyle={this.props.changeStyle}/>
            <Border style={this.props.style} changeStyle={this.props.changeStyle}/>
            <Shadow style={this.props.style} changeStyle={this.props.changeStyle}/>
            <Animation style={this.props.style} changeStyle={this.props.changeStyle}/>
          </div>

        </div>

      </div>
    )
  }
}
