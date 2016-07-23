import React, { Component } from 'react';

export default class PreviewLabelComponent extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    $(".previewComponents").removeClass("highlight")
    $(e.target).addClass("highlight")
    this.props.setSelectedElement($(e.target).attr("data-randomKey"))
  }
  render() {
    return (
        <span style={this.props.style} data-randomKey={this.props.randomKey} className="previewComponents" onClick={this.handleClick}>{this.props.value}</span>
    )
  }
}
