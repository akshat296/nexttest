import Header from '../components/head'
import UserInfo from '../components/userInfo';
import React, { Component } from 'react'
import Link from 'next/link';

export default class extends Component {
  componentWillMount() {
    this.setState({
      images: this.props.avatar_url
    });
  }
  render(){
    return (
      <div>
          <Header />
          <div>
             <Link href="/user"><a className="text-dark">Users</a></Link>
          </div>
      </div>
    );
  }
  
}
