import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  render() {
    // console.log(this.props.counters)
    const { counters, onDelete, onIncrement, onDecrement, onReset } = this.props
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              value={counter.value}
              selcted={true}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              counter={counter}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Counters
