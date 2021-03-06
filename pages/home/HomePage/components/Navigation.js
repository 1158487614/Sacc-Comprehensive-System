import React from 'react';
import '../less/navigation.less';
import Router from 'next/router';
import { Modal } from 'antd';

class Navigation extends React.Component{
  state = {
    LoginVisible: false,
    RegisteredVisible: false
  };

  setLoginVisible(LoginVisible) {
    this.setState({ LoginVisible });
  }

  setRegisteredVisible(RegisteredVisible) {
    this.setState({ RegisteredVisible });
  }
  logout = () =>{
    localStorage.clear()
    document.cookie="authkey=''"
    setTimeout(() => {
      Router.push('/')
    }, 100);
  }
  render(){
    return (
      <div className="Homenavigation">
        <div className="Homenavigation-left">
          <span>SACC</span>
        </div>
        <div className="Homenavigation-right">
          <ul>
            <li onClick={() => Router.push('/')}>首页</li>
            <li onClick={() => Router.push('/competition')}>比赛系统</li>
            <li onClick={() => Router.push('/assignment')}>练习系统</li>
            <li onClick={() => Router.push('/personcenter')}>个人中心</li>
            <li onClick={this.logout}>退出登录</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navigation