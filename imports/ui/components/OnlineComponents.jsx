import React, { Component } from 'react';

//import Task from './Task.jsx';

import LabelComponent from './LabelComponent.jsx'

import ButtonComponent from './ButtonComponent.jsx'

import ImageComponent from './ImageComponent.jsx'


// App component - represents the whole app
export default class OnlineComponent extends Component {

  render() {
    return (
      <div className="animated slideInLeft">
        <div className="col-md-6 ">
          <LabelComponent />
        </div>
        <div className="col-md-6">
          <ButtonComponent />
        </div>
        <div className="col-md-6">
          <ImageComponent />
        </div>
      </div>

    );
  }
}