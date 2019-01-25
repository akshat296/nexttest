import Header from '../components/head'
import Footer from '../components/footer';
import UserInfo from '../components/userInfo';
import React, { Component } from 'react'
import Link from 'next/link';

export default class extends Component {
  componentWillMount() {
    this.setState({
        userNames: this.props.userNames
    });

  }
    static async getInitialProps(props) {
        const res = await fetch('https://api.github.com/users');
        const userInfo = await res.json();
        console.log(userInfo,"userInfo")
        let userNames = userInfo.reduce((acc, data)=> [...acc,data.login],[]);
        return  { userNames }
      }
      render(){

        const user = this.props.userNames.map((n,i)=>(
            <tr key={i}>
                <td>
                    {n}
                </td>
            </tr>))
        return (
            <div>
              <Header />
              <div style="background:cyan;">
                <table>
                    <tbody>
                       {user}
                    </tbody>
                </table>
                </div>
              <Footer/>
            </div>
          )
      }
 
}
