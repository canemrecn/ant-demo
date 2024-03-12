// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router'dan Link'i içe aktar
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: <Link to={path}>{label}</Link>, // Label'ı Link komponenti ile sarmalla
  };
}

const items = [
  getItem('Home', '1', <PieChartOutlined />, [], '/'),
  getItem('Map', '3', <ContainerOutlined />, [], '/map'),
  getItem('Dashboard', '4', <MailOutlined />, [], './dashboard'),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9', null, [], '/option9'),
    getItem('Option 10', '10', null, [], '/option10'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11', null, [], '/option11'),
      getItem('Option 12', '12', null, [], '/option12'),
    ]),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      style={{ 
        width: collapsed ? '0' : '256px', 
        height: '100vh', 
        position: 'fixed', 
        left: '0', 
        transition: 'width 0.3s ease-in-out', 
        paddingTop: '0px', 
        background: '#001529',
        overflow: 'auto'
      }}
    >
      <Menu 
        defaultSelectedKeys={['1']} 
        defaultOpenKeys={['sub1']} 
        mode="inline" 
        theme="dark" 
        inlineCollapsed={collapsed} 
        items={items} 
      />
    </div>
  );
};

export default Sidebar;
