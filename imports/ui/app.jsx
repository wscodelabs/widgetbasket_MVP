import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import PreviewContainer from './PreviewContainer.jsx'
import MenuBar from './menuBar.jsx'
//import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row top-bar">
            <MenuBar />
        </div>
        <div className="row">
          <div className="component-div col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6">
              <PreviewContainer />
          </div>
          <div className="col-md-3">asdasda</div>
        </div>
      </div>

    );
  }
}
