import React, { Component } from 'react';

//import Task from './Task.jsx';

// App component - represents the whole app
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <span>COMPONENTS</span>
        </div>
        <div className="sidebar-tabs">
          <a className="sidebar-links">Templates</a>
          <a className="sidebar-links">Online</a>
        </div>
      </div>
    );
  }
}
