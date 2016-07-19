import React, { Component } from 'react';

//import Task from './Task.jsx';

// App component - represents the whole app
export default class ImageComponent extends Component {
  render() {
    return (
      <div className="well well-sm col-md-6 text-center menu-item"  >
        <h6>
          <i className ="glyphicon glyphicon-picture text-center" ></i>
        </h6>
        <a href="#" className="glyphicon ">Image</a>
      </div>

    );
  }
}