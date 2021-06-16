import React, { Component } from 'react'

class Counter extends Component {
  render() {
    const { counter, onDelete, onIncrement, onDecrement } = this.props
    console.log(onIncrement)
    return (
      <div>
        {this.props.children}
        <button
          className="m-3 btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>

        <button
          className="m-3 btn btn-info btn-sm"
          onClick={() => onDecrement(counter)}
        >
          Decrement
        </button>

        <button
          className="m-3 btn btn-danger btn-sm"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'm-3 badge bg-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    //Object destructing
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
