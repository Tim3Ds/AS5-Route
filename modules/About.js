import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return ( 
        <div>
            About <br />
            <Link to="/">Home</Link>
        </div>
    )
  }
})