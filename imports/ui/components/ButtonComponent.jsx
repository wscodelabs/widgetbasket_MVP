import React, { Component } from 'react';

//import Task from './Task.jsx';

// App component - represents the whole app
export default class ButtonComponent extends Component {
  render() {
    return (
      <div className="well well-sm col-md-6 text-center menu-item"  >
        <h6 className="btn-icon">click Here! </h6>
        <a href="#" className="glyphicon ">Button</a>
      </div>

    );
  }
}