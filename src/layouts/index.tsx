import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { history } from 'umi'
import './index.less'
import routerConfig from '../../config/router'
export default (props: any) => {
    const { Header, Sider, Content } = Layout;
    let items = routerConfig.routes
    items.forEach((element) => {
        element.icon = React.createElement(MenuFoldOutlined)
        element.children = element.routes
    });
    const [collapsed, setCollapsed] = useState(false);
    const handleClick = (e: any) => {
        history.push({
            pathname: e.item.props.path
        })
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['table']}
                    defaultOpenKeys={['assembly']}
                    items={items}
                    onClick={handleClick}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 20 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        minHeight: 'calc(100vh - 112px)',
                        boxSizing: 'border-box'
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}

