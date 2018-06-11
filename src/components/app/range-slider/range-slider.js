import React, { Component } from 'react'
import './range-slider.scss'

class RangeSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const name = this.props.name
    const value = this.props.value
    const onChange = this.props.onChange
    const steps = this.props.steps
    const min = this.props.min
    const max = this.props.max

    return (
      <div>
        <div className="range-slider">
          <div className="range-slider__delimiter">
            <input type="range" name={name} value={value} onChange={onChange} step={steps} min={min} max={max} />

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
            <div className="tooltip" style={{left: value + '%'}}>
              <input type="number" name={name} value={value} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RangeSlider
