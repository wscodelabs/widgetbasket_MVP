import React, { Component } from 'react';
import SimpleComponents from './components/SimpleComponents.jsx'
import OnlineComponents from './components/OnlineComponents.jsx'
//import Task from './Task.jsx';

const componentHolderName={ SimpleComponents,OnlineComponents}
// App component - represents the whole app
export default class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedComponent:"SimpleComponents"
    }
    this.toggleLink=this.toggleLink.bind(this)
  }

  toggleLink(e){
    const componentType = $(e.target).attr('data-type')
    console.log(this)
    if(componentType == this.state.selectedComponent)
    return

    $('.sidebar-links').removeClass('sidebar-links-active')
    $(e.target).addClass('sidebar-links-active')
    this.setState({selectedComponent:componentType})

  }

  expandSearch(e){
    $(".header").text("")
    $("#component-search").addClass("expanded")
  }

  shrinkSearch(e){
    $(".header").text("COMPONENT")
    $("#component-search").removeClass("expanded")
  }

  render() {
    let SelectedComponent= componentHolderName[this.state.selectedComponent];
    console.log(SelectedComponent)
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="header">COMPONENTS</span>
          <div id="component-search" className="right">
            <div className="j-icon-search" onClick={this.expandSearch}><i className="fa fa-search"></i></div>
            <div className="j-icon j-icon-close right" onClick={this.shrinkSearch}><i className="fa fa-remove"></i></div><div className="component-search-bar right">
              <input className="left search-bar-input" placeholder="Search Components" name="ui-search"/>
            </div>
          </div>
        </div>
        <div className="sidebar-tabs">
          <a className="sidebar-links sidebar-links-active" data-type="SimpleComponents" onClick={this.toggleLink}>Templates</a>
          <a className="sidebar-links last" data-type="OnlineComponents" onClick={this.toggleLink}> Online</a>
        </div>
        <div className="row">
          <SelectedComponent widgetsInfo={this.props.widgetsInfo} changeState={this.props.changeState}/>
        </div>
      </div>
    );
  }
}
