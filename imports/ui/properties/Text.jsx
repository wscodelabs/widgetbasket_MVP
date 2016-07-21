import React, { Component } from 'react'

export default class Text extends Component {
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
    $("input[type='radio']").change(function(e){
      self.props.changeStyle(e.target.name,e.target.value)
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
    <div className="panel-heading sidebar-header" onClick={this.toggleArrow} role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseText" aria-expanded="true" aria-controls="collapseText">
    <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
      <span className="panel-title">
        TEXT
      </span>
    </div>
    <div id="collapseText" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div className="panel-body">
      <div className="row">
        <div className="col-md-2">
          <span className="dark-label">Color</span>
        </div>
        <div className="col-md-10">
        <div id="colorpicker" className="input-collection input-group colorpicker-component" data-property="color">
          <span className="input-group-addon"><i style={{backgroundColor:this.props.style.color}}></i></span>
          <input type="text" data-property="color"/>
        </div>
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-md-2">
        <span className="dark-label">letter-spacing</span>
        </div>
          <div className="col-md-10">
          <div className="input-collection">
            <input type="number" className="dark-input" data-property="letterSpacing" value={parseInt(this.props.style.letterSpacing)} onChange={this.handleChange}/>
          </div>
          </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        <span className="dark-label">text-decoration</span>
        </div>
          <div className="col-md-8">
          <div className="input-collection">
            <input type="radio" name="textDecoration" value="underline" id="underline"/>
            <label htmlFor="underline" className="dark-label">Underline</label>
            <input type="radio" name="textDecoration" value="overline" id="overline"/>
            <label htmlFor="overline" className="dark-label">Overline</label>
            <input type="radio" name="textDecoration" value="line-through" id="line-through"/>
            <label htmlFor="line-through" className="dark-label">line-through</label>
            <input type="radio" name="textDecoration" value="blink" id="blink"/>
            <label htmlFor="blink" className="dark-label">Blink</label>
            <input type="radio" name="textDecoration" value="none" id="none"/>
            <label htmlFor="none" className="dark-label">None</label>
          </div>
          </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        <span className="dark-label">text-align</span>
        </div>
          <div className="col-md-8">
          <div className="input-collection">
            <input type="radio" name="textAlign" value="left" id="left"/>
            <label htmlFor="left" className="dark-label">Left</label>
            <input type="radio" name="textAlign" value="center" id="center"/>
            <label htmlFor="center" className="dark-label">Center</label>
            <input type="radio" name="textAlign" value="right" id="right"/>
            <label htmlFor="right" className="dark-label">Right</label>
            <input type="radio" name="textAlign" value="justify" id="justify"/>
            <label htmlFor="jsutify" className="dark-label">Justify</label>
            <input type="radio" name="textAlign" value="inherit" id="inherit"/>
            <label htmlFor="inherit" className="dark-label">Inherit</label>
            <input type="radio" name="textAlign" value="initial" id="initial"/>
            <label htmlFor="initial" className="dark-label">Initial</label>
          </div>
          </div>
      </div>
      </div>
      </div>
    </div>
    )
  }
}
