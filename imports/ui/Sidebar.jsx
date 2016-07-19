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
  render() {

    let SelectedComponent= componentHolderName[this.state.selectedComponent];
    console.log(SelectedComponent)
    return (

      <div className="sidebar">
        <div className="sidebar-header">
          <span>COMPONENTS</span>
        </div>
        <div className="sidebar-tabs">
          <a className="sidebar-links sidebar-links-active" data-type="SimpleComponents" onClick={this.toggleLink}>Templates</a>
          <a className="sidebar-links last" data-type="OnlineComponents" onClick={this.toggleLink}> Online</a>
        </div>
        <div className="row">
          <SelectedComponent />
        </div>
      </div>

    );
  }
}
