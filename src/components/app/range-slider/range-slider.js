import React, { Component } from 'react'
import './range-slider.scss'

class RangeSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.min
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  render() {
    return (
      <div>
        <div className="range-slider">
          <div className="range-slider__delimiter">
            <input type="range" value={this.state.value} onChange={this.handleChange} step={this.props.steps} min={this.props.min} max={this.props.max}/>
            <div className="range-slider-numbers">
              <span>2</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50</span>
              <span>60</span>
              <span>70</span>
              <span>80</span>
              <span>90</span>
              <span>100</span>
            </div>
            <div className="tooltip" style={{left: this.state.value + '%'}}>
              <input type="number" value={this.state.value} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RangeSlider
