import React, { Component } from 'react'

export default class Border extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e,val){
    let property = $(e.target).data("property"),
    value = val || $(e.target).val()
    console.log(property,value);
    this.props.changeStyle(property,value)
  }
  componentDidMount(){
    let self=this
    $(".colorpicker-component").colorpicker({
      color: "#000000"
    })
    $(".colorpicker-component").on("changeColor",function(e){
      let value = $(e.target).colorpicker("getValue"),
      property = $(e.target).attr("data-property")
      self.props.changeStyle(property,value)
    })
  }

  toggleArrow(e){
    if($(e.target).closest("div").find(".glyphicon").hasClass("glyphicon-chevron-up")){
      $(e.target).closest("div").find(".glyphicon").addClass("glyphicon-chevron-down")
      $(e.target).closest("div").find(".glyphicon").removeClass("glyphicon-chevron-up")
    }
    else {
      $(e.target).closest("div").find(".glyphicon").addClass("glyphicon-chevron-up")
      $(e.target).closest("div").find(".glyphicon").removeClass("glyphicon-chevron-down")
    }

  }

  render() {
    return (

  <div className="panel">
    <div className="panel-heading sidebar-header" onClick={this.toggleArrow} role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseBorder" aria-expanded="true" aria-controls="collapseOne">
    <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
      <span className="panel-title">
        BORDER
      </span>
    </div>
    <div id="collapseBorder" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div className="panel-body">
      <div className="row">
        <div className="col-md-2">
          <span className="dark-label">Border</span>
        </div>
        <div className="col-md-3">
        <div className="input-collection">
          <input type="number" className="dark-input" data-property="borderWidth" value={parseInt(this.props.style.borderWidth)} onChange={this.handleChange}/>
          <label className="dark-label">Width</label>
        </div>
        </div>
        <div className="col-md-4">
        <div id="colorpicker" style={{marginLeft:'20px'}} className="input-collection input-group colorpicker-component" data-property="borderColor">
          <span className="input-group-addon"><i style={{backgroundColor:this.props.style.borderColor}}></i></span>
        </div>
        </div>
        <div className="col-md-3">
        <div className="input-collection">
          <select className="dark-input" style={{marginLeft:"-9px"}} data-property="borderStyle" value={this.props.style.borderStyle} onChange={this.handleChange}>
            <option value={null}>Select..</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
          </select>
          <label className="dark-label" style={{marginLeft:"4px"}}>Style</label>
        </div>
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-md-2">
        <span className="dark-label">Radius</span>
        </div>
          <div className="col-md-3">
          <div className="input-collection">
            <input type="number" style={{width:"40px"}} className="dark-input" data-property="borderTopLeftRadius" value={parseInt(this.props.style.borderTopLeftRadius)} onChange={this.handleChange}/>
            <label className="dark-label" style={{marginLeft:"35px"}}>TL</label>
          </div>
          </div>
          <div className="col-md-2">
          <div className="input-collection">
          <input type="number" style={{marginLeft:"-5px",width:"40px"}} className="dark-input" data-property="borderTopRightRadius" value={parseInt(this.props.style.borderTopRightRadius)} onChange={this.handleChange}/>
          <label className="dark-label" style={{marginLeft:"8px"}}>TR</label>
          </div>
          </div>
          <div className="col-md-3">
          <div className="input-collection">
            <input type="number" style={{marginLeft:"-5px",width:"40px"}} className="dark-input" data-property="borderBottomLeftRadius" value={parseInt(this.props.style.borderBottomLeftRadius)} onChange={this.handleChange}/>
            <label className="dark-label" style={{marginLeft:"8px"}}>BL</label>
          </div>
          </div>
          <div className="col-md-2">
          <div className="input-collection">
          <input type="number" style={{marginLeft:"-28px",width:"40px"}} className="dark-input" data-property="borderBottomRightRadius" value={parseInt(this.props.style.borderBottomRightRadius)} onChange={this.handleChange}/>
          <label className="dark-label" style={{marginLeft:"-11px"}}>BR</label>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}
