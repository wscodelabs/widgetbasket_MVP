import React, { Component } from 'react'

export default class Fill extends Component {
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
    <div className="panel-heading sidebar-header" onClick={this.toggleArrow} role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
      <span className="panel-title">
        FILL
      </span>
    </div>
    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div className="panel-body">
      <div className="row">
        <div className="col-md-2">
          <span className="dark-label">BgColor</span>
        </div>
        <div className="col-md-10">
        <div id="colorpicker" className="input-collection input-group colorpicker-component" data-property="backgroundColor">
          <span className="input-group-addon"><i style={{backgroundColor:this.props.style.backgroundColor}}></i></span>
          <input type="text" data-property="backgroundColor"/>
        </div>
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-md-2">
          <span className="dark-label">Opacity</span>
        </div>
        <div className="col-md-10">
        <div className="input-collection">
          <input type="range" className="slider" max="100" data-property="opacity" onInput={(e)=> this.handleChange(e,e.target.value/100)} />
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}
