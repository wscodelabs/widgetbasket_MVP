import React, { Component } from 'react'

export default class DefaultProperty extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e,val){
    let property = $(e.target).data("property"),
    value = val || $(e.target).val()
    this.props.changeStyle(property,value)
  }
  render() {
    let transformInt=0
    if(this.props.style.transform){
      let transform = this.props.style.transform.split("(")[1]
      transformInt = parseInt(transform)
    }
    return (
      <div className="default-property">
      <div className="row">
        <div className="col-md-2">
        <span className="dark-label">Position</span>
        </div>
          <div className="col-md-5">
          <div className="input-collection">
            <input type="number" className="dark-input" data-property="left" value={parseInt(this.props.style.left)} onChange={this.handleChange}/>
            <label className="dark-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</label>
          </div>
          </div>
          <div className="col-md-5">
          <div className="input-collection">
          <input type="number" className="dark-input" data-property="top" value={parseInt(this.props.style.top)} onChange={this.handleChange}/>
          <label className="dark-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y</label>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
          <span className="dark-label">Size</span>
          </div>
            <div className="col-md-5">
            <div className="input-collection">
              <input type="number" className="dark-input" data-property="width" value={parseInt(this.props.style.width)} onChange={this.handleChange}/>
              <label className="dark-label">&nbsp;&nbsp;Width</label>
            </div>
            </div>
            <div className="col-md-5">
            <div className="input-collection">
            <input type="number" className="dark-input" data-property="height" value={parseInt(this.props.style.height)} onChange={this.handleChange}/>
            <label className="dark-label">&nbsp;&nbsp;Height</label>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
            <span className="dark-label">Transform</span>
            </div>
              <div className="col-md-5">
              <div className="input-collection">
                <input type="number" data-property="transform" value={transformInt} className="dark-input" onChange={(e) => this.handleChange(e,'rotate('+e.target.value+'deg)')}/>
                <label className="dark-label">&nbsp;&nbsp;rotate</label>
              </div>
              </div>
              <div className="col-md-5">
              <div className="input-collection">
              <input type="number" data-property="transform" className="dark-input" onChange={(e) => this.handleChange(e,'rotate('+e.target.value*90+'deg)')}/>
              <label className="dark-label">&nbsp;&nbsp;&nbsp;flip</label>
              </div>
              </div>
            </div>
          </div>
    )
  }
}
