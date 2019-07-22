import React from 'react';
import '../less/footer.less';
import { BackTop } from 'antd';

class Footer extends React.Component{

  render(){
    return (
      <footer className="Homefooter">
        <span>©2019 SACC All Rights Reserved</span>
        <BackTop />
      </footer>
    )
  }
}

export default Footer




