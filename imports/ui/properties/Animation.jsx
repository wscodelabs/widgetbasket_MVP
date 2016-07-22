import React, { Component } from 'react'

export default class Animation extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e,val){
    let property = $(e.target).data("property"),
    value = val || $(e.target).val()
    this.props.changeStyle(property,value)
    this.props.changeStyle(property.replace('animation','WebkitAnimation'),value)
  }
  componentDidMount(){
    let self=this
    $(".selectpicker").selectpicker({
      style:'dark-selectpicker'
    })
    $(".selectpicker").on("change",function(e){
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
    return (
      <div className="panel">
      <div className="panel-heading sidebar-header" onClick={this.toggleArrow} role="tab" id="headingAnimation" data-toggle="collapse" data-parent="#accordion" href="#collapseAnimation" aria-expanded="true" aria-controls="collapseAnimation">
      <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
      <span className="panel-title">
      ANIMATION
      </span>
      </div>
      <div id="collapseAnimation" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingShadow">
      <div className="panel-body">
      <div className="row">
      <div className="col-md-2">
      <span className="dark-label">Animation</span>
      </div>
      <div className="col-md-10">
      <div className="input-collection">
      <select style={{width:'130px'}} id="select-animation" data-property="animationName" className="selectpicker" data-live-search="true" onChange={this.handleChange}>
      <optgroup label="Attention Seekers">
      <option value="bounce">bounce</option>
      <option value="flash">flash</option>
      <option value="pulse">pulse</option>
      <option value="rubberBand">rubberBand</option>
      <option value="shake">shake</option>
      <option value="swing">swing</option>
      <option value="tada">tada</option>
      <option value="wobble">wobble</option>
      <option value="jello">jello</option>
      </optgroup>

      <optgroup label="Bouncing Entrances">
      <option value="bounceIn">bounceIn</option>
      <option value="bounceInDown">bounceInDown</option>
      <option value="bounceInLeft">bounceInLeft</option>
      <option value="bounceInRight">bounceInRight</option>
      <option value="bounceInUp">bounceInUp</option>
      </optgroup>

      <optgroup label="Bouncing Exits">
      <option value="bounceOut">bounceOut</option>
      <option value="bounceOutDown">bounceOutDown</option>
      <option value="bounceOutLeft">bounceOutLeft</option>
      <option value="bounceOutRight">bounceOutRight</option>
      <option value="bounceOutUp">bounceOutUp</option>
      </optgroup>

      <optgroup label="Fading Entrances">
      <option value="fadeIn">fadeIn</option>
      <option value="fadeInDown">fadeInDown</option>
      <option value="fadeInDownBig">fadeInDownBig</option>
      <option value="fadeInLeft">fadeInLeft</option>
      <option value="fadeInLeftBig">fadeInLeftBig</option>
      <option value="fadeInRight">fadeInRight</option>
      <option value="fadeInRightBig">fadeInRightBig</option>
      <option value="fadeInUp">fadeInUp</option>
      <option value="fadeInUpBig">fadeInUpBig</option>
      </optgroup>

      <optgroup label="Fading Exits">
      <option value="fadeOut">fadeOut</option>
      <option value="fadeOutDown">fadeOutDown</option>
      <option value="fadeOutDownBig">fadeOutDownBig</option>
      <option value="fadeOutLeft">fadeOutLeft</option>
      <option value="fadeOutLeftBig">fadeOutLeftBig</option>
      <option value="fadeOutRight">fadeOutRight</option>
      <option value="fadeOutRightBig">fadeOutRightBig</option>
      <option value="fadeOutUp">fadeOutUp</option>
      <option value="fadeOutUpBig">fadeOutUpBig</option>
      </optgroup>

      <optgroup label="Flippers">
      <option value="flip">flip</option>
      <option value="flipInX">flipInX</option>
      <option value="flipInY">flipInY</option>
      <option value="flipOutX">flipOutX</option>
      <option value="flipOutY">flipOutY</option>
      </optgroup>

      <optgroup label="Lightspeed">
      <option value="lightSpeedIn">lightSpeedIn</option>
      <option value="lightSpeedOut">lightSpeedOut</option>
      </optgroup>

      <optgroup label="Rotating Entrances">
      <option value="rotateIn">rotateIn</option>
      <option value="rotateInDownLeft">rotateInDownLeft</option>
      <option value="rotateInDownRight">rotateInDownRight</option>
      <option value="rotateInUpLeft">rotateInUpLeft</option>
      <option value="rotateInUpRight">rotateInUpRight</option>
      </optgroup>

      <optgroup label="Rotating Exits">
      <option value="rotateOut">rotateOut</option>
      <option value="rotateOutDownLeft">rotateOutDownLeft</option>
      <option value="rotateOutDownRight">rotateOutDownRight</option>
      <option value="rotateOutUpLeft">rotateOutUpLeft</option>
      <option value="rotateOutUpRight">rotateOutUpRight</option>
      </optgroup>

      <optgroup label="Sliding Entrances">
      <option value="slideInUp">slideInUp</option>
      <option value="slideInDown">slideInDown</option>
      <option value="slideInLeft">slideInLeft</option>
      <option value="slideInRight">slideInRight</option>

      </optgroup>
      <optgroup label="Sliding Exits">
      <option value="slideOutUp">slideOutUp</option>
      <option value="slideOutDown">slideOutDown</option>
      <option value="slideOutLeft">slideOutLeft</option>
      <option value="slideOutRight">slideOutRight</option>

      </optgroup>

      <optgroup label="Zoom Entrances">
      <option value="zoomIn">zoomIn</option>
      <option value="zoomInDown">zoomInDown</option>
      <option value="zoomInLeft">zoomInLeft</option>
      <option value="zoomInRight">zoomInRight</option>
      <option value="zoomInUp">zoomInUp</option>
      </optgroup>

      <optgroup label="Zoom Exits">
      <option value="zoomOut">zoomOut</option>
      <option value="zoomOutDown">zoomOutDown</option>
      <option value="zoomOutLeft">zoomOutLeft</option>
      <option value="zoomOutRight">zoomOutRight</option>
      <option value="zoomOutUp">zoomOutUp</option>
      </optgroup>

      <optgroup label="Specials">
      <option value="hinge">hinge</option>
      <option value="rollIn">rollIn</option>
      <option value="rollOut">rollOut</option>
      </optgroup>
      </select>
      </div>
      </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <span className="dark-label">Duration</span>
        </div>
        <div className="col-md-7">
        <div className="input-collection">
          <input type="range" className="slider" max="10" value={parseInt(this.props.style.WebkitAnimationDuration)} data-property="animationDuration" onInput={(e)=> this.handleChange(e,e.target.value+"s")} />
        </div>
        </div>
        <div className="col-md-3">
        <div className="input-collection">
          <input style={{marginLeft:"-3px"}} type="number" className="dark-input" value={parseInt(this.props.style.WebkitAnimationDuration)} data-property="animationDuration" onChange={(e)=> this.handleChange(e,e.target.value+"s")}/>
        </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <span className="dark-label">Delay</span>
          </div>
          <div className="col-md-7">
          <div className="input-collection">
            <input type="range" className="slider" max="10" value={parseInt(this.props.style.WebkitAnimationDelay)} data-property="animationDelay" onInput={(e)=> this.handleChange(e,e.target.value+"s")} />
          </div>
          </div>
          <div className="col-md-3">
          <div className="input-collection">
            <input style={{marginLeft:"-3px"}} type="number" className="dark-input" value={parseInt(this.props.style.WebkitAnimationDelay)} data-property="animationDelay" onChange={(e)=> this.handleChange(e,e.target.value+"s")}/>
          </div>
          </div>
          </div>
      </div>
      </div>
      </div>
    )
  }
}
