import React, { Component } from 'react';

//import Task from './Task.jsx';

// App component - represents the whole app
export default class MenuBar extends Component {

  render() {
    return (
      <div className="menu-bar black_3d">
         <div className="row">
           <div className="col-md-9">

           </div>
           <div className="col-md-2 col-md-offset-1">
             <div className="">
                <a className="btn btn-primary" onClick={this.props.saveWidget}> <i className="fa fa-2x"></i> Save</a>
             </div>
           </div>
         </div>
      </div>
    );
  }
}
