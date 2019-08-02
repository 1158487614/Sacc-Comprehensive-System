import React from 'react';
import '../less/login.less'
import List from './List';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';
import { Button, notification } from 'antd';

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showInputBox:false,
      showSys:false,
      userName:'admin',
      Password:'123',
      targetLogin:'',
      unregisteredUserName:'',
      unregisteredPassword:'',
      unregisteredMail:'',
      flag:false,
      show:false,
      finishRegistered:false,
      registeredMessages:''
    }
    this.LoginRef = React.createRef();
    this.beginRef = React.createRef();
  }

  changeShowButton = () => {
    this.beginRef.current.classList.add('Home-beginAnimation');
    const self = this;
    setTimeout(function(){
      self.setState({
        showInputBox:true,
        targetLogin:'登录',
        show:true
      })
    },500)
  }

  changeInputColor = (e) =>{
    switch(e.target.name){
      case 'userName':
        this.setState({
          userName: e.target.value
        })
        break;
      case 'password':
        this.setState({
          Password: e.target.value
        })
        break;
      case 'unregisteredUserName':
        this.setState({
          unregisteredUserName: e.target.value
        })
        break;
      case 'unregisteredPassword':
        this.setState({
          unregisteredPassword: e.target.value
        })
        break;
      case 'unregisteredMail':
        this.setState({
          unregisteredMail: e.target.value
        })
        break;
    }
    e.target.value ?  e.target.className='LoginInputActive': e.target.className="";

    if(this.state.unregisteredUserName && this.state.unregisteredPassword && this.state.unregisteredMail){
      this.setState({
        finishRegistered: true
      })
    }else{
      this.setState({
        finishRegistered: false
      })
    }
  }

  login = () =>{
      this.props.IfLogin(this.state.userName, this.state.Password)
      this.props.showBlist()
      this.LoginRef.current.classList.add("LoginNarrow");
      const self = this;
      setTimeout(function(){
        self.setState({
          showSys: true
        })
      }, 1100)
  }
  
  unregistered = () => {
    this.props.registered(this.state.unregisteredUserName, this.state.unregisteredPassword, this.state.unregisteredMail)

     this.openNotification();
  }

  openNotification = () => {
    notification.open({
      description:this.state.registeredMessages,
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };

  showLogin = (e) => {
    this.setState({
      show:false
    })
    if(e.target.innerText){
      e.target.innerText === '登录'?
        this.setState({
          flag:true
        }):          
        this.setState({
          flag:false
        })
      const self =this;
      const innerText = e.target.innerText;
      setTimeout(function(){
        self.setState({
          targetLogin:innerText
        })
      },300)

    }
  }
  
  changeAnimation = () => {
    if(this.state.show){
      return  {animation: 'HomeslideOut .8s forwards linear'}
    }else{
      if(this.state.flag){
        return {animation: 'HomeslideUp .3s forwards linear'}
      }else{
        return {animation: 'HomeslideBottom .3s forwards linear'}
      }
    }
  }

  
  
  render(){
    const { loginStatus }  = this.props;
    return(
      <div className="Home">
      {
        loginStatus === 5002 && this.state.showSys? 
        <List />:
        <div className="HomeLogin" ref={this.LoginRef}>
          <div className="HomeLoginCaption">
            { 
              this.state.showInputBox ? 
                <div className="HomeLoginBox">
                  <p 
                  onClick={this.showLogin} 
                  className={this.state.targetLogin === '登录'? 'LoginActive': ''}
                  >
                    登录
                  </p>
                  <p 
                  onClick={this.showLogin}
                  className={this.state.targetLogin === '注册'? 'LoginActive': ''}
                  >
                    注册
                  </p>
                </div>
            : 
            <div ref = { this.beginRef } className="HomeBegin">
              <p>SACC 比赛系统</p>
              <button onClick={this.changeShowButton}  id="beginBtn">开始使用</button>
            </div>
            }

            {
              this.state.targetLogin == '登录'?                
              <div className="LoginInput"
                style={this.changeAnimation()}>
                <input
                  type="text" 
                  placeholder="用户名" 
                  onChange={this.changeInputColor} 
                  value={this.state.userName} 
                  name="userName"
                />
                <input 
                  type="password" 
                  placeholder="密码" 
                  onChange={this.changeInputColor} 
                  value={this.state.Password} 
                  name="password"
                />
                <button id="HomeLogin" onClick={this.login}>登录</button>
              </div>
              :this.state.targetLogin == '注册'?
              <div className="unregisteredInput"
              style={this.state.flag?
                {animation: 'HomeslideBottom .3s forwards linear'}
                :
                {animation:'HomeslideUp .3s forwards linear'}}>
                <input 
                  type="text" 
                  placeholder="用户名" 
                  onChange={ this.changeInputColor } 
                  value={ this.state.unregisteredUserName } 
                  name="unregisteredUserName"
                />
                <input 
                  type="text" 
                  placeholder="邮箱" 
                  onChange={ this.changeInputColor } 
                  value={ this.state.unregisteredMail } 
                  name="unregisteredMail"
                />
                <input 
                  type="password" 
                  placeholder="密码" 
                  onChange={this.changeInputColor} 
                  value={this.state.unregisteredPassword} 
                  name="unregisteredPassword"
                />
                <p onClick={this.unregistered}>
                   <img
                    src={
                      this.state.finishRegistered ?
                        'https://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%B7%A6%E7%AE%AD%E5%A4%B4.png'
                        :'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%94%99%E8%AF%AF.png'}
                />
                </p>
              </div>
              :''
            }
          </div>
      </div>
    }
    </div>
    )
  }
}


const mapStateToProps = (state) =>{
	return {
    loginStatus: state.home.loginStatus,
    BasicInformationList: state.home.BasicInformationList,
    registeredStatus: state.home.registeredStatus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		IfLogin(userName,password){
      dispatch(actionCreators.Login(userName,password));
    },
    showBlist(){
      dispatch(actionCreators.BasicInformation())
    },
    registered(unregisteredName,unregisteredPassword,unregisteredMail){
      dispatch(actionCreators.Registered(unregisteredName,unregisteredPassword,unregisteredMail))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
