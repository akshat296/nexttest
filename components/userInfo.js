import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class extends Component {
  componentWillMount () {
    this.setState({
      images: this.props.avatar_url
    })
  }
  render () {
    // console.log('Doc==>',document);

    return (
     <div>
       <div className="test">
          test
       </div>

     </div>
    )
  }
}
