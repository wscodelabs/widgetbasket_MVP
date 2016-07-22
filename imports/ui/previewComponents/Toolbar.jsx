import React, { Component } from 'react';

export default class Toolbar extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }
  handleClick(e,val){
    let property = $(e.target).closest("button").attr("data-property") || $(e.target).attr("data-property"),
    value = val || $(e.target).closest("button").attr("data-value") || $(e.target).val()
    this.props.changeStyle(property,value)
  }
  changeValue(e){
    this.props.changeValue($(e.target).val())
  }
  render() {
    let offset = $(".preview-container").offset(),
    top = parseInt(this.props.style.top)+offset.top-35,
    left =  parseInt(this.props.style.left)+offset.left
    return (
        <div className="sidebar-header animated slideInDown" style={{top:top,left:left,position:"absolute"}}>
          <div className="toolbar-properties">
            <div className="btn-group">
              <button type="button" className="btn btn-dark" data-property="fontWeight" onClick={(e)=> this.handleClick(e,{'bold':'normal','normal':'bold'}[this.props.style.fontWeight])}>
                <i className="glyphicon glyphicon-bold"></i>
              </button>
              <button type="button" className="btn btn-dark" data-property="fontStyle" onClick={(e)=> this.handleClick(e,{'italic':'normal','normal':'italic'}[this.props.style.fontStyle])}>
                <i className="glyphicon glyphicon-italic"></i>
              </button>
              <button type="button" className="btn btn-dark" data-property="textDecoration" onClick={(e)=> this.handleClick(e,{'underline':'none','none':'underline'}[this.props.style.textDecoration])}>
                <i className="fa fa-underline"></i>
              </button>
            </div>
          </div>
          <div className="toolbar-properties">
            <div className="btn-group">
              <button type="button" className="btn btn-dark"  data-value="left" data-property="textAlign" onClick={this.handleClick}>
                <i className="glyphicon glyphicon-align-left"></i>
              </button>
              <button type="button" className="btn btn-dark"  data-value="center" data-property="textAlign" onClick={this.handleClick}>
                <i className="glyphicon glyphicon-align-center"></i>
              </button>
              <button type="button" className="btn btn-dark"  data-value="right" data-property="textAlign" onClick={this.handleClick}>
                <i className="glyphicon glyphicon-align-right"></i>
              </button>
            </div>
          </div>
          <div className="toolbar-properties">
            <div className="input-collection" style={{float:"right"}}>
            <input type="text" style={{height:"35px",width:"100px"}} className="dark-input" value={this.props.value} onChange={this.changeValue}/>
            <input type="number" style={{height:"35px"}} className="dark-input" data-property="fontSize" value={parseInt(this.props.style.fontSize)} onChange={(e)=> this.handleClick(e,e.target.value)}/>
              <select className="dark-input" style={{marginLeft:"0px",height:"35px",width:'100px'}} data-property="fontFamily" value={this.props.style.fontFamily} onChange={this.handleChange}>
                <option value={null}>Select..</option>
                <option value="inset">inset</option>
                <option value="outset">outset</option>
                <option value="dashed">dashed</option>
                <option value="solid">solid</option>
              </select>
              </div>
          </div>
        </div>
    )
  }
}
