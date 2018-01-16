import React from 'react'
import ReactDOM from 'react-dom'
import classes from './index.css'

class HelloMessage extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render(<HelloMessage name='World' />, mountNode)
