import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import logo from '../../../../../resource/assets/logo.jpg';

import './index.less';

const { Sider } = Layout;

class SubMenuList extends React.PureComponent {
  componentDidMount() {
    // console.log('SiderMenu 的 props', this.props);
  }

  render() {
    console.log('SubMenuList render, selectedKeys', this.props.selectedKeys);
    return (
      <Sider style={{ backgroundColor: 'pink' }}>
        <div
          className='logo'
          style={{ paddingLeft: this.props.collapsed ? '18px' : '6px' }}
        >
          <img src={logo} alt='logo' />
          <span style={{ display: this.props.collapsed ? 'none' : 'block' }}>
            AU-andmin
          </span>
        </div>
        this is sider
      </Sider>
    );
  }
}

SubMenuList.propTypes = {
  // responsive: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  // menus: PropTypes.array.isRequired,
  // openMenu: PropTypes.func.isRequired,
  selectedKeys: PropTypes.string,
  // openKeys: PropTypes.array.isRequired,
};
export default SubMenuList;
