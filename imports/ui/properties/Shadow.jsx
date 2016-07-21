import React, { Component } from 'react'

export default class Shadow extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    let horizontal = document.getElementById("horizontal").value,
    vertical = $("#vertical").val(),
    blur = $("#blur").val(),
    spread = $("#spread").val(),
    color = $("#shadow-color").colorpicker("getValue"),
    value = horizontal+"px "+vertical+"px "+blur+"px "+spread+"px "+color
    console.log(horizontal,vertical,color);
    console.log(value);
    this.props.changeStyle("boxShadow",value)
  }
  componentDidMount(){
    let self=this
    $(".colorpicker-component").colorpicker({
      color: "rgba(0,0,0,1)",
      format: "rgba"
    })
    $(".colorpicker-component").on("changeColor",function(e){
      self.handleChange(e)
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
    let boxShadow = [0,0,0,0,"rgba(0,0,0,0)"]
    if(this.props.style.boxShadow){
      boxShadow = this.props.style.boxShadow.split("px")
      console.log(boxShadow);
    }
    return (
  <div className="panel">
    <div className="panel-heading sidebar-header" onClick={this.toggleArrow} role="tab" id="headingShadow" data-toggle="collapse" data-parent="#accordion" href="#collapseShadow" aria-expanded="true" aria-controls="collapseOne">
    <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
      <span className="panel-title">
        SHADOW
      </span>
    </div>
    <div id="collapseShadow" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingShadow">
      <div className="panel-body">
      <div className="row">
        <div className="col-md-2">
        <span className="dark-label">Length</span>
        </div>
          <div className="col-md-5">
          <div className="input-collection">
            <input type="number" className="dark-input" id="horizontal" value={parseInt(boxShadow[0])} onChange={this.handleChange}/>
            <label className="dark-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</label>
          </div>
          </div>
          <div className="col-md-5">
          <div className="input-collection">
          <input type="number" className="dark-input" id="vertical" value={parseInt(boxShadow[1])} onChange={this.handleChange}/>
          <label className="dark-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y</label>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
          <span className="dark-label">Radius</span>
          </div>
            <div className="col-md-5">
            <div className="input-collection">
              <input type="number" className="dark-input" id="blur" value={parseInt(boxShadow[2])} onChange={this.handleChange}/>
              <label className="dark-label">Blur</label>
            </div>
            </div>
            <div className="col-md-5">
            <div className="input-collection">
            <input type="number" className="dark-input" id="spread" value={parseInt(boxShadow[3])} onChange={this.handleChange}/>
            <label className="dark-label">Spread</label>
            </div>
            </div>
          </div>
      <div className="row">
        <div className="col-md-2">
          <span className="dark-label">Shadow-Color</span>
        </div>
        <div className="col-md-10">
        <div id="colorpicker" className="input-collection input-group colorpicker-component" id="shadow-color">
          <span className="input-group-addon"><i style={{backgroundColor:boxShadow[4]}}></i></span>
          <input type="text"/>
        </div>
        </div>
        <hr/>
      </div>
      </div>
      </div>
    </div>
    )
  }
}
